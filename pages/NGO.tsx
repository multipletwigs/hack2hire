import React, { useContext } from 'react'
import {ActiveUserContext} from '../context/ActiveUserContext';
import Container from '../layouts/Container'

const NGO = () => {
  const ActiveUser = useContext(ActiveUserContext);
  return (
    <Container>
        <div>NGO</div>
    </Container>
  )
}

export default NGO