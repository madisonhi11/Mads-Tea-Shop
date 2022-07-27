import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:#735e59;
    margin-bottom: 20px;
    background-color:rgb(244, 241, 241,0.8);
`;

const Button = styled.button`
    border:round;
    padding: 10px;
    background-color: rgb(244, 241, 241,0.6);
    color:#39191C;
    cursor: pointer;
    font-weight: 600;
    &:hover{
      background-color: rgb(244, 241, 241)
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button><Link style={{textDecoration:'none',color:"#39191C"}} to= "/Product">SHOP NOW</Link></Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;