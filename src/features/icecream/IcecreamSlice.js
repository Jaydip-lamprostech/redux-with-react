import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/CakeSlice";

const initialState = {
  numOfIcecreams: 20,
};

const IcecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => state.numOfIcecreams--,
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default IcecreamSlice.reducer;
export const { ordered, restocked } = IcecreamSlice.actions;
