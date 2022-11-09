import { Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  // console.log(getDB(process.env.NEXT_PUBLIC_NOTION_DB as string))
  return (
    <>
      <Box my="10">
        <Divider mb="5"></Divider>
        <Flex justifyContent={'space-between'}>
          <div>Made with 💖 by Porygonal</div>
          <div>Dell Hackathon 2022</div>
        </Flex>
      </Box>
    </>
  )
}

export default Footer