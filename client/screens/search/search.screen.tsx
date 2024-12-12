import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SearchInput from "@/components/common/search.input";

export default function SearchScreen() {
  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={{ flex: 1, marginTop: 50 } }>
      <SafeAreaView style={{ flex: 1 }}>
        <SearchInput />
      </SafeAreaView>
    </LinearGradient>
  );
}