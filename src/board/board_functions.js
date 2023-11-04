import React from "react";
import {TopLeft, BottomLeft, BottomRight, TopRight, Left, Right, Top, Bottom, Middle} from "./edges";
import {TopLeftWhite, BottomLeftWhite, BottomRightWhite, TopRightWhite, LeftWhite, RightWhite, TopWhite, BottomWhite, MiddleWhite} from "./white";
import {TopLeftBlack, BottomLeftBlack, BottomRightBlack, TopRightBlack, LeftBlack, RightBlack, TopBlack, BottomBlack, MiddleBlack} from "./black";

export const emptyBoard = [
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
    "E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E",
];

export function push_empty(board, row, col, boardSize) {
    if (row === 0 && col === 0) {
        board.push(<div className="tile"><TopLeft/></div>)
    }
    else if (row === 0 && col === boardSize-1) {
        board.push(<div className="tile"><TopRight/></div>)
    }
    else if (row === boardSize-1 && col === 0) {
        board.push(<div className="tile"><BottomLeft/></div>)
    }
    else if (row === boardSize-1 && col === boardSize-1) {
        board.push(<div className="tile"><BottomRight/></div>)
    }
    else if (row === 0) {
        board.push(<div className="tile"><Top/></div>)
    }
    else if (col === 0) {
        board.push(<div className="tile"><Left/></div>)
    }
    else if (row === boardSize-1) {
        board.push(<div className="tile"><Bottom/></div>)
    }
    else if (col === boardSize-1) {
        board.push(<div className="tile"><Right/></div>)
    }
    else {
        board.push(<div className="tile"><Middle/></div>)
    }
}

export function push_white(board, row, col, boardSize) {
    if (row === 0 && col === 0) {
        board.push(<div className="tile"><TopLeftWhite/></div>)
    }
    else if (row === 0 && col === boardSize-1) {
        board.push(<div className="tile"><TopRightWhite/></div>)
    }
    else if (row === boardSize-1 && col === 0) {
        board.push(<div className="tile"><BottomLeftWhite/></div>)
    }
    else if (row === boardSize-1 && col === boardSize-1) {
        board.push(<div className="tile"><BottomRightWhite/></div>)
    }
    else if (row === 0) {
        board.push(<div className="tile"><TopWhite/></div>)
    }
    else if (col === 0) {
        board.push(<div className="tile"><LeftWhite/></div>)
    }
    else if (row === boardSize-1) {
        board.push(<div className="tile"><BottomWhite/></div>)
    }
    else if (col === boardSize-1) {
        board.push(<div className="tile"><RightWhite/></div>)
    }
    else {
        board.push(<div className="tile"><MiddleWhite/></div>)
    }
}

export function push_black(board, row, col, boardSize) {
    if (row === 0 && col === 0) {
        board.push(<div className="tile"><TopLeftBlack/></div>)
    }
    else if (row === 0 && col === boardSize-1) {
        board.push(<div className="tile"><TopRightBlack/></div>)
    }
    else if (row === boardSize-1 && col === 0) {
        board.push(<div className="tile"><BottomLeftBlack/></div>)
    }
    else if (row === boardSize-1 && col === boardSize-1) {
        board.push(<div className="tile"><BottomRightBlack/></div>)
    }
    else if (row === 0) {
        board.push(<div className="tile"><TopBlack/></div>)
    }
    else if (col === 0) {
        board.push(<div className="tile"><LeftBlack/></div>)
    }
    else if (row === boardSize-1) {
        board.push(<div className="tile"><BottomBlack/></div>)
    }
    else if (col === boardSize-1) {
        board.push(<div className="tile"><RightBlack/></div>)
    }
    else {
        board.push(<div className="tile"><MiddleBlack/></div>)
    }
}