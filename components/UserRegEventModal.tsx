import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, Tag } from '@chakra-ui/react'
import React from 'react'

const AnnoucementModal = (props:any) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make an annoucement for {props.title}</ModalHeader>
          <ModalBody>
            <label>Add an announcement description</label>
            <Input type="text" placeholder="Add an annoucement"></Input>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={"blue"} onClick={props.onClose}>Submit Announcement</Button>
            <Button colorScheme={"red"} ml="5" onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default AnnoucementModal