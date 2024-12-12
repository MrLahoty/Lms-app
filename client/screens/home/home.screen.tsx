import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/header/header";
import SearchInput from "@/components/common/search.input";
import HomeBannerSlider from "@/components/home/home.banner.slider";
import AllCourses from "@/components/courses/all.courses";

export default function HomeScreen() {
  const renderContent = () => {
    return (
      <>
        <HomeBannerSlider />
        <AllCourses />
      </>
    );
  };

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 50 }}
    >
      <Header />
      <SearchInput homeScreen={true} />
      <FlatList
        data={[]}
        renderItem={null}
        ListHeaderComponent={renderContent}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

export const styles = StyleSheet.create({});
