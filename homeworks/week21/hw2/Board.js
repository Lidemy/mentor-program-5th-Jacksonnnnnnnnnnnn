/* eslint-disable */
import React, { useState, useRef } from "react";
import Square from './Square';
import styled from 'styled-components'
import { Button, Modal } from 'react-bootstrap';

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChessBoard = styled.div`
  min-width: 630px;
`

const Round = styled.div`
  font-weight: bold;
  margin: 15px;
  text-align: center;
`

const Row = styled.div`
`

export default function Board () {
  const [board, setBoard] = useState(Array(19).fill(Array(19).fill(null)))
  let isBlackNext = useRef(true)

  const [show, setShow] = useState(false);
  const handleCloseDialog = () => setShow(false);
  const handleShowDialog = () => setShow(true);

  function updateBoard(x, y, newValue) {
    const newBoard = JSON.parse(JSON.stringify(board))
    if(newBoard[x][y]) return
    newBoard[x][y] = newValue
    newBoard[x][y] = isBlackNext.current ? 'B' : 'W'
    setBoard(newBoard)
    findWinner(newBoard,x,y)
    isBlackNext.current = !isBlackNext.current
  }

  function renderBoard(row, col, value) {
    return (
      <Square
        row={row}
        col={col}
        value={board[row][col]}
        onClick={() => updateBoard(row, col, value)}
      />
    )
  }
 

  function countTotal(board ,currentX, currentY, directionX, directionY) {
    const now = board[currentX][currentY]
    let tempX = currentX
    let tempY = currentY
    

    let total = 0
    do {
      tempX += directionX
      tempY += directionY

      if (
        // 點擊最外圍的棋盤會計算到畫面不存在的數列，因此排除 -1 跟 19
        tempX === -1 || tempY === -1 ||
        tempX === 19 || tempY === 19
      ) break
  
      if (board[tempX][tempY] === now) {
        total++
      } else {
        break
      }
    } while (true)
    return total
  }

  function findWinner(board, x, y) {
    // 上、下: x+1、x-1 
    // 左、右: y-1、y+1
    // 往左斜(上半、下半): (x-1, y-1)、(x+1, y+1)
    // 往右斜(上半、下半): (x-1, y+1)、(x+1, y-1)

    if (
      countTotal(board, x, y, 1, 0) + countTotal(board, x, y, -1, 0) >= 4 ||
      countTotal(board, x, y, 0, 1) + countTotal(board, x, y, 0, -1) >= 4 ||
      countTotal(board, x, y, 1, 1) + countTotal(board, x, y, -1, -1) >= 4 ||
      countTotal(board, x, y, 1, -1) + countTotal(board, x, y, -1, 1) >= 4
    ) {
      handleShowDialog()
      return board[x][y];
    }

    if (board.every((row) => row.every((col) => col))) {
      alert(`平手啦！`)
      return "draw";
    }
  }

  function reload() {
    window.location.reload();
  }


  const status = 'Next player: ' + (isBlackNext.current ? 'Black Chess' : 'White Chess')
  return (
    <Wrapper>
      <ChessBoard>
      <Round>{status}</Round>
        {
          board.map((row, rowIndex) => {
            return (
              <Row>
                {
                  row.map((col, colIndex) => {
                    return (
                      renderBoard(rowIndex, colIndex, `${[rowIndex]}${[colIndex]}`)
                    )
                  })
                }
              </Row>
            )
          })
        }
      </ChessBoard>

      <Modal show={show} onHide={handleCloseDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, winner is {(isBlackNext.current ? 'White' : 'Black')} player!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={reload}>
            Play again
          </Button>
          <Button variant="primary" onClick={handleCloseDialog}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  )
}