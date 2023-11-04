import React from "react";
import GoBoard from "../board/go_board";
import { Text, Pressable } from "react-native";
import { styles } from "./styles.js";
import { emptyState, emptyStateHistory } from "../board/board_constants";
import "./styles.css"

export default function LiveGameplay() {
    const [state, setState] = React.useState(emptyState);
    const [stateHistory, setStateHistory] = React.useState(emptyStateHistory)
    const [moveNum, setMoveNum] = React.useState(1);
    const [moveInfo, setMoveInfo] = React.useState("White's turn");

    // Sets tile on board (will disable later).
    function handleBoardClick(index) {
        let stateTmp = [...state];
        let stateHistoryTmp = [...stateHistory];
       
        const tileColor = moveNum % 2 === 1 ? "W" : "B";
        stateTmp[index] = tileColor;
        stateHistoryTmp[index*2] = tileColor;
        stateHistoryTmp[index*2+1] = moveNum;

        setState(stateTmp);
        setStateHistory(stateHistoryTmp);
        setMoveNum(moveNum + 1);
        setMoveInfo(moveInfo === "White's turn" ? "Black's turn" : "White's turn");
    }

    // Download game to file system.
    function downloadGame() {
        const blob = new Blob([stateHistory.toString()])
        const a = document.createElement("a");
        a.download = 'game.txt';
        a.href = URL.createObjectURL(blob);
        a.addEventListener('click', (e) => {
            setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
        });
        a.click();
    }

    return (
        <div className="go_div">
            <GoBoard
                state={state}
                handleBoardClick={handleBoardClick}
            />
            <Text style={styles.game_text}>{moveInfo}</Text>
            <div className="go_button">
                <Pressable style={styles.button}
                    onPress={downloadGame} 
                >
                    <Text style={styles.text}>Download Game</Text>
                </Pressable>
            </div>
        </div>
    );
}