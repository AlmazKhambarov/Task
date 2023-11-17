/** @format */

import React, { useState } from "react";
import "./Navbar.scss"
import CreatePost from "../Posts/Create/CreatePost";
import { searchvalue } from "../redux/postsSlice/postsSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
    const [createModal,setCreateModal] = useState(false)
    const dispatch = useDispatch()
  return (
    <div className='navbar'>
      <header>
        <nav>
         <div class='burger'>
        <h1>CRUD</h1>
          </div>
          <ul class='nav-links'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
          <div class='burger'>
            <input type="search" placeholder="Search..." onChange={(e)=>dispatch(searchvalue(e.target.value))}/>
            <button onClick={()=>setCreateModal(!createModal)}>Create</button>
          </div>
        </nav>
      </header>
          {createModal?<CreatePost setCreateModal={setCreateModal}/>:null}
    </div>
  );
};

export default Navbar;
