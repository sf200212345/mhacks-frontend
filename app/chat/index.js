import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function ChatPage() {
  return (
    <View>
      <Text>This is the ChatPage</Text>
      <Link href="/" asChild>
        <Button title="Go back to the AppPage" />
      </Link>
    </View>
  );
}
