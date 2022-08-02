import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { View, Text, ScrollView, FlatList, RefreshControl } from "react-native";
import { tvAPI } from "../api";
import HList, { HListSeparator } from "../components/HList";
import Loader from "../components/Loader";
import VMedia from "../components/VMedia";

const Tv = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
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
  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["tv"]);
    setRefreshing(false);
  };
  const loading = popularLoading || topRatedLoading || airingTodayLoading;

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
