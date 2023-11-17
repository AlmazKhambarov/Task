/** @format */

import React, { useEffect, useState } from "react";
import "./Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Navbar/Navbar";
import {
  faEye,
  faPenToSquare,
  faShower,
  faSquare,
  faTractor,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPosts } from "../../redux/extraReducer";
import EditPost from "../Edit/EditPost";
import { searchvalue } from "../../redux/postsSlice/postsSlice";
const Main = () => {
  const { PostsData, searchValue } = useSelector((state) => state.posts);
  const [editModal, setEditModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllPosts());
  }, []);
  const filteredResults = PostsData.filter((item) =>
  item.title.toLowerCase().includes(searchValue.toLowerCase()) ||   item.body.toLowerCase().includes(searchValue.toLowerCase())
);
  console.log(filteredResults);
  return (
    <>
      <Navbar />
      <div class='card-container'>
        {filteredResults?.map((el) => (
          <>
            <div class='card' key={el.id}>
              <h2 class='card-title'>{el?.title}</h2>
              <p class='card-description'>{el.body}</p>
              <div>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={() => setEditModal(!editModal)}
                />
                <FontAwesomeIcon icon={faTrash} />
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
            {editModal == el.id ? (
              <EditPost setEditModal={el.id} setEditModall={setEditModal} datas={el} />
            ) : null}
          </>
        ))}
      </div>
    </>
  );
};

export default Main;
