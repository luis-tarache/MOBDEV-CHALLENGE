import React from 'react'
import Menu from './components/Menu'
import DogList from './components/DogList'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Container} from '@mui/material'

export default function App() { 

  const [dogs, setDogs] = useState([])
  const [selectedDogs, setSelectedDogs] = useState([])

  const settingDogs = (fetchedData) => {

    let data = []
    const tempData = Object.entries(fetchedData.data.message)

    tempData.forEach(elem => {

        if (elem[1].length === 0) {
            data.push(elem[0])
        }
        
        if (elem[1]) {
            elem[1].forEach(el => {
                let tempArr = [elem[0], el].join('/')
                data.push(tempArr)
            })
        } 
    })

    return data
  }  

  const fetchDogs = async () => {

    try{

    const result = await axios(
      `https://dog.ceo/api/breeds/list/all`
    )

    setDogs(settingDogs(result))

    //setDogs(Object.entries(result.data.message))

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

