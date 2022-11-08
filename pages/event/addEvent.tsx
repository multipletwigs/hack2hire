import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../components/Header'
import Container from '../../layouts/Container'
import { BiArrowBack } from 'react-icons/bi'
import AddEventForm from '../../components/AddEventForm'

const addEvent = () => {
  const router = useRouter(); 
  return (
    <Container>
      <Header header={'Add a new event'} desc={'Give your events all the data it needs!'} buttons={
        <Button w="100%" leftIcon={<BiArrowBack/>} onClick={()=>{
          router.push('/event'); 
        }}>Back to events page</Button>
      }></Header>
      <AddEventForm/>
    </Container>
  )
}

export default addEvent