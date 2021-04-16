import React from 'react';
import PostContainer from '../components/PostContainer';
import Sidebar from '../components/SideBar';

export default function Blog() {
  return(
    <React.Fragment>
      <Sidebar />
      <PostContainer />
    </React.Fragment>
  );
}