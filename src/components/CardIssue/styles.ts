import styled from "styled-components";

export const CardIssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background: ${props => props.theme["base-post"]};
  padding: 2.4rem;
  border-radius: 10px;
  cursor: pointer;

  > div{
    display: flex;
    justify-content: space-between;
  }

  > div > h4{
    color: ${props => props.theme["base-title"]};
    font-size: 1.6rem;
    width: 22.3rem;
  }

  > div > span{
    color: ${props => props.theme["base-span"]};
    font-size: 1.4rem;
  }

  > p{
    color: ${props => props.theme["base-text"]};
    font-size: 1.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(max-width: 390px){
    > div > h4{
      width: 18.3rem;
    }
  }

  @media(min-width: 768px){
    padding: 3.2rem;

    > div > h4{
      font-size: 1.8rem;
      width: 50.3rem;
    }

    > div > span{
      color: ${props => props.theme["base-span"]};
      font-size: 1.4rem;
    }
  }
  @media(min-width: 1024px){
    > div > h4{
      width: 28.3rem;
    }
  }
`;