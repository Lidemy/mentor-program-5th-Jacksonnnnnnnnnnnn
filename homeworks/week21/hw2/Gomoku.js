/* eslint-disable */
import React, {useEffect, useState} from 'react';
import Board from './Board'
import styled from 'styled-components'
import logo from './game.png'

const Wrapper = styled.div`
  font-family: Copperplate, Papyrus, fantasy;
  padding: 5px;
`

const Title = styled.div`
  text-align: center;
  font-size: 30px;
`

const GameLogo = styled.img`
  width: 30px;
  height: 30px;

  &:hover{
    transform:scale(1.2);
  }
`



function Game (props) {

  return (
    <Wrapper>
      <Title><GameLogo src={logo}/> I want to play a game : Gomoku <GameLogo src={logo}/></Title>
      <Board />
    </Wrapper>
    
  )
}

export default Game