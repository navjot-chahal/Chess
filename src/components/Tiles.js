import React from 'react'
import "./Tiles.css"

let activePiece = null

function handelmouseDown(e){
    let object = e.target
    if (object.classList.contains("chesspiece")){
        console.log(object)
        object.style.position = "relative"
        activePiece = object
    }
}

function handelmouseMove(e){
    if (activePiece){
        const x = e.clientX - 100
        const y = e.clientY - 100
        activePiece.style.position = `relative`
        activePiece.style.left = `${x}px`
        activePiece.style.top = `${y}px`
    }
}

function handelmouseUp(e){
    if(activePiece){
        activePiece = null 
    } 
}

function Tiles(props) {

    if (props.addition % 2 === 0 ){
        return (
            <div className = "tiles whiteTile">
                {props.image && <div onMouseUp={(e) => handelmouseUp(e)} onMouseMove={(e) => handelmouseMove(e)} onMouseDown={(e) => handelmouseDown(e)} style={{backgroundImage: `url(${props.image})`}} className="chesspiece"></div>}
            </div>
        ) 
    } else {
        return (
            <div className = "tiles blackTile">
                {props.image && <div onMouseUp={(e) => handelmouseUp(e)} onMouseMove={(e) => handelmouseMove(e)} onMouseDown={(e) => handelmouseDown(e)} style={{backgroundImage: `url(${props.image})`}} className="chesspiece"></div>}
            </div>
        )
    }
}

export default Tiles
