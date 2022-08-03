import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import styled from "styled-components/native";
import { makeImgPath } from "../util";
import Poster from "./Poster";

const BgImg = styled.Image``;

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`;
const Column = styled.View`
  width: 60%;
`;

const Title = styled.Text<{ isDark: boolean }>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.isDark ? "#fff" : props.theme.textColor)};
`;

const OverView = styled.Text<{ isDark: boolean }>`
  margin-top: 10px;
  color: ${(props) => (props.isDark ? "#fff" : props.theme.textColor)};
`;

const Votes = styled(OverView)`
  font-size: 12px;
`;

interface SlideProps {
  backdropPath: string;
  posterPath: string;
  originalTitle: string;
  voteAverage: number;
  overview: string;
}

const Slide: React.FC<SlideProps> = ({
  backdropPath,
  posterPath,
  originalTitle,
  voteAverage,
  overview,
}) => {
  const isDark = useColorScheme() === "dark";
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Stack", {
      screen: "Detail",
      params: {
        originalTitle,
      },
    });
  };
  return (
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View style={{ flex: 1 }}>
        <BgImg
          source={{ uri: makeImgPath(backdropPath) }}
          style={StyleSheet.absoluteFill}
        />
        <BlurView
          tint={isDark ? "light" : "dark"}
          intensity={80}
          style={StyleSheet.absoluteFill}
        >
          <Wrapper>
            <Poster path={posterPath} />
            <Column>
              <Title isDark={isDark}>{originalTitle}</Title>
              {voteAverage > 0 ? (
                <Votes isDark={isDark}>⭐️{voteAverage} / 10</Votes>
              ) : null}
              <OverView isDark={isDark}>{overview.slice(0, 80)}...</OverView>
            </Column>
          </Wrapper>
        </BlurView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Slide;
