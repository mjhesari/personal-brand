import { configureStore } from "@reduxjs/toolkit";
import person from "../features/person-data/person-slice"


export const store = configureStore({
    reducer : {
        person:person
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;