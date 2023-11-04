import React from "react";
import GoBoard from "../board/go_board";
import { Text, Pressable } from "react-native";
import { styles } from "./styles.js";
import "./styles.css"

export default function LiveGameplay() {
    let state = [];
    let state_history = [];
    
    for (let i = 0; i < 361; i++) {
        state.push("E")
    }

    state[10] = "W";
    state[200] = "W";
    state[69] = "W";
    state[111] = "W";
    state[112] = "W";

    state[16] = "B";
    state[9] = "B";
    state[169] = "B";

    for (let i = 0; i < 361; i++) {
        state_history.push(["E", -1])
    }

    state_history[10] = ["W", 1];
    state_history[200] = ["W", 3];
    state_history[69] = ["W", 5];
    state_history[111] = ["W", 7];

    state_history[16] = ["B", 2];
    state_history[9] = ["B", 4];
    state_history[169] = ["B", 6];

    function downloadGame() {
        const blob = new Blob([state_history.toString()])
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
            />
            <Text style={styles.game_text}>White's Turn</Text>
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