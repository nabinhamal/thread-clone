import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../components/Actions'
import Comment from '../components/Comment'

const PostPage = () => {
	const [liked,setLiked] = useState(false)
  return (
    <>
			<Flex>
				<Flex w={"full"} alignItems={"center"} gap={3}>
					<Avatar src='/zuck-avatar.png' size={"md"} name='Nabin Hamal' />
					<Flex>
						<Text fontSize={"sm"} fontWeight={"bold"}>
							nabinhamal
						</Text>
						<Image src='/verified.png' w='4' h={4} ml={4} />
					</Flex>
				</Flex>
				<Flex gap={4} alignItems={"center"}>
					<Text fontSize={"xs"} width={36} textAlign={"right"} color={"gray.light"}>
						1d ago
					</Text>
<BsThreeDots/>
</Flex>
</Flex>
<Text my={3}>Let's Talk about threads</Text>
<Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray.light'}>
	<Image src='/post1.png' w={'full'} />
</Box>

<Flex gap={3} my={3}>
	<Actions liked={liked} setLiked={setLiked}  />
</Flex>

<Flex gap={2} alignItems={'center'} >
	<Text color={'gray.light'} fontSize={'sm'}>238 replies</Text>
	<Box w={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
	<Text color={'gray.light'} fontSize={'sm'}>{200 + (liked ? 1 :0)} likes</Text>
</Flex>
<Divider my={4}/>

<Flex justifyContent={"space-between"}>
	<Flex gap={2} alignItems={"center"}>
		<Text fontSize={"2xl"}>👏</Text>
		<Text color={'gray.light'}>Get the app to like , reply and post</Text>

	</Flex>
	<Button>Get</Button>
</Flex>
	<Divider my={4}/>
	<Comment comment="Looks really good"
	createdAt='2d'
	likes={100}
	username='Johnsmith'
	userAvatar='http://bit.ly/dan-abramov'
	/>
	<Comment comment="Looks really good"
	createdAt='2d'
	likes={100}
	username='Johnsmith'
	userAvatar='http://bit.ly/dan-abramov'
	/>
	<Comment comment="Looks really good"
	createdAt='2d'
	likes={100}
	username='Johnsmith'
	userAvatar='http://bit.ly/dan-abramov'
	/>
</>

  )
}

export default PostPage