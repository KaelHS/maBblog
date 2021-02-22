import React from 'react';
import PostContainer from '../components/PostContainer/PostContainer.js';
import Sidebar from '../components/SideBar/SideBar.js';

export default function Home() {
  return(
    <React.Fragment>
      <Sidebar />
      <PostContainer />
    </React.Fragment>
  );
}