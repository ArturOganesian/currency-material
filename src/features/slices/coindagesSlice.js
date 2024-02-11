import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  coindages: [],
  isLoding: false,
  error: null,
};

export const getCoindages = createAsyncThunk(
  "coindages/getCoindages",
  async ({currency,toFirst,toSecond,toThird}, { rejectWithValue }) => {
    try {
      const response = await axios(
        `https://api.fastforex.io/fetch-multi?from=${currency}&to=${toFirst},${toSecond},${toThird}&api_key=6c70830d4f-9e869fe9e8-s8ld1o`
      );

      return [response.data]                                              
    } catch (err){ 
      console.log(" Coindages's request is failed");
      return rejectWithValue(err.message);
    }
  }
);

export const coindagesSlice = createSlice({
  name: "coindages",
  initialState,
  setCoindages: (state, action) => {
    state.coindages = action.payload;
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoindages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoindages.fulfilled, (state, action) => {
        state.coindages = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCoindages.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setCoindages } = coindagesSlice.actions;
export default coindagesSlice.reducer;
