'use client';

import { PersonInitialState } from "@/types/reducx-types"
import { createSlice } from "@reduxjs/toolkit"


//* Initial state

const initialState: PersonInitialState = {
    personData :{
        siteConfig: null,
        siteData:  null,
      },
}
const personDataSilce = createSlice({
    name : "person",
    initialState,
    reducers: {
        setSiteData : (state , { payload }) => {
          state.personData.siteData = payload
        },
        setSiteConfig : (state , { payload }) => {
          state.personData.siteConfig = payload
        }
      }
})
export default personDataSilce.reducer
export const { setSiteData, setSiteConfig } = personDataSilce.actions;


// Public imports

// Import types


//* Slice
