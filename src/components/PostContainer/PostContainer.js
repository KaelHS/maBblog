import React from 'react';
import PostCard from '../PostCard/Postcard';
import style from './PostContainer.module.css';

export default class PostContainer extends React.Component {
    render(){
        return(
            <React.Fragment className={style}>
                <div className="post-container">
                    <div className="cards-container">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}