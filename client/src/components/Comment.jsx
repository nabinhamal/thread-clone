import { Avatar } from '@chakra-ui/react'
import React, { useState } from 'react'

const Comment = () => {
    const [liked,setLiked] = useState(false)
  return (

    <>
    <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src='/zuck-avatar.png' size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
            <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize='sm' fontWeight='bold'>
                    mark
                </Text>
            </Flex>
            <Text>ttt</Text>
        </Flex>
    </Flex>
    {!lastReply ? <Divider /> : null}
</>
);
};

export default Comment