import { PersonInitialState } from "@/types/reducx-types"
import { createSlice } from "@reduxjs/toolkit"

const initialState: PersonInitialState = {
    persionData : null,
}
const personData = createSlice({
    name : "person",
    initialState,
    reducers:{ 
        setPersonData : (state , {payload}) => {
            state.persionData = payload;
        }
    }
})
export default personData.reducer