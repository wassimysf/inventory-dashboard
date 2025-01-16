import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
}

export const globaleSlice = createSlice ({
    name: 'global',
    initialState,
    reducers:{
        SetIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        SetIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
})

export const  {SetIsSidebarCollapsed, SetIsDarkMode} = globaleSlice.actions;

export default globaleSlice.reducer;