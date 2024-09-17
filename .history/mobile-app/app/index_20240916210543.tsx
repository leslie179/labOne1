import { View } from "react-native";
import InputForm from "@/components/molecules/InputForm";

import Post from "@/components/molecules/Post"
import Profile from "@/components/molecules/Profile"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputForm 
        buttonText="this is a button" 
        labelText="Hi this is a label"
      />
      <Post post={ url: "", name: "Random name", message: "random message" } />
      <Post post={ url: "", name: "Random name", message: "random message" } />
    </View>
  );
}
