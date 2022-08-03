import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Detail = ({
  navigation: { setOptions },
  route: {
    params: { originalTitle },
  },
}) => {
  useEffect(() => {
    setOptions({
      title: originalTitle,
    });
    console.log(originalTitle);
  });

  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;
