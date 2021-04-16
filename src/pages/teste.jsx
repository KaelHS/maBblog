import React from 'react';
import connect from '../config/database';

export const getStaticProps = async (context) => {

    const  db  = await connect();

    const allPostsDB = await db.collection('posts').find().toArray();

    const posts = JSON.parse(JSON.stringify(allPostsDB))

    return {
        props: {
            posts,
        }
    }
}


const Teste = ( { posts } ) => {
        return(
            <>
            {posts.map ( (post) => (
                <div key={post._id}>
                    <h1> { post.title } </h1>
                    <h4> { post.author } </h4>
                    <p> { post.content } </p>
                </div>

            ))} 

            </>
        );
}

export default Teste;