import React from "react";
import GoBoard from "../board/go_board";
import { Text, Pressable } from "react-native";
import { styles } from "./styles.js";
import { emptyState, emptyStateHistory, boardSize, boardLength } from "../board/board_constants";
import Select from 'react-select';

export default function GameHistory() {
    const [state, setState] = React.useState(emptyState);
    const [stateHistory, setStateHistory] = React.useState(emptyStateHistory);

    const [moveOptions, setMoveOptions] = React.useState([]);
    const [selectedMove, setSelectedMove] = React.useState(null);
    const [moveInfo, setMoveInfo] = React.useState("No moves displayed");

    // Does nothing.
    function handleBoardClick(index) {
        return;
    }

    // Update state if selectedOption changes.
    React.useEffect(() => {
        // Placeholder selected.
        if (selectedMove == null) {
            return;
        }

        let stateTmp = [];
        
        for (let i = 0; i < boardSize*2; i+=2) {
            const move = parseInt(stateHistory[i+1]);
            if (move <= selectedMove.value) {
                stateTmp.push(stateHistory[i]);

                // Use selectedMove to display move information.
                if (move === selectedMove.value) {
                    const row = Math.floor(Math.floor(i / 2) / boardLength);
                    const col = Math.floor(Math.floor(i / 2) % boardLength);
                    setMoveInfo(`${move % 2 === 1 ? "White's" : "Black's"} move: { Row: ${row}, Col: ${col} }`);
                }
            } else {
                stateTmp.push("E")
            }
        }

        setState(stateTmp);
    }, [selectedMove, stateHistory]);

    // Upload file from filesystem and store into stateHistory.
    function uploadFile(event) {
        let file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = async (e) => { 
            const text = (e.target.result);
            const fileInput = text.split(",")
            let stateHistoryTmp = []
            let maxMove = 0;
            for (let i = 0; i < boardSize*2; i += 2) {
                maxMove = Math.max(maxMove, parseInt(fileInput[i+1]));
                stateHistoryTmp.push(fileInput[i], parseInt(fileInput[i+1]));
            }

            // Update stateHistory and moveOptions.
            setStateHistory(stateHistoryTmp);
            let moveOptionsTmp = [];
            for (let i = 1; i <= maxMove; i++) {
                moveOptionsTmp.push({ value: i, label: i});
            }
            setMoveOptions(moveOptionsTmp);
        };
        reader.readAsText(file);
    } 

    return (
        <div className="go_div">
            <input type="file" id="up" style={{display: 'none'}} onChange={uploadFile}/>
            <GoBoard
                state={state}
                handleBoardClick={handleBoardClick}
            />
            <Text style={styles.game_text}>{moveInfo}</Text>
            <div className={"horizontal"}>
                <label htmlFor={"up"}>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>
                            Upload Game
                        </Text>
                    </Pressable>
                </label>
                <Select
                    styles={
                        {
                            control: provided => ({
                            ...provided,
                            color: "white",
                            background: "#26211b",
                            borderRadius: "3px 3px 0 0",
                            width: "210px",
                            borderColor: "#26211b",
                            boxShadow: null,
                            "&:hover": {
                                borderColor: "#26211b",
                            },
                            }),
                            menuList: base => ({
                                ...base,
                                padding: 0
                            }),
                            option: provided => ({
                                ...provided,
                                color: 'white',
                                background: "#26211b",
                            }),
                            noOptionsMessage: provided => ({
                                ...provided,
                                background: "#26211b",
                            }),
                            singleValue: provided => ({
                                ...provided,
                                color: 'white'
                            }),
                            placeholder: provided => ({
                                ...provided,
                                color: "white"
                            })
                        }
                    }
                    defaultValue={selectedMove}
                    onChange={setSelectedMove}
                    options={moveOptions}
                    placeholder={"Select move number"}
                    menuPosition={"fixed"}
                />
            </div>
        </div>
    );
}