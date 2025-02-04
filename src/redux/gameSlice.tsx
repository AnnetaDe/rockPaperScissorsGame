import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IChoices {
    [key: string]: "rock" | "paper" | "scissors";
}

export interface IPlayer {
    choice?: string;
    score?: number;
}

export interface IGameResult {
    user: IPlayer;
    computer: IPlayer;
    result?: string;
}


export interface IGameState {
    choices: IChoices;

    gameResult: IGameResult | null;
    sessionResults: IGameResult[];
    gameOver: boolean;
}

const initialState: IGameState = {
    choices: {
        "1": "rock",
        "2": "paper",
        "3": "scissors",
    },

    gameResult: { user: { choice: '', score: 0 }, computer: { choice: '', score: 0 }, result: "" },
    sessionResults: [],
    gameOver: false,
};


const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        playGame: (state, action: PayloadAction<number>) => {
            const computerChoice = Math.floor(Math.random() * 3);
            const userChoice = action.payload;
            const displayUserChoice = state.choices[userChoice.toString()];
            const displayComputerChoice = state.choices[computerChoice.toString()];
            const evaluateWinner = (userChoice: number, computerChoice: number) => {
                const gameResult: IGameResult = { user: { choice: displayUserChoice, score: 0 }, computer: { choice: displayComputerChoice, score: 0 }, result: "" };
                if (userChoice === computerChoice) {
                    gameResult.user.choice = displayUserChoice;
                    gameResult.computer.choice = displayComputerChoice;
                    gameResult.result = "draw";
                } else if (userChoice === 1 && computerChoice === 3) {
                    gameResult.user.choice = displayUserChoice;
                    gameResult.computer.choice = displayComputerChoice;
                    gameResult.result = "win";
                    gameResult.user.score = 1;
                } else if (userChoice === 2 && computerChoice === 1) {
                    gameResult.user.choice = displayUserChoice;
                    gameResult.computer.choice = displayComputerChoice;
                    gameResult.result = "win";
                    gameResult.user.score = 1;
                } else if (userChoice === 3 && computerChoice === 2) {
                    gameResult.user.choice = displayUserChoice;
                    gameResult.computer.choice = displayComputerChoice;
                    gameResult.result = "win";
                    gameResult.user.score = 1;
                } else {
                    gameResult.user.choice = displayUserChoice;
                    gameResult.computer.choice = displayComputerChoice;
                    gameResult.result = "lose";
                    gameResult.computer.score = 1;
                }
                return gameResult;

            }
            state.gameResult = evaluateWinner(userChoice, computerChoice);
            state.sessionResults.push(state.gameResult);


        },

        setGameOver: state => {
            state.gameOver = true;
        },



    }
});

export const { setGameOver, playGame } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;