import Dog from './Dog'
import {Container, Grid} from '@mui/material'

export default function DogList({dogs, selectedDogs}) { 

    let data = []

    dogs.forEach(elem => {

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

    if (selectedDogs.length > 0) 
        return (
            <Container>
            <Grid container spacing = {2}>
            {selectedDogs[0].map(dog => (
                <Grid key = {dog} item xs={12} sm={6} md={4} lg={3}>
                <Dog dog = {dog}/>
                </Grid>
            ))}
            </Grid>
            </Container>
          )
    
            return (
                <Container>
                <Grid container spacing = {2}>
                {data.map((dog) => (
                <Grid key= {dog} item xs={12} sm={6} md={4} lg={3}>
                <Dog dog = {dog}/>
                </Grid>
                ))}
                </Grid>
                </Container>
        )
}
