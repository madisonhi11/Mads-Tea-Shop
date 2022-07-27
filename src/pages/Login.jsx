import Announcement from "../components/Announcement";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
   margin-top:10px;
`;

const Wrapper = styled.div`
  width: 23%;
  padding: 30px;

  background-color: #31493D;
   padding-top:20px;
   display:flex;
   flex-wrap:wrap;
   border-radius:20%;
  
  
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`

  width: 100%;
  padding: 15px 20px;
  background-color:rgba(244, 241, 241, 0.6);
  color: Black;
  cursor: pointer;
  border:round;

`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
   <><Announcement /><Navbar /><Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" required />
          <Input placeholder="password" required />
          <Button>LOGIN</Button>
          <Link>CAN'T REMEMBER PASSWORD ?</Link>
          <Link>CREATE AN ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container><Footer /></>
    
  );
};

export default Login;