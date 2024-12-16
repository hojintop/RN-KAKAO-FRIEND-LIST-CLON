import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function TabButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
      }}
    >
      <Ionicons
        name={props.isSelected ? props.activeIconName : props.inactiveIconName}
        size={30}
        color="black"
      />
    </TouchableOpacity>
  );
}

export default (props) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        paddingBottom: insets.bottom,
        borderTopWidth: 0.5,
        borderTopColor: "grey",
        backgroundColor: "lightgrey",
      }}
    >
      <TabButton
        inactiveIconName="person-outline"
        activeIconName="person"
        isSelected={props.selectedTabIdx === 0}
        onPress={() => props.setSelectedTabIdx(0)}
      />
      <TabButton
        inactiveIconName="chatbubble-outline"
        activeIconName="chatbubble"
        isSelected={props.selectedTabIdx === 1}
        onPress={() => props.setSelectedTabIdx(1)}
      />
      <TabButton
        inactiveIconName="pricetags-outline"
        activeIconName="pricetags"
        isSelected={props.selectedTabIdx === 2}
        onPress={() => props.setSelectedTabIdx(2)}
      />
      <TabButton
        inactiveIconName="settings-outline"
        activeIconName="settings"
        isSelected={props.selectedTabIdx === 3}
        onPress={() => props.setSelectedTabIdx(3)}
      />
    </View>
  );
};
