import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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
    </View>
  );
}
