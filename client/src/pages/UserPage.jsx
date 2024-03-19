import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";


const UserPage = () => {
	const { user, setUser } = useState(null);
	const { username } = useParams();
	const showToast = useShowToast();


	useEffect(() => {
		const getUser = async () => {

			try {
				const res = await fetch(`/api/posts/user/${username}`);
				const data = await res.json();
      	if(data.error) {
          showToast("Error", data.error,"error")
          return
        }
        setUser(data);
			} catch (error) {
				showToast("Error",error,"error")
			}
    }
  
    getUser()
  },[username]);

	
	return (
    <>
   <UserHeader/>
   <UserPost likes={1200} replies={482} postImage={"/post1.png"} postTitle="adsad asds" />
   <UserPost likes={1200} replies={482} postImage="/post2.png" postTitle="adsad asds" />
   <UserPost likes={1200} replies={482} postImage="/post3.png" postTitle="adsad asds" />
   <UserPost likes={1200} replies={482} postImage="/post3.png" postTitle="adsad asds" />
  
    </>
  )
}    

export default UserPage;