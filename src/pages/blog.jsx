// import React from 'react';
// import Sidebar from '../components/SideBar';
// import styled from 'styled-components';
// import Link from 'next/link';
// import axios from 'axios';


// const Container = styled.div`

//     float: right;
//     height: 100%;
//     right: 0;
//     position: fixed;
//     width: 80%;
//     background: #0e0b16;
//     border-left: 2px solid #fff;
//     overflow-y: scroll;

// `;

// const Postcard = styled.div`
//     border-bottom: 2px solid #fff;

//     &::before {
//         content: '';
//         display: table;
//         clear: both;
//     }
//     &::after {
//         content: '';
//         display: table;
//         clear: both;
//     }
//     &:hover {
//         cursor: pointer;
//         background: #363636;
//         transition: 0.2s;
//     }
// `;

// const ImgCard = styled.div `
//     width: 100px;
//     height: 100px;
//     background: #e54;
//     margin:40px;
//     border-radius: 50%;
//     display: block;
//     float: left;
// `;

// const TextCard = styled.div`
//     float: left;
//     margin-left: 30px;
//     color: #fff;
// `;
// const Data = styled.h5`
//     margin-top: 20px;
//     margin-bottom: 10px;
// `;

// const Titulo = styled.h2`
//         font-family: monospace;
//         text-transform: uppercase;
//         font-size: 2em;
//         font-weight: bold;
//         margin-bottom: 30px;

// `;

// const Texto = styled.p`
//     font-size: 1.2em;
//     font-family: Helvetica, Arial;
// `;



// // export const getStaticProps = async () => {

// //     const {data} = await axios.get('http://localhost:3000/api/posts');
  
  
// //     return {
// //         props: {
// //             posts: data,
// //         }
// //     }
  
// //   }

 export default function Blog( ) {

//     const [postList, setPostList] = React.useState([]);

//     setPostList(posts);

//      function PostCard ( title, date, content )  {

//          return(
//                 <Link href="#"><a>
//                 <Postcard >
//                 <ImgCard />
//                 <TextCard>
//                     <Data>{date}</Data>
//                     <Titulo>{title}</Titulo>
//                     <Texto>{content}</Texto>
//                 </TextCard> 
//             </Postcard>
//             </a></Link>
//         );
//     }

    return(
//         <React.Fragment>
//         <Sidebar />
//         <Container>
//         {
//             postList.map( post => {
//             return <PostCard key={post._id} posts={post}/>})} 
//         </Container>
//         </React.Fragment>
        <h1>Blog</h1>
    );
}
