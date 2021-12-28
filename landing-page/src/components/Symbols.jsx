import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
  width:100%;
   height:200vh;
   display:flex;
   background: linear-gradient(244.54deg, rgba(0, 153, 255, 0.42) 5.48%, rgba(110, 76, 255, 0.755) 62.63%, #DB00FF 109.63%);
   color:#fff;
   overflow:visible;
   position:relative;
   flex-wrap:wrap;
   justify-content:space-between;
`;
const Wrapper=styled.div`
   display:flex;
   margin-top:0px;
   align-items:center;
   justify-content:center;
   width:100%;  
   position:absolute;
   margin-top:90px;

`;
const SymbolWrapper=styled.div`
     display:flex; 
     width:40%;
     height:20%;
    justify-content:space-between;
    flex-direction:column;  
`;
const SymbolContainer=styled.div`
  background-color: transparent;
    margin-top:30px;
    padding: 15px 25px;
    text-align: center;
    cursor: pointer;
    border:1px solid #fff;
    color:#fff;
    border-radius: 15px;
    
  
`;
const Content=styled.h3`
`;
const Symbols = () => {
    return (
        <Container>
        <Wrapper>
         <SymbolWrapper>
         <SymbolContainer>
         <i class="fas fa-hand-holding-usd" style={{color:" rgba(255, 0, 184, 0.69)",fontSize:"40px"}}></i>
          <Content>Finance and Insurance</Content>
         </SymbolContainer>
         <SymbolContainer>
         <i class="fas fa-first-aid"style={{color:" rgba(255, 0, 184, 0.69)",fontSize:"40px"}}></i>
          <Content>Healthcare</Content>
         </SymbolContainer>
         <SymbolContainer>
         <i class="fas fa-hammer"style={{color:" rgba(255, 0, 184, 0.69)",fontSize:"40px"}}></i>
          <Content>Construction</Content>
         </SymbolContainer>
         <SymbolContainer>
         <i class="fas fa-poll"style={{color:" rgba(255, 0, 184, 0.69)",fontSize:"40px"}}></i>
          <Content>WholeSale and Retail</Content>
         </SymbolContainer>
         <SymbolContainer>
         <i class="fas fa-user-graduate"style={{color:" rgba(255, 0, 184, 0.69)",fontSize:"40px"}}></i>
          <Content>Education</Content>
         </SymbolContainer>
         <SymbolContainer>
         <i class="fas fa-radiation"style={{color:" rgba(255, 0, 184, 0.69)",fontSize:"40px"}}></i>
          <Content>Energy And Resources</Content>
         </SymbolContainer>
         
         <SymbolContainer>
         <i class="fas fa-theater-masks"style={{color:" rgba(255, 0, 184, 0.69)",fontSize:"40px"}}></i>
          <Content>Entertainment</Content>
         </SymbolContainer>
         <SymbolContainer>
         <i class="fas fa-subway"style={{color:" rgba(255, 0, 184, 0.69)",fontSize:"40px"}}></i>
          <Content>Transportation</Content>
         </SymbolContainer>
         
         </SymbolWrapper>
         
                  
        </Wrapper>
        </Container>
      
    )
}

export default Symbols
