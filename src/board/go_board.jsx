import React from "react";
import "./go_board.css";
import { push_empty, push_white, push_black} from "./board_functions";

export default function GoBoard(props) {
    let board = [];

    for (let row = 0; row < 19; row++) {
        for (let col = 0; col < 19; col++) {
            let idx = 19 * row + col;
            if (props.state[idx] === "W") {
                push_white(board, row, col, 19);
            }
            if (props.state[idx] === "B") {
                push_black(board, row, col, 19);
            }
            if (props.state[idx] === "E") {
                push_empty(board, row, col, 19);
            }
        }
    }

    return (
        <div className="go_board">
            {board}
        </div>
    );
}