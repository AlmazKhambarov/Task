/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { CreatePost, GetAllPosts, GetById } from "../extraReducer";

const initialState = {
  loading: null,
  error: null,
  createFolderLoading: false,
  PostsData: [],
  filesData: [],
  searchValue:""
};

const postsSlice = createSlice({
  name: "posst",
  initialState,
  reducers: {
    AddPost:(state, action)=>{
        state.PostsData.push(action.payload)
        state.loading = false
    },
    Update:(state, action)=>{
        console.log(action.payload)
        const existingData = state.PostsData.find(el => el.id == action.payload.id)
        console.log(existingData)
        existingData.body = action.payload.body;
        existingData.title = action.payload.title
    },
    deletePostReducer: (state, action) => {
        // state.photosData = state.photosData.filter(el => el.id != action.payload)
    },
    searchvalue:(state, action)=>{
        state.searchValue = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetById.fulfilled, (state, action) => {
        state.loading = false;
        state.PostsData = action.payload;
      })
      .addCase(GetById.rejected, (state, action) => {
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
export const {AddPost, Update, searchvalue} = postsSlice.actions;
export default postsSlice.reducer;
