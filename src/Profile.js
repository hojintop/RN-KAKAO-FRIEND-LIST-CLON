import { View, Text, StyleSheet, Image } from "react-native";
import Margin from "./Margin";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
`;
const MyImg = styled.Image`
  width: ${(props) => props.size}px; 
  height: ${(props) => props.size}px;
  borderRadius: ${(props) => props.size * 0.4}px;
`;

export default (props) => {
  const size = props.isMe ? 50 : 45;
  return (
    <Container>
      <MyImg
        source={{ uri: props.uri }} 
        size={size}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text
          style={{
            fontWeight: props.isMe ? "bold" : undefined,
            fontSize: props.isMe ? 16 : 15,
          }}
        >
          {props.name}
        </Text>
        {!!props.introduction && (
          <>
            <Margin height={props.isMe ? 4 : 3} />
            <Text style={{ fontSize: props.isMe ? 12 : 11, color: "gray" }}>
              {props.introduction}
            </Text>
          </>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  myProfile: {
    flexDirection: "row",
  },
});
