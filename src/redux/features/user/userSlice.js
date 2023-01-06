import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../../constants/constants";

const initialState = {
  status: "idle",
  data: "",
  error: "",
};

const user = (state) => state.user.data;

const getUserDetails = createAsyncThunk("user/getUserDetails", async () => {
  try {
    const response = await axios.request({
      method: "GET",
      baseURL: SERVER_URL,
      url: "/user/details",
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// eslint-disable-next-line
export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
export { getUserDetails, userSlice, user };
