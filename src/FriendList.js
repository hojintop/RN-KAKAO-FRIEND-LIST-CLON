import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default(props) => {
    const insets = useSafeAreaInsets();
    
    if(props.isOpend){
        return(
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:insets.bottom}}>
            {props.data.map((item, index) => (
                <View key={index}>
                    <Profile
                    uri={item.uri}
                    name={item.name}
                    introduction={item.introduction}
                />
                <Margin height={12} />

                </View>
            ))}
        </ScrollView>
        );
    }else{
        return null;
    }
}