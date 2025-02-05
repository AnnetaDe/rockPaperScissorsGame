import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


export interface IChoices {
    [key: string]: "rock" | "paper" | "scissors";
}

export interface IPlayer {
    choice?: string;
    score?: number;
}

export interface IGameResult {
    id: string;
    user: IPlayer;
    computer: IPlayer;
    result?: string;
    reason?: string;
}


export interface IGameState {
    startGame: boolean;
    choices: IChoices;
    userChoice: string;
    computerChoice: string;
    gameResult: IGameResult | null;
    sessionResults: IGameResult[];
    showResults: boolean;
}

const initialState: IGameState = {
    startGame: false,
    userChoice: "",
    computerChoice: "",
    choices: {
        "1": "rock",
        "2": "paper",
        "3": "scissors",
    },
    gameResult: { id: uuidv4(), user: { choice: '', score: 0 }, computer: { choice: '', score: 0 }, result: "" },
    sessionResults: [],
    showResults: false,
};


const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setStartGame: state => {
            state.startGame = true;

            state.
                gameResult = { id: uuidv4(), user: { choice: '', score: 0 }, computer: { choice: '', score: 0 }, result: "" };
        },



        playGame: (state, action: PayloadAction<number>) => {
            const computerChoice = Math.floor(Math.random() * 3 + 1).toString();
            const userChoice = action.payload.toString();

            const displayUserChoice = state.choices[userChoice];
            const displayComputerChoice = state.choices[computerChoice];
            const win: { [key: string]: { beats: string; reason: string } } = {
                "1": { beats: "3", reason: "Rock crushes Scissors" },
                "2": { beats: "1", reason: "Paper covers Rock" },
                "3": { beats: "2", reason: "Scissors cuts Paper" }
            };

            const getGameResult = (userChoice: string, computerChoice: string): IGameResult => {
                if (userChoice === computerChoice) {
                    return { id: uuidv4(), user: { choice: displayUserChoice, score: 0 }, computer: { choice: displayComputerChoice, score: 0 }, result: "Draw", reason: "It's a tie!" };
                }

                if (win[userChoice].beats === computerChoice) {
                    return {
                        id: uuidv4(),
                        user: { choice: displayUserChoice, score: 1 },
                        computer: { choice: displayComputerChoice, score: 0 },
                        result: "You won!",
                        reason: win[userChoice].reason
                    };
                }

                return {
                    id: uuidv4(),
                    user: { choice: displayUserChoice, score: 0 },
                    computer: { choice: displayComputerChoice, score: 1 },
                    result: "You lost!",
                    reason: win[computerChoice].reason
                };
            };

            const gameResult = getGameResult(userChoice, computerChoice);
            state.gameResult = gameResult;
            state.sessionResults.unshift(gameResult);
            state.showResults = true;
        },

        hideResults: state => {
            state.showResults = false;
            state.gameResult = { id: '', user: { choice: '', score: 0 }, computer: { choice: '', score: 0 }, result: "" };

        },
        showResultsModal: (state, action: PayloadAction<boolean>) => {
            state.showResults = action.payload;
        },

        resetGame: state => {
            state.gameResult = { id: '', user: { choice: '', score: 0 }, computer: { choice: '', score: 0 }, result: "" };
            state.sessionResults = [];
            state.showResults = false;

        },
        setGameOver: state => {
            state.startGame = false;
            state.showResults = false;
            state.gameResult = { id: '', user: { choice: '', score: 0 }, computer: { choice: '', score: 0 }, result: "" };
            state.sessionResults = [];


        },
    }

});

export const { setGameOver, playGame, setStartGame, resetGame, hideResults, showResultsModal } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;