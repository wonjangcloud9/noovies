import React from "react";
import styled from "styled-components/native";

interface VotesProps {
  votes: number;
}

const Text = styled.Text``;

const Votes: React.FC<VotesProps> = ({ votes }) => {
  return <Text>{votes > 0 ? `⭐️ ${votes}/10` : "Coming Soon"}</Text>;
};

export default Votes;
