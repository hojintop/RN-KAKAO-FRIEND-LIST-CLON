import { View, Text, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

export default(props) => {
    return(
        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
            <Text style={{fontSize: 12, color: "gray"}}>친구 {props.friendProfileLen}</Text>
            <TouchableOpacity onPress={props.onPressArrow}>
                <Ionicons name={props.isOpend ? "caret-up-outline" : "caret-down-outline"} size={24} color="lightgray" />
            </TouchableOpacity>
        </View>
    );
}