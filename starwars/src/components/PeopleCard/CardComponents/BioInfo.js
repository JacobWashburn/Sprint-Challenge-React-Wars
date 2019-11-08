import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const InfoWrapper = styled.div`
  background-color: rgba(0,255,255,.5);
  width: 50%;
  margin: 0 auto;
`;

const InfoParagraph = styled.p`
  
`;

export default function Info(props) {
    const [homeworld, setHomeworld] = useState('');
    useEffect(()=>{
        axios.get(props.data.homeworld)
            .then(response => {
                console.log('homeworld',response);
                setHomeworld(response.data)
            })
    },[]);
    return (
        <InfoWrapper>
            <InfoParagraph>Homeworld: {homeworld.name}</InfoParagraph>
            <InfoParagraph>Number of Films: {props.data.films.length}</InfoParagraph>
            <InfoParagraph>Number of Starships: {props.data.starships.length}</InfoParagraph>
            <InfoParagraph>Number of Vehicles: {props.data.vehicles.length}</InfoParagraph>
        </InfoWrapper>
    )
}