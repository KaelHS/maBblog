import React from 'react';
import PostCard from '../PostCard/Postcard';

export default class PostContainer extends React.Component {
    render(){
        return(
            <div className="post-container">
                <div className="cards-container">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        );
    }
}