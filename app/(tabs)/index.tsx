import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-300">Welcome to this move App with JSM</Text>
        <Text className="font-bold text-accent">This is Me</Text>
    </View>
  );

}


