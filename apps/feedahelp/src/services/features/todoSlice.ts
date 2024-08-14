import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = { title?: string; description?: string };

const initialState: InitialState = {
  title: undefined,
  description: undefined,
};

const todoSlice = createSlice({
  name: "todoslice",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { setTitle, setDescription } = todoSlice.actions;
export default todoSlice.reducer;

export const selectCurrentTitle = (state: RootState) => state.todoSlice.title;
export const selectCurrentDescription = (state: RootState) =>
  state.todoSlice.description;
