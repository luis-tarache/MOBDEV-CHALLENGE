import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Dog({dog}) { 

  const [dogImgUrl, setDogImgUrl] = useState('')

  const fetchDogs = async () => {

    try{

    const result = await axios(
      `https://dog.ceo/api/breed/${dog}/images/random`
    )

    setDogImgUrl(result.data.message)

    }catch(err){
      console.log('ERROR TYPE', err)
  }
    
  }

  useEffect(() => {

    fetchDogs()

  }, [])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="350"
        image={dogImgUrl}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {dog}
        </Typography>
      </CardContent>
    </Card>
  )
}
 
