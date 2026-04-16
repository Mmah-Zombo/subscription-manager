import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        className="bg-primary rounded text-white p-4 my-4"
        href="/(auth)/sign-up"
      >
        Don&apos;t have an account? Sign Up
      </Link>
      <Link
        className="bg-primary rounded text-white p-4"
        href="/(auth)/sign-in"
      >
        Sign In{" "}
      </Link>
      <Link
        className="bg-primary rounded text-white p-4 my-4"
        href="/subscriptions/spotify"
      >
        Spotify Subscriptions
      </Link>
      <Link
        className="bg-primary rounded text-white p-4"
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude-max" },
        }}
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
