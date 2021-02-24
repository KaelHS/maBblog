import PostCard from './Postcard';
import styled from 'styled-components';

const Container = styled.div`

    float: right;
    height: 100%;
    right: 0;
    position: fixed;
    width: 80%;
    background: #0e0b16;
    border-left: 2px solid #fff;
    overflow-y: scroll;

`;


const  PostContainer = () =>{
        return(
                <Container>

                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                </Container>

        );
}

export default PostContainer;