import { Button, Text, View } from "react-native";
import { Link, router } from "expo-router";
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
        <Button title="go to compare summary" onPress={() => router.navigate({pathname: "/compare-summary", params: {message_thread_id: 72}})} />
      </View>
    </View>
  );
}
