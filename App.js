import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Header from "./src/Header";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Profile from "./src/Profile";
import { myProfile, friendProfiles } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import TabBar from "./src/TabBar";

export default function App() {
  const [isOpend, setIsOpend] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpend(!isOpend);
  };

  function ItemSeparatorComponent() {
    return <Margin height={12} />;
  }
  
  function RenderItem({ item }) {
    return (
      <View>
        <Profile
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
          isMe={false}
        />
      </View>
    );
  }

  function ListHeaderComponent() {
    return(
      <View style={{ backgroundColor:"white"}}>
          <Header />
          <Margin height={10} />

          <Profile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
            isMe={true}
          />

          <Margin height={15} />
          <Division />

          <Margin height={12} />
          <FriendSection
            friendProfileLen={friendProfiles.length}
            onPressArrow={onPressArrow}
            isOpend={isOpend}
          />

          <Margin height={3} />
        </View>
    );
  }

  function ListFooterComponent() {
    return(
      <Margin height={10} />
    );
  }

  /**
   * FlatList 로 구성
   */
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <FlatList
          data={isOpend? friendProfiles : []}
          contentContainerStyle={{paddingHorizontal:12}}
          keyExtractor={(_, index) => index}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={RenderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
        />
        <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
      </SafeAreaView>
    </SafeAreaProvider>
  );

  /**
   * ScrollView 로 구성
   */
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
          <Header />
          <Margin height={10} />

          <Profile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
          />

          <Margin height={15} />
          <Division />

          <Margin height={12} />
          <FriendSection
            friendProfileLen={friendProfiles.length}
            onPressArrow={onPressArrow}
            isOpend={isOpend}
          />

          <FriendList data={friendProfiles} isOpend={isOpend} />
        </View>

        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
