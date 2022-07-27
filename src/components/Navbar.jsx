// import { Badge } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";
// import Register from "../pages/Register";
import SearchBar from "./Search";
// import Product from "../pages/Product";
// import ProductList from "../pages/ProductList";
// import Contact from "../pages/Contact";

const Container = styled.div`
  height: 60px;
  
  margin-bottom:40px;
  display:flex;
  flex-wrap:wrap;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:#ECEFE7;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  color:#202518;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover{
  
   font-size:15px;
}
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchBar/>
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul> */}
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Mads Herbs & Tea</Logo>
        </Center>
        <Right>
           {/* <MenuItem> Home</MenuItem>
           <MenuItem> Home</MenuItem>
           <MenuItem> Home</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgecontent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>

          </MenuItem>  */}
          <MenuItem> <ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/">Home</Link>
              </li>
          </ul> </MenuItem>
         
          <MenuItem><ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/Login">Login</Link>
              </li>
          </ul></MenuItem>
          <MenuItem><ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/Cart">Carts</Link>
              </li>
          </ul></MenuItem>
          {/* <MenuItem><ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/Product">Product</Link>
              </li>
          </ul></MenuItem> */}
          <MenuItem><ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/ProductList">Shop</Link>
              </li>
          </ul></MenuItem>
          <MenuItem><ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/Register">Register</Link>
              </li>
          </ul></MenuItem>
          <MenuItem><ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/Contact">Contact</Link>
              </li>
          </ul></MenuItem>
               

          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;