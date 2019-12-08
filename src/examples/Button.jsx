import styled from "styled-components"

const Button = styled.button`
  color: ${props => props.color || "red"};
  background: green;
  font-size: ${props => (props.big ? "3rem" : "1rem")};
`

export default Button
