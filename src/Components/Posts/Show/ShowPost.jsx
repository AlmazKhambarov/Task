/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetById, GetUserById } from "../../redux/extraReducer";

const ShowPost = () => {
    const {postData, userData} = useSelector(state=>state.posts)
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetById(params?.id));
    if(postData?.userId){
        dispatch(GetUserById(postData?.userId))
    }
  }, []);
  console.log(userData)
  return (
  <div>
    {postData?.title}
  </div>
  )
};

export default ShowPost;
