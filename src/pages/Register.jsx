import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1492778297155-7be4c83960c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHRlYSUyMGxlYXZlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 60%;
  padding: 50px;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  background-color:rgba(244, 241, 241, 0.6);
  color: Black;
  cursor: pointer;
  border:round;
`;

const Register = () => {
  return (
    <><Announcement/>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="FIRST NAME" required/>
          <Input placeholder="LAST NAME" required/>
          <Input placeholder="USERNAME" required/>
          <Input placeholder="EMAIL"required />
          <Input placeholder="PASSWORD" required />
          <Input placeholder="CONFIRM PASSWORD" required/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data but not shared in accordance with the <b>PRIVACY POLICY</b>. 
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container><Footer /></>
  );
};

export default Register;