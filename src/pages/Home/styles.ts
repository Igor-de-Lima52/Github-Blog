import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 34.4rem;
  margin: -10rem auto 0;
  position: absolute;
  left: calc(50% - 34.4rem/2);
  z-index: 9999;
  padding-bottom: 4rem;

  @media(max-width: 390px){
    width: 30.4rem;
    left: calc(50% - 30.4rem/2);
  }

  @media (min-width: 768px){
    width: 68.4rem;
    left: calc(50% - 68.4rem/2);
  }

  @media(min-width: 1024px){
    width: 86.4rem;
    left: calc(50% - 86.4rem/2);
  }
`;

export const SearchContainer = styled.div`
  margin-top: 7.2rem;

  > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 160%;
  }

  > div > h3{
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.8rem;
  }
  > div > span{
    color: ${props => props.theme["base-span"]};
    font-size: 1.6rem;
  }
`;

export const InputSearchContainer = styled.input`
  width: 100%;
  color: ${props => props.theme["base-text"]};
  border: 0;
  border-radius: 6px;
  outline: 1px solid ${props => props.theme["base-border"]};
  background: ${props => props.theme["base-input"]};
  padding: 1rem 1.4rem;
  font-size: 1.6rem;
  line-height: 160%;
  margin-top: 1.2rem;

  &::placeholder{
    font-size: 1.6rem;
    color: ${props => props.theme["base-label"]};
  }

  @media(min-width: 1440px){
    padding: 1.2rem 1.6rem;
  }
`;

export const IssuesContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 3.2rem;

  @media(min-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media(min-width: 1440px){
    margin-top: 4.8rem;
  }
`;