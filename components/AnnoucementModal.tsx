import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react'
import React from 'react'

const AnnoucementModal = (props:any) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make an announcement for {props.title}</ModalHeader>
          <ModalBody>
            <Input type="text" placeholder='Enter your announcement here'></Input>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} >
              Submit
            </Button>
            <Button colorScheme="red" onClick={props.onClose}>
                Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default AnnoucementModal