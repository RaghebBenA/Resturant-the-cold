import { createStore } from 'redux';
import { Reducer, initialState } from "./reducer";


export const ConfiguerStore = () => {
    const store = createStore(
        Reducer,
        initialState
    )
    return store
}