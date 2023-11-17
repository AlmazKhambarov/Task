import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST } from "./URLS";

export const AddPosts  = createAsyncThunk("create/post", async(payload)=>{
    return axios({
        method:"POST",
        data:payload,
        url:POST,
    }).then(res=>res.data)
})

export const GetById  = createAsyncThunk("post/get", async(payload)=>{
    return axios({
        method:"GET",
        data:payload,
        url:POST + "/" + payload,
    }).then(res=>res.data)
})
export const GetUserById  = createAsyncThunk("get/user", async(payload)=>{
    return axios({
        method:"GET",
        data:payload,
        url:POST + "/" + payload,
    }).then(res=>res.data)
})


export const GetAllPosts = createAsyncThunk("get/post", async(payload)=>{
    return axios({
        method:"GET",
        data:payload,
        url:GET,
    }).then(res=>res.data)
})

