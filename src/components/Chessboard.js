import React, { useEffect } from 'react'
import "./Chessboard.css"
import Tiles from './Tiles'

const vertical = [1,2,3,4,5,6,7,8]
const horizontal = ["a","b","c","d","e","f","g","h"] 

// Function to hard code intial chess piece locations
function Startgame(board, pieces) {
    for (let i = 0 ; i < 8 ;i++){
        pieces.push({image: "./images/pawn_w.png", x: i, y: 1 })
    }
    for (let j = 0 ; j < 8 ; j++){
        pieces.push({image: "./images/pawn_b.png", x: j, y: 6 })
    }

    pieces.push({image: "./images/knight_w.png", x: 1, y: 0 })
    pieces.push({image: "./images/knight_w.png", x: 6, y: 0 })
    pieces.push({image: "./images/bishop_w.png", x: 2, y: 0 })
    pieces.push({image: "./images/bishop_w.png", x: 5, y: 0 })
    pieces.push({image: "./images/rook_w.png", x: 0, y: 0 })
    pieces.push({image: "./images/rook_w.png", x: 7, y: 0 })
    pieces.push({image: "./images/queen_w.png", x: 3, y: 0 })
    pieces.push({image: "./images/king_w.png", x: 4, y: 0 })

    pieces.push({image: "./images/knight_b.png", x: 1, y: 7 })
    pieces.push({image: "./images/knight_b.png", x: 6, y: 7 })
    pieces.push({image: "./images/bishop_b.png", x: 2, y: 7 })
    pieces.push({image: "./images/bishop_b.png", x: 5, y: 7 })
    pieces.push({image: "./images/rook_b.png", x: 0, y: 7 })
    pieces.push({image: "./images/rook_b.png", x: 7, y: 7 })
    pieces.push({image: "./images/queen_b.png", x: 3, y: 7 })
    pieces.push({image: "./images/king_b.png", x: 4, y: 7 })
}

function Chessboard() {

    // Array for current chess piece on the board
    const pieces = []
    // Array for the board boxes always to be 64
    const board = []

    Startgame(board, pieces)

    for (let i = 0; i < horizontal.length; i++ ){
        for (let j = 0; j < vertical.length; j++){
            let image = null
            pieces.forEach(p => {
                if (j === p.x && i===p.y){
                    image = p.image
                }
            })
            let addition = i + j + 2


            board.push(<Tiles key = {`${i},${j}`} image = {image} addition = {addition} />)
        }
    }

    return (
        <div className = "chessboard">
            {board}
        </div>
    )
}

export default Chessboard
