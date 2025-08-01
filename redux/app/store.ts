import { configureStore } from "@reduxjs/toolkit";
import person from "../features/person/person-slice"


export const store = configureStore({
    reducer : {
        person
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;