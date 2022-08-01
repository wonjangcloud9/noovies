import { useQuery } from "@tanstack/react-query";
import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { tvAPI } from "../api";
import Loader from "../components/Loader";
import VMedia from "../components/VMedia";

const Tv = () => {
  const { isLoading: popularLoading, data: popularData } = useQuery(
    ["tv", "popular"],
    tvAPI.trending
  );
  const { isLoading: topRatedLoading, data: topRatedData } = useQuery(
    ["tv", "topRated"],
    tvAPI.topRated
  );
  const { isLoading: airingTodayLoading, data: airingTodayData } = useQuery(
    ["tv", "airingToday"],
    tvAPI.airingToday
  );
  const loading = popularLoading || topRatedLoading || airingTodayLoading;
  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView>
      <FlatList
        data={popularData.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.name}
            voteAverage={item.vote_average}
          />
        )}
      />
      <FlatList
        data={airingTodayData.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.name}
            voteAverage={item.vote_average}
          />
        )}
      />
      <FlatList
        data={topRatedData.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.name}
            voteAverage={item.vote_average}
          />
        )}
      />
    </ScrollView>
  );
};

export default Tv;
