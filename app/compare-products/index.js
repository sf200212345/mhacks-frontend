import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function CompareProductsPage() {
  return (
    <View>
      <Text>This is the CompareProductsPage</Text>
      <Link href="/" asChild>
        <Button title="Go back to the AppPage" />
      </Link>
    </View>
  );
}
