import { configureStore } from "@reduxjs/toolkit";

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, PersistConfig, persistStore } from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import { gameReducer } from "./gameSlice";


const gamePersistConfig: PersistConfig<ReturnType<typeof gameReducer>> = {
    key: 'gameResult',
    whitelist: ['gameResult'],
    storage,
};
const persistedGameReducer = persistReducer(gamePersistConfig, gameReducer);



const store = configureStore({
    reducer: {
        game: persistedGameReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }),


});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;