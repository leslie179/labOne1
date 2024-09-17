import { View } from "react-native";
import InputForm from "@/components/molecules/InputForm";

import Profile from "@/components/"

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

    </View>
  );
}
