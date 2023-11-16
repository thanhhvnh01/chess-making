import React from 'react'
import './ChessSquare.scss'

const ChessSquare = ({ squareId, takenBy, odd, isFirst }) => {
    return (
        <div className={`square ${odd ? 'black' : 'white'} ${isFirst && 'first-item'}`}>
            {
                takenBy && <div>

                </div>
            }
            <div style={{ color:"red" }}>
                {squareId}
            </div>
        </div>
    )
}

export default ChessSquare