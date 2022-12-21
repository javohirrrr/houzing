import styled from "styled-components";


const Container = styled.div`
height: 571px;
position: relative;
`;

const Arrow = styled.img`
background: rgba(255,255,255,0.2);
border-radius: 50%;
position: absolute;
top: 50%;
left: ${({ next }) => !next && '20px'};
right: ${({ next }) => next && '20px'};
cursor: pointer;
:hover{
 background: rgba(255,255,255,0.4);
}
`;
const Img = styled.img`
width: 100%;
height: 571px;
`;

const Blur = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0,0,0,0.4);
`;

const Content = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
Content.Title = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
letter-spacing: -0.02em;
color: white;
`;

Content.Desc = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: white;
margin-top: 8px;
`;

Content.Price=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: white;
`;


export { Container, Arrow, Img, Blur, Content }