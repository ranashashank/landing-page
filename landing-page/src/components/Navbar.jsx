import styled from 'styled-components';
import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {mobile} from "../responsive";

const Container=styled.div`

  height:60px;
  background: linear-gradient(244.54deg, rgba(0, 153, 255, 0.42) 5.48%, rgba(110, 76, 255, 0.755) 62.63%, #DB00FF 109.63%);
  color:#fff;
 
  ${mobile({height:"50px"})}
`;

const Wrapper=styled.div`
 
 padding:0px 10px;
 display:flex;
 align-items:center;
 justify-content:space-between;
 ${mobile({padding:"10px 0px"})}
`;

const Left=styled.div`
  flex:1;
  display:flex;
  align-items:center;
 
`;
const Logo= styled.h1`
  color:;
  font-family: 'Montserrat', sans-serif;
  font-weight:bold;
  ${mobile({fontSize:"24px"})}
`;
const Right=styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${mobile (({flex:2, justifyContent:"center"}))};
`;

const MenuItem=styled.div`
   font-size:14px;
   cursor:pointer;
   margin-left:25px;
   ${mobile(({fontSize:"12px", marginLeft:"10px"}))}
`;




const Navbar = () => {
    return (
        <Container>
         <Wrapper>
          <Left>
           <Logo>
             BOTSPOTAI
           </Logo>
          </Left>
          <Right>
          
           <MenuItem>
            <SearchOutlinedIcon/>
           </MenuItem>
           <MenuItem>
            <PhoneEnabledOutlinedIcon/>
           </MenuItem>
           <MenuItem>
            <MenuOutlinedIcon />
           </MenuItem>
          </Right>
         
         </Wrapper>
            
        </Container>
    )
}

export default Navbar




