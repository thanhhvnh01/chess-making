import React from 'react'
import ChessSquare from './ChessSquare'
import './Chessboard.scss'

const xLine = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const yLine = [8, 7, 6, 5, 4, 3, 2, 1]

const Chessboard = () => {

    const renderSquare = () => {
        const arr = []
        for (let y = 0; y < yLine.length; y++) {
            for (let x = 0; x < xLine.length; x++) {
                const row = y + 1
                const isFirst = x === 0
                arr.push({ squareId: `${xLine[x]}${yLine[y]}`, row: row, isFirst: isFirst })
            }
        }
        console.log("arr",arr);
        return (
            <>
                {arr.map((i, idx) => {
                    let color;
                    if (i.row % 2 === 0) {
                        color = (idx + 1) % 2 !== 0
                    } else {
                        color = (idx + 1) % 2 === 0
                    }
                    return <ChessSquare squareId={i.squareId} odd={color} isFirst={i.isFirst}/>
                })}
            </>
        )
    }
    return (
        <div className='chess-board'>
            {
                renderSquare()
            }
        </div>
    )
}

export default Chessboard