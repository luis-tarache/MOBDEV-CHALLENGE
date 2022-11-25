import {Multiselect} from 'multiselect-react-dropdown'
import {Box} from '@mui/material'
import '../index.css';

export default function Menu({dogs, selectedDogs, setSelectedDogs}) { 

    let selectedVal = []

    const data = []

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


  return (
    <Box sx={{flexGrow: 1, my: 3}}>
    <Multiselect
        isObject={false}
        onKeyPressFn={function noRefCheck(){}}
        onRemove={e =>{
            selectedVal.push(e)
            setSelectedDogs(selectedVal)
        }}
        onSearch={function noRefCheck(){}}
        onSelect={e =>{
            selectedVal.push(e)
            setSelectedDogs(selectedVal)
        }}
        options={data} 
        placeholder="Select a Breed"
        style={{
            searchBox: {
                padding: '13px',
            }
        }}
    />
    </Box>
  )
}
