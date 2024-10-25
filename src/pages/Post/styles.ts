import styled from "styled-components";

export const PostContainer = styled.main`
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

export const PostHeaderContainer = styled.div`
  width: 100%;
  background: ${props => props.theme["base-profile"]};
  padding: 2.4rem;
  border-radius: 10px;

  > div:first-child{
    display: flex;
    justify-content: space-between;
  }

  a{
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${props => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    line-height: 0;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }

  > h2{
    color: ${props => props.theme["base-title"]};
    font-size: 2rem;
    margin-top: 2rem;
  }

  @media(min-width: 1024px){
    padding: 3.2rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  gap: 1rem;

  > div{
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 0;
  }
  svg{
    color: ${props => props.theme["base-label"]};
    width: 18px;
  }
  span{
    color: ${props => props.theme["base-span"]};
  }

  @media(min-width: 768px){
    flex-direction: row;
    gap: 2.4rem;
    align-items: center;
    margin-top: .8rem;
  }
`;

export const PostMainContainer = styled.div`
  padding: 4rem 3.2rem;
  line-height: 160%;
  font-size: 1.6rem;

  > p{
    color: ${props => props.theme["base-text"]};
  }
  > span{
    color: ${props => props.theme.blue};
    text-decoration: underline;
    display: inline-block;
    margin-top: 2rem;
  }
`;

export const PostLoadingContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;

  > h2{
    color: ${props => props.theme["base-title"]};
  }
`;