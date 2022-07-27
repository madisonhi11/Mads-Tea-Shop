import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  import {Link} from "react-router-dom"
  
  const Container = styled.div`
    display: flex;
    background-color:#ECEFE7;;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Mads Herbs & Teas</Logo>
          <Desc>
          I began selling herbs and teas after realizing how much therapeutic and medicinal benefits they provided me with as I became more concerned about my health. To understand what's beneficial for me and how it impacts my body, I had to do a lot of reading and research on herbology.        </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>LINKS</Title>
          <List>
            {/* <ListItem>Home</ListItem>
             */}
            <ListItem>
                <ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/">Home</Link>
              </li>
                </ul>
          </ListItem> 
          <ListItem><ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/Login">Login</Link>
              </li>
          </ul></ListItem>
          
          <ListItem> <ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/Cart">Carts</Link>
              </li>
          </ul></ListItem>
          <ListItem> <ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/ProductList">Shop</Link>
              </li>
          </ul></ListItem>
          <ListItem> <ul style ={{display:"flex"}}>
            <li style ={{marginRight:"20px", display:"flex"}}>
              <Link style={{textDecoration:'none',color:'#63535B'}} to="/Register">Register</Link>
              </li>
          </ul></ListItem>

          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 268 fake address,FAKE location 28278
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> madsherbshop.org
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;