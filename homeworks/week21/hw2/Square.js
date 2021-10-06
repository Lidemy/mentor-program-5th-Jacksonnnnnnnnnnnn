/* eslint-disable */
import React, { useState } from "react"
import styled from 'styled-components'

const Piece = styled.div`
  background: #DEB887;
  position: relative;
  height: 34px;
  width: 34px;

  float: left;
  line-height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;

  &:before {
    content: "";
    height: 100%;
    width: 2px;
    background: black;
    position: absolute;
    top: 0;
    left: 50%;

    ${(props) =>
      props.row === 0 &&
      `
      top: 50%;
    `}

    ${(props) =>
      props.row === 18 &&
      `
      height: 50%;
    `}
  }

  &:after {
    content: "";
    width: 100%;
    height: 3px;
    background: black;
    position: absolute;
    top: 50%;
    left: 0;

    ${(props) =>
      props.col === 0 &&
      `
      left: 50%;
    `}

    ${(props) =>
      props.col === 18 &&
      `
      width: 50%;
    `}
  }
`

const Chess = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  transform: scale(0.6);
  z-index: 1;
  opacity: 1;
  cursor: pointer;
  
  &:hover {
    opacity: 0.3;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.9);
  }

  ${(props) =>
    props.value === "B" &&
    `
   background: black;
  `}

  ${(props) =>
    props.value === "W" &&
    `
   background: white;
  `}
`

export default function Square(props) {

  return (
    <Piece 
      onClick={() => props.onClick()}
      row={props.row}
      col={props.col}
    >
      <Chess value={props.value} />
    </Piece>
  )
}