import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'



const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}


export const getStaticProps = async ( context ) => {

  const response = await axios.get(`http://localhost:3000/api/posts/${context.params.title}`);

  const post = response.data;

  return {
    props: post,
  }
}

export async function getStaticPaths () {
  return {
    paths: [
      { params: { id: post.slug } }
    ],
    fallback: false,
  }
}

export default Post;