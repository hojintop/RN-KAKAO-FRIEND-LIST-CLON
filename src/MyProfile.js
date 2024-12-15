import { View, Text, StyleSheet, Image } from "react-native";
import Margin from "./Margin";

export default (props) => {
  return (
    <View style={styles.myProfile}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: 50, height: 50, borderRadius: 20 }}
      />
      <View style={{justifyContent: "center", marginLeft: 10}}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{props.name}</Text>
        <Margin height={4} />
        <Text style={{ fontSize: 12 , color: "gray"}}>{props.introduction}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myProfile: {
    flexDirection: "row",
  },
});
