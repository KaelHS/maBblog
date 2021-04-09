<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

const router = useRouter()
const { pid } = router.query

const Post = () => {

=======
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
>>>>>>> cad6fb189bc930a69411f2e6fe1634e3c4518ad0

  return <p>Post: {pid}</p>
}

<<<<<<< HEAD
export default Post;

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
=======
export default Post
>>>>>>> cad6fb189bc930a69411f2e6fe1634e3c4518ad0
