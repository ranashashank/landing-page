import React from 'react'
import styled from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from '../responsive'
const Container=styled.div`

  width:100%;
   height:125vh;
   display:flex;
   background: #fff;
   overflow:hidden;
   ${mobile({height:"160vh"})}
  
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
  justify-content:center;
  
    
`;
const Title=styled.h1`
   ${mobile({fontSize:"25px"})}
`;
const NextTitle=styled.h2`
   ${mobile({fontSize:"20px"})}
`;
const ButtonWrap=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  
 `
const Button=styled.button `
   background-color: transparent;
    padding: 15px 25px;
    text-align: center;
    cursor: pointer;
    border:1px solid black;
    
    border-radius: 15px;
    margin-top:15px;
    
    
`;
const DescContainer=styled.div`
margin:10px;
display:flex;
justify-content:center;

`;
const Description=styled.p`
 width:50%;
 margin:10px 0px;
 font-weight:500px;
  letter-spacing:1px;
  
`;
const CardContainer=styled.div`
 margin:10px 0px;
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding:5px 10px;
  width: 40%;
 display:flex;
 align-items:center;

`;

const Card=styled.div`
width :100%;
 height: 200px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
 
`;
const CardDesc=styled.h1`
`;
const LastContainer=styled.div`
margin:10px;
 display:flex;
 justify-content:center;
`;
const LastDescription=styled.p`

   width:50%;
 margin:20px 0px;
 font-weight:500px;
  letter-spacing:1px;
`;



const About = () => {
    return (
        <Container>
         <Wrapper>
          <TitleContainer>
           <Title>
           Why Choose BOTSPOT AI?
           </Title>
           <NextTitle>
           We’re so glad you 
           asked  !
           </NextTitle>
           <ButtonWrap>
           <Button>
           GET STARTED TODAY
           <ArrowDownwardIcon/>
          </Button>
          <Button>
          OUR SERVICES
          <ArrowDownwardIcon />
          </Button>
           </ButtonWrap>
          <DescContainer>
          <Description>
           Botsopot AI offers our customer a wealth of 
           technical and business expertise. We create diverse, 
           complex, web and mobile solutions for any business need.
            Our knowledge and experience translate to added value and peace of mind 
            for our customer.

           </Description>
          </DescContainer>
           
          </TitleContainer>
          <CardContainer>
            
            <Card>
             <ShoppingCartIcon style={{fontSize:100}}/>
              <CardDesc><b>Who We Serve</b></CardDesc> 
            </Card>
          </CardContainer>
          <LastContainer>
          <LastDescription>
          Botspot AI serves businesses in all major sectors, 
          providing exceptional software solutions for large corporation, mid-sized 
          and startups. we use industry specific knowledge and 
          custom tailor our products to each customer’s unique needs.
          </LastDescription>
          </LastContainer>
         

         </Wrapper>
            
        </Container>
    )
}

export default About
