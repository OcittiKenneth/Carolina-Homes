import styled from "styled-components";
import defaultImg from "../images/img1.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  display: flex;
  align-self: center;
  justify-content: center;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
`;

export default StyledHero;
