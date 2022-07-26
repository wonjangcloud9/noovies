import React from "react";
import styled from "styled-components/native";

interface VotesProps {
  votes: number;
}

const Text = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
`;

const Votes: React.FC<VotesProps> = ({ votes }) => {
  return (
    <Text>{votes > 0 ? `⭐️ ${votes.toFixed(1)}/10` : "Coming Soon"}</Text>
  );
};

export default Votes;
