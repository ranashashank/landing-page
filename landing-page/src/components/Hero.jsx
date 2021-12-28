import React from 'react'
import styled from 'styled-components';

 const Container = styled.div`
   width:100%;
   height:100vh;
   display:flex;
   background: linear-gradient(244.54deg, rgba(0, 153, 255, 0.42) 5.48%, rgba(110, 76, 255, 0.755) 62.63%, #DB00FF 109.63%);
   color:#fff;
   
`;
const Wrapper=styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  
`;
const TitleContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
`;
const Title=styled.h1`


`;
const TitleDesc=styled.h2`
`
const ImageContainer=styled.div`
    
`;
const Img=styled.img`
border-radius:8%;
`;
const InfoContainer=styled.div`
  display:flex;
  flex-direction:column;
  width:50%;
  justify-content:center; 
`;
const Description=styled.p`
  margin:50px 0px;
  font-family: 'Montserrat', sans-serif;
  font-weight:500px;
  letter-spacing:2px;
`;
const ButtonWrap=styled.div`
  display:flex;
  justify-content:space-between;
  font-family: 'Montserrat', sans-serif;
 `
const Button=styled.button `
background-color: transparent;
    padding: 15px 25px;
    text-align: center;
    cursor: pointer;
    border:1px solid #fff;
    color:#fff;
    border-radius: 15px;
    
    
`;




const Hero = () => {
    return (
        <Container>
            <Wrapper>
            <TitleContainer>
            <Title>
            THE SOUL OF THE WORLD
            </Title>
            <TitleDesc>
            A SIMPLE SOLUTION
            </TitleDesc>
           
              
              <ImageContainer>
               <Img src="image/new.jpg" alt=""/>
              </ImageContainer>
              <InfoContainer>
               <Description>
               For businesses and organizations - you can build communities and
               engage audiences with one easy-to-use mobile app platform.
               </Description>
               <ButtonWrap>
               <Button>
               Know More
               </Button>
               <Button>
                 Contact Us
               </Button>
               </ButtonWrap>
              </InfoContainer>
              </TitleContainer>
            </Wrapper>
        </Container>
    )
}

export default Hero
