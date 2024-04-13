import { Button, Text, View } from "react-native";
import { Link } from "expo-router";
import GlobalStyles from "./GlobalStyles";

export default function AppPage() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.main}>
        <Text style={GlobalStyles.title}>Hello World</Text>
        <Text style={GlobalStyles.subtitle}>This is our app.</Text>
        <Link href="/chat" asChild>
          <Button title="Go to the ChatPage" />
        </Link>
        <Link href="/compare-products" asChild>
          <Button title="Go to the CompareProductsPage" />
        </Link>
        <Text>hi</Text>
      </View>
    </View>
  );
}
