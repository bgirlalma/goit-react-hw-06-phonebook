import { createSlice } from '@reduxjs/toolkit'

const FilterInitionState = {
    filter: "",
};

export const filterSlice = createSlice({
name: "filters",
initialState: FilterInitionState,
reducers: {
setFilter: (state, action) => {
    state = action.payload
}
}
})

export const { setFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;