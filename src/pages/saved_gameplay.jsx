import React from "react";
import GoBoard from "../board/go_board";
import { Text, Pressable } from "react-native";
import { styles } from "./styles.js";
import { emptyBoard } from "../board/board_functions";
import Select from 'react-select';

export default function GameHistory() {
    const [displaySaved, setDisplaySaved] = React.useState(emptyBoard);
    const options = [
        { value: '0', label: '0'},
    ];
    const [selectedOption, setSelectedOption] = React.useState(null);

    function convertSavedToBoardState(saved, move_number) {
        let board = [];
        
        for (let i = 0; i < 361*2; i+=2) {
            console.log(parseInt(saved[i+1]))
            if (parseInt(saved[i+1]) < move_number) {
                board.push(saved[i]);
            } else {
                board.push("E")
            }
        }

        setDisplaySaved(board);
    }

    function uploadFile(event) {
        let file = event.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.onload = async (e) => { 
            const text = (e.target.result);
            console.log(text.split(","));
            convertSavedToBoardState(text.split(","), 4)
        };
        reader.readAsText(file);
    } 

    return (
        <div className="go_div">
            <input type="file" id="up" style={{display: 'none'}} onChange={uploadFile}/>
            <GoBoard
                state={displaySaved}
            />
            <Text style={styles.game_text}>No moves displayed</Text>
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
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder={"Select move number"}
                    menuPosition={"fixed"}
                />
            </div>
        </div>
    );
}