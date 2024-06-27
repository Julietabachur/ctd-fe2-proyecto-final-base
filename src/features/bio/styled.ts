//styled components
import styled from "styled-components";

interface ButtonProps {
  isActive?: boolean;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface BioImagenProps {
  src: string;
  alt: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 1rem;
  margin: 1rem;
  font-family: "Homer Simpson Revised", sans-serif;
  font-size: 1.4rem;
  border-radius: 5px;
  border: 1px solid darkgray;
  color: ${(props) => (props.isActive ? "whitesmoke" : "black")};
  text-shadow: ${(props) =>
    props.isActive
      ? "2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000;"
      : "none"};
  background-color: ${(props) => (props.isActive ? "#fdd835" : "none")};

  &:hover {
    cursor: pointer;
  }
`;

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const ContenedorBotones = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const BioImagen = styled.img<BioImagenProps>`
  max-width: 200px;
  max-height: 300px;
  margin-bottom: 1rem;
`;

export const BioNombre = styled.h3`
  font-size: 2em;
  margin-bottom: 1rem;
`;

export const BioDescripcion = styled.p`
  font-size: 1.3em;
  width: 70%;
  margin: 1rem auto;
`;
