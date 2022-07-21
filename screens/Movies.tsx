import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { Text } from "react-native";

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const View = styled.View`
  flex: 1;
`;

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => (
  <Container>
    <Swiper showsButtons={true} containerStyle={{ width: "100%", height: 300 }}>
      <View style={{ backgroundColor: "red" }}>
        <Text>1</Text>
      </View>
      <View style={{ backgroundColor: "blue" }}>
        <Text>2</Text>
      </View>
      <View style={{ backgroundColor: "red" }}>
        <Text>3</Text>
      </View>
      <View style={{ backgroundColor: "blue" }}>
        <Text>4</Text>
      </View>
    </Swiper>
  </Container>
);

export default Movies;
