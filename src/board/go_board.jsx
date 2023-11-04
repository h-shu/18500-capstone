import React from "react";
import "./go_board.css";
import { push_empty, push_white, push_black} from "./board_functions";
import { boardLength } from "./board_constants";

export default function GoBoard(props) {
    let board = [];

    for (let row = 0; row < boardLength; row++) {
        for (let col = 0; col < boardLength; col++) {
            let idx = boardLength * row + col;
            if (props.state[idx] === "W") {
                push_white(board, row, col, boardLength, idx);
            }
            if (props.state[idx] === "B") {
                push_black(board, row, col, boardLength, idx);
            }
            if (props.state[idx] === "E") {
                push_empty(board, row, col, boardLength, idx, props.handleBoardClick);
            }
        }
    }

    return (
        <div className="go_board">
            {board}
        </div>
    );
}