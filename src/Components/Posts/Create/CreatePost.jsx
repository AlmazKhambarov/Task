/** @format */

import React, { useState } from "react";
import "./CreatePost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { AddPost } from "../../redux/postsSlice/postsSlice";
import { uid } from "uid";

// import { AddPost } from "../../redux/extraReducer";
const CreatePost = ({setCreateModal}) => {
const [data, setData] = useState({
    id:100+1,
    title:"",
    body:""
})
var dispatch = useDispatch()
const handleCreate = (e)=>{
    e.preventDefault();
    dispatch(AddPost(data))
    setCreateModal(false)
}
console.log(uid)
  return (
    <>
      <div className='CreatePost'>
        <div className='modal'>
          <div>
            <div className='close' onClick={()=>setCreateModal(false)}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
          </div>
          <form onSubmit={handleCreate}>
            <h1>Create new post</h1>
            <label>Enter title</label>
            <input
            required
              type='text'
              placeholder='title'
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <label>Enter Description</label>
            <textarea
            required
              type='text'
              placeholder='description'
              onChange={(e) =>
                setData((prev) => ({ ...prev, body: e.target.value }))
              }
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className='w-screen'></div>
    </>
  );
};

export default CreatePost;
