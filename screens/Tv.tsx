import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { View, Text, ScrollView, FlatList, RefreshControl } from "react-native";
import { tvAPI } from "../api";
import HList, { HListSeparator } from "../components/HList";
import Loader from "../components/Loader";
import VMedia from "../components/VMedia";

const Tv = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: popularLoading,
    data: popularData,
    isRefetching: popularRefetching,
  } = useQuery(["tv", "popular"], tvAPI.trending);
  const {
    isLoading: topRatedLoading,
    data: topRatedData,
    isRefetching: topRatedRefetching,
  } = useQuery(["tv", "topRated"], tvAPI.topRated);
  const {
    isLoading: airingTodayLoading,
    data: airingTodayData,
    isRefetching: airingTodayRefetching,
  } = useQuery(["tv", "airingToday"], tvAPI.airingToday);
  const onRefresh = () => {
    queryClient.refetchQueries(["tv"]);
  };
  const loading = popularLoading || topRatedLoading || airingTodayLoading;
  const refreshing =
    popularRefetching || topRatedRefetching || airingTodayRefetching;
  console.log(refreshing);
  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView
      contentContainerStyle={{ paddingVertical: 30 }}
      refreshControl={<RefreshControl refreshing={refreshing} />}
      onRefresh={onRefresh}
    >
      <HList title="Trending Tv" data={popularData.results} />
      <HList title="Airing Today" data={airingTodayData.results} />
      <HList title="Top Rated Tv" data={topRatedData.results} />
    </ScrollView>
  );
};

export default Tv;
