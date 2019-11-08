import React from 'react'
import styled from 'styled-components'
import Name from './Name'
import BioInfo from './BioInfo'


const Card = styled.div`
  width: 45%;
  color: darkred;
  background-color: rgba(184,134,11,.6);
  margin: 2% 0;
  
`;


export default function Cards(props) {
    console.log({props})
    return (


        props.data.map((person, index) => {
            return (
                <Card key={index}>
                    <Name name={person.name}/>
                    <BioInfo data={person}/>
                </Card>)
        })


    )
}