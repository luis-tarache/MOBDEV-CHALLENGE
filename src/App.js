import React from 'react'
import Menu from './components/Menu'
import DogList from './components/DogList'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Container} from '@mui/material'

export default function App() { 

  const [dogs, setDogs] = useState([])
  const [selectedDogs, setSelectedDogs] = useState([])
  

  const fetchDogs = async () => {

    try{

    const result = await axios(
      `https://dog.ceo/api/breeds/list/all`
    )

    setDogs(Object.entries(result.data.message))

    }catch(err){
      console.log('ERROR TYPE', err)
  }
    
  }

    useEffect(() => {

      fetchDogs()

  }, [])


  

  return (
    <Container>
    <Menu dogs = {dogs} 
          setSelectedDogs = {setSelectedDogs}
          selectedDogs = {selectedDogs}
          />
    <DogList dogs = {dogs}
              selectedDogs = {selectedDogs}
    />
    </Container>
  )
}

