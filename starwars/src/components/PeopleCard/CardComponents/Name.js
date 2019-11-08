import React from 'react'
import styled from 'styled-components'

const NameH1 = styled.h1`
  font-size: 2.5rem;
`;

export default function Name(props) {
  return (
      <NameH1>{props.name}</NameH1>
  )
}