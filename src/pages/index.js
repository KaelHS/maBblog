import React from 'react';
import PostContainer from '../components/PostContainer/PostContainer';
import Sidebar from '../components/SideBar/SideBar';

export default function Home() {
  return(
    <React.Fragment>
      <Sidebar />
      <PostContainer />
    </React.Fragment>
  );
}