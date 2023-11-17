/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { CreatePost, GetAllPosts, GetById, GetUserById } from "../extraReducer";

const initialState = {
  loading: null,
  error: null,
  postData: null,
  PostsData: [],
  searchValue: "",
  userData: null,
};

const postsSlice = createSlice({
  name: "posst",
  initialState,
  reducers: {
    AddPost: (state, action) => {
      state.PostsData.push(action.payload);
      state.loading = false;
    },
    Update: (state, action) => {
      console.log(action.payload);
      const existingData = state.PostsData.find(
        (el) => el.id == action.payload.id
      );
      console.log(existingData);
      existingData.body = action.payload.body;
      existingData.title = action.payload.title;
    },
    DeletePost: (state, action) => {
      state.PostsData = state.PostsData.filter((el) => el.id != action.payload);
    },
    searchvalue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetById.fulfilled, (state, action) => {
        state.loading = false;
        state.postData = action.payload;
      })
      .addCase(GetById.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(GetUserById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(GetUserById.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(GetAllPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.PostsData = action.payload;
      })
      .addCase(GetAllPosts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { AddPost, Update, searchvalue, DeletePost } = postsSlice.actions;
export default postsSlice.reducer;
