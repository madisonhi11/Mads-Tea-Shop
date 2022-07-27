import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #283E2C;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin:auto;
`;

const Announcement = () => {
  return <Container> Free Shipping For Orders Over $30  - <b>Ends 07/26</b> </Container>;
};

export default Announcement;