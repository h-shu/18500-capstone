import React from "react";
import {TopLeft, BottomLeft, BottomRight, TopRight, Left, Right, Top, Bottom, Middle} from "./edges";
import {TopLeftWhite, BottomLeftWhite, BottomRightWhite, TopRightWhite, LeftWhite, RightWhite, TopWhite, BottomWhite, MiddleWhite} from "./white";
import {TopLeftBlack, BottomLeftBlack, BottomRightBlack, TopRightBlack, LeftBlack, RightBlack, TopBlack, BottomBlack, MiddleBlack} from "./black";



export function push_empty(board, row, col, boardSize, index, handleBoardClick) {
    if (row === 0 && col === 0) {
        board.push(<div className="tile" key={index} onClick={() => handleBoardClick(index)}><TopLeft/></div>)
    }
    else if (row === 0 && col === boardSize-1) {
        board.push(<div className="tile" key={index} onClick={() => handleBoardClick(index)}><TopRight/></div>)
    }
    else if (row === boardSize-1 && col === 0) {
        board.push(<div className="tile" key={index} onClick={() => handleBoardClick(index)}><BottomLeft/></div>)
    }
    else if (row === boardSize-1 && col === boardSize-1) {
        board.push(<div className="tile" key={index} onClick={() => handleBoardClick(index)}><BottomRight/></div>)
    }
    else if (row === 0) {
        board.push(<div className="tile" key={index} onClick={() => handleBoardClick(index)}><Top/></div>)
    }
    else if (col === 0) {
        board.push(<div className="tile" key={index} onClick={() => handleBoardClick(index)}><Left/></div>)
    }
    else if (row === boardSize-1) {
        board.push(<div className="tile" key={index} onClick={() => handleBoardClick(index)}><Bottom/></div>)
    }
    else if (col === boardSize-1) {
        board.push(<div className="tile" key={index} onClick={() => handleBoardClick(index)}><Right/></div>)
    }
    else {
        board.push(<div className="tile" key={index} onClick={() => handleBoardClick(index)}><Middle/></div>)
    }
}

export function push_white(board, row, col, boardSize, index) {
    if (row === 0 && col === 0) {
        board.push(<div className="tile" key={index}><TopLeftWhite/></div>)
    }
    else if (row === 0 && col === boardSize-1) {
        board.push(<div className="tile" key={index}><TopRightWhite/></div>)
    }
    else if (row === boardSize-1 && col === 0) {
        board.push(<div className="tile" key={index}><BottomLeftWhite/></div>)
    }
    else if (row === boardSize-1 && col === boardSize-1) {
        board.push(<div className="tile" key={index}><BottomRightWhite/></div>)
    }
    else if (row === 0) {
        board.push(<div className="tile" key={index}><TopWhite/></div>)
    }
    else if (col === 0) {
        board.push(<div className="tile" key={index}><LeftWhite/></div>)
    }
    else if (row === boardSize-1) {
        board.push(<div className="tile" key={index}><BottomWhite/></div>)
    }
    else if (col === boardSize-1) {
        board.push(<div className="tile" key={index}><RightWhite/></div>)
    }
    else {
        board.push(<div className="tile" key={index}><MiddleWhite/></div>)
    }
}

export function push_black(board, row, col, boardSize, index) {
    if (row === 0 && col === 0) {
        board.push(<div className="tile" key={index}><TopLeftBlack/></div>)
    }
    else if (row === 0 && col === boardSize-1) {
        board.push(<div className="tile" key={index}><TopRightBlack/></div>)
    }
    else if (row === boardSize-1 && col === 0) {
        board.push(<div className="tile" key={index}><BottomLeftBlack/></div>)
    }
    else if (row === boardSize-1 && col === boardSize-1) {
        board.push(<div className="tile" key={index}><BottomRightBlack/></div>)
    }
    else if (row === 0) {
        board.push(<div className="tile" key={index}><TopBlack/></div>)
    }
    else if (col === 0) {
        board.push(<div className="tile" key={index}><LeftBlack/></div>)
    }
    else if (row === boardSize-1) {
        board.push(<div className="tile" key={index}><BottomBlack/></div>)
    }
    else if (col === boardSize-1) {
        board.push(<div className="tile" key={index}><RightBlack/></div>)
    }
    else {
        board.push(<div className="tile" key={index}><MiddleBlack/></div>)
    }
}