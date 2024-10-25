import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 29.6rem;
  background:
    radial-gradient(circle 500px at top left, ${props => props.theme.blue} -300%, transparent 70%),
    radial-gradient(circle 500px at top right, ${props => props.theme.blue} -300%, transparent 70%),
    radial-gradient(ellipse at bottom, ${props => props.theme.blue} -300%, transparent 70%);
  display: flex;
  justify-content: center;
  align-items: center;

  > img:nth-child(1), > img:nth-child(3){
    display: none;
  }

  > img:nth-child(2){
    margin-top: -8rem;
  }

  @media(min-width: 1024px){
    justify-content: space-between;
  
    > img:nth-child(1), > img:nth-child(3){
      display: block;
    }
  }
`;