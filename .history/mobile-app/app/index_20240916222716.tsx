import { View } from "react-native";
import InputForm from "@/components/molecules/InputForm";

import Post from "@/components/molecules/Post"
import Profile from "@/components/molecules/Profile"
import dogImage from "@/app"

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
      <Post post={{
        url: "dogImage", 
        name: "Leslie", 
        message: "Hi Im Leslie" 
      }} />
      <Profile profile={{ 
        pic: "dog.jpg", 
        name: "Leslie", 
        bio: "Studying in D3 design programme" 
      }} />
    </View>
  );
}
