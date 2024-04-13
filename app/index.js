import { Button, Text, View } from "react-native";
import { Link } from "expo-router";
import GlobalStyles from "./GlobalStyles";

export default function AppPage() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.main}>
        <Text style={GlobalStyles.title}>GeniBuy Demo</Text>
        <Link href="/chat" asChild>
          <Button title="Go to the ChatPage" />
        </Link>
        <Link href="/compare-products" asChild>
          <Button title="Go to the CompareProductsPage" />
        </Link>
        <Link href="/compare-summary" asChild>
          <Button title="Go to the Compare Summary Page" />
        </Link>

      </View>
    </View>
  );
}
