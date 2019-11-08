import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  
`;

export default function Card(props) {
    console.log({props})
    return (
        <CardWrapper>
            {props.data.map((person,index) =>{
                return (
                    <h1 key={index}>{person.name}</h1>
                )
            })}
        </CardWrapper>
    )
}