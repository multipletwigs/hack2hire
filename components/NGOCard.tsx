import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const NGOCard = (props: any) => {
  return (
    <Box bg="white" p="5">
        <Text fontSize="3xl" fontWeight="700">{props.ngo.NGO_name}</Text>
        <Text fontSize="lg" fontWeight="500">{props.ngo.NGO_email}</Text>
    </Box>
  )
}

export default NGOCard