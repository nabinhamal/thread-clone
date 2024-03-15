import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"


const UserPage = () => {
  return (
    <>
   <UserHeader/>
   <UserPost likes={1200} replies={482} postImage="/post1.png" postTitle="adsad asds" />
   <UserPost likes={1200} replies={482} postImage="/post2.png" postTitle="adsad asds" />
   <UserPost likes={1200} replies={482} postImage="/post3.png" postTitle="adsad asds" />
   <UserPost likes={1200} replies={482} postImage="/post4.png" postTitle="adsad asds" />
  
    </>
  )
}

export default UserPage