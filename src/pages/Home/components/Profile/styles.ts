import styled from "styled-components";

export const ProfileContainer = styled.div`
  background: ${props => props.theme["base-profile"]};
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  border-radius: 10px;
  
  > img{
    width: 14.8rem;
    border-radius: 8px;
  }
  
  @media(min-width: 768px){
    flex-direction: row;
    padding: 2rem 2rem 2rem 3rem;
  }

  @media(min-width: 1440px){
    padding: 3.2rem 3.2rem 3.2rem 4rem;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p{
    font-size: 1.6rem;
    color: ${props => props.theme["base-text"]};
  }

  @media(min-width: 768px){
    gap: 1rem;
  }
`;

export const NameAndLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;

  > h3{
    color: ${props => props.theme["base-title"]};
    font-size: 2rem;
  }

  > a {
    display: flex;
    align-items: center;
    line-height: 0;
    font-size: 1.2rem;
    color: ${props => props.theme.blue};
    gap: 8px;
    text-transform: uppercase;
  }

  @media(min-width: 768px){
    flex-direction: row;
    margin-bottom: 0;
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
  }
  svg{
    color: ${props => props.theme["base-label"]};
    width: 18px;
  }
  span{
    color: ${props => props.theme["base-subtitle"]};
  }

  @media(min-width: 768px){
    flex-direction: row;
    gap: 2.4rem;
    align-items: center;
    margin-top: 0;
  }
`;