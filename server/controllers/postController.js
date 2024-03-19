import User from "../models/userModel.js";
import Post from "../models/postModel.js";
import {v2 as cloudinary} from "cloudinary"

const createPost = async (req, res) => {
    try {
        const {postedBy,text} = req.body
let {img } = req.body

        if(!postedBy || !text) {
            return res.status(400).json({error:"PostedBy and text fields is required"})
         }

const user = await User.findById(postedBy)
if(!user) {
    return res.status(404).json({error:"User not found"})
}

if(user._id.toString() !== req.user._id.toString()) {
    return res.status(401).json({error:"Unauthorized to create post"})
}


const maxLength = 500
if(text.length > maxLength) {
    return res.status(400).json({error:"Text must be less than $(maxLength) characters"})
}

if (img) {
    const uploadedResponse = await cloudinary.uploader.upload(img);
    img = uploadedResponse.secure_url;
}


const newPost = new Post({postedBy,text,img})
await newPost.save()

res.status(201).json({message:"Post created successfully",newPost})

    } catch (err) {
        res.status(500).json({error: err.message});
        console.log(err);
    }
}

const getPost = async (req, res) => {
    try {
        const post = await  Post.findById(req.params.id)

        if(!post){
            return res.status(404).json({error:"Post not found"})
        }

        res.status(200).json({post})
    } catch (err) {
        res.status(500).json({error: err.message});
        console.log(err);
    }
}

const deletePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      if (!post){
        return res.status(404).json({error:"No post found"})
      }  
      if(post.postedBy.toString() !== req.user._id.toString()) {
        res.status(401).json({error:"Unautorized to delete post"})
      }

      await Post.findByIdAndDelete(req.params.id)
      res.status(200).json({message:"Post deleted successfully"})
    }catch (err) {
        res.status(500).json({error: err.message});
        console.log(err);
    }
}


const likeUnlikePost = async (req, res) => {
    try {
        const {id:postId} = req.params;
        const userId = req.user.id;

        const post = await Post.findById(postId);

if(!post) {
    return res.status(404).json({error:"Post not found"})
}

const userLikedPost = post.likes.includes(userId)

if(userLikedPost){
     //unlike post
     await Post.updateOne({_id: postId}, {$pull:{likes: userId}} )
     res.status(200).json({message:"Post Unliked successfully"})
}else{
//like post
post.likes.push(userId)
await post.save()
     res.status(200).json({message:"Post liked successfully"})
}

    } catch (err) {
        res.status(500).json({error: err.message});
        console.log(err);
        
    }
}

const replyToPost = async(req, res) => {
    try {
        const{text} = req.body;
        const postId = req.params.id
        const userId = req.user._id;
        const userProfilePic = req.body.profilePic
        const username = req.user.username

        if(!text){
            return res.status(400).json({error:"Text field is required"})
        }

        const post = Post.findById(postId)
        if(!post){
            return res.status(400).json({error:"Post not found"})
        }

        const reply = {userId,text,username,userProfilePic}

        post.replies.push(reply)
        await post.save()

        return res.status(200).json({message:"Reply added successfully"},post)
        
    } catch (err) {
        res.status(500).json({error: err.message});
        console.log(err);
    }
}


const getFeedPosts = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if(!user) {
            return res.status(404).json({error:"User not found"})
        }

        const following  = user.following

        const feedPosts = await Post.find({postedBy:{$in:following}}).sort({createdAt: -1})

        res.status(200).json({feedPosts})


    } catch (err) {
        res.status(500).json({error: err.message});
        console.log(err);
    }
}

export {createPost,getPost,deletePost,likeUnlikePost,replyToPost,getFeedPosts}