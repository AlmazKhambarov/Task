/** @format */

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./EditPost.scss";
import { useDispatch } from "react-redux";
import { Update } from "../../redux/postsSlice/postsSlice";
const EditPost = ({ setEditModall, datas }) => {
  const [data, setData] = useState({
    id: datas?.id,
    title: datas?.title,
    body: datas?.body,
  });
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(Update(data));
    setEditModall(0);
  };
  return (
    <>
      <div className='EditPost'>
        <div className='modal'>
          <div>
            <div className='close' onClick={() => setEditModall(null)}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          <form onSubmit={handleUpdate}>
            <h1>Create new post</h1>
            <label>Enter title</label>
            <input
              value={data.title}
              type='text'
              placeholder='title'
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <label>Enter Description</label>
            <textarea
              value={data.body}
              type='text'
              placeholder='description'
              onChange={(e) =>
                setData((prev) => ({ ...prev, body: e.target.value }))
              }
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <div className='w-screen'></div>
    </>
  );
};

export default EditPost;
