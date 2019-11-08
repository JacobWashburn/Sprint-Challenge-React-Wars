import React from 'react'
import Card from './CardComponents/Card'
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function CdWppr(props){
    return (
        <CardWrapper>
            <Card data={props.data}/>
        </CardWrapper>
    )
}