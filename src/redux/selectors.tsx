import { RootState } from './store';

export const selectGameResult = (state: RootState) => state.game.gameResult;
export const selectChoices = (state: RootState) => state.game.choices;
export const selectSessionResults = (state: RootState) => state.game.sessionResults;
export const selectGameOver = (state: RootState) => state.game.startGame !== true;
export const selectStartGame = (state: RootState) => state.game.startGame;
export const selectShowResults = (state: RootState) => state.game.showResults;
export const selectSessionResultsLength = (state: RootState) => state.game.sessionResults.length;