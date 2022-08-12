import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 125rem;
  display: flex;
  flex-direction: column;


  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
