import styled from "styled-components";

interface HeaderContainerProps {
  changeColor: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  height: 6.5rem;
  font-family: "Roboto", sans-serif;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) =>
    props.changeColor ? props.theme.background : "transparent"};

  box-shadow: ${(props) =>
    props.changeColor ? "0 0 0 0.75px rgba(0, 0, 0, 0.1)" : "transparent"};

  z-index: 9999;
  position: fixed;
  width: 100%;
  nav {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 0;

    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 1rem;
    }

    @media (max-width: 1200px) {
      padding: 2rem 4rem;
    }

    @media (max-width: 600px) {
      padding: 2rem 2rem;
    }
  }
`;

export const LocationSpan = styled.span`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme.purple};

  font-weight: 500;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme["purple-dark"]};
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const BaseCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  cursor: pointer;
`;

interface EmptyCardButtonProps {
  colorScheme: "yellow" | "purple";
}

export const EmptyCartButton = styled(BaseCartButton)<EmptyCardButtonProps>`
  color: ${(props) =>
    props.colorScheme === "yellow"
      ? props.theme["yellow-dark"]
      : props.theme.white};
  background: ${(props) =>
    props.colorScheme === "yellow"
      ? props.theme["yellow-light"]
      : props.theme["purple-dark"]};

  &:hover {
    background: ${(props) =>
      props.colorScheme === "purple" && props.theme.purple};
  }
`;
