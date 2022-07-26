import React from "react";
import styled from "styled-components/native";
import { makeImgPath } from "../util";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
`;

interface PosterProps {
  path: string;
}

const Poster: React.FC<PosterProps> = ({ path }) => {
  return <Image source={{ uri: makeImgPath(path) }} />;
};

export default Poster;
