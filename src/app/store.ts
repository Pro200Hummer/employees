import {Action, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {personsApi} from '../api/persons-api'
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    [personsApi.reducerPath]: personsApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(personsApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<RootStateType, void, Action>
