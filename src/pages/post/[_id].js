import React from 'react';
import { useRouter } from 'next/router';

export const getServerSideProps = async (context) => {

    const db = await connect();

    const allPostsDB = await db.collection('posts').find().toArray();

    const posts = JSON.parse(JSON.stringify(allPostsDB))

    return {
        props: {
            posts,
        }
    }
}

const getStaticPaths = async () => {

    const db = await connect();

    const allPostsDB = await db.collection('posts').find().toArray();

    const paths = allPostsDB.map(post => {
        return {
            params: { id: post._id }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.id;

    const db = await connect();

    const Post = await db.collection('posts').findOne({_id: id});

    const posts = JSON.parse(JSON.stringify(allPostsDB))

    return {
        props: {
            posts,
        }
    }
}

const Post = () => {
    return (
        <div>
            teste
        </div>
    );
}

export default Post;