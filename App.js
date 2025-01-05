import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome to My App!</Text>
      <Text style={styles.message}>
        Open up App.js to start working on your app
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f3ee",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#264653",
  },
  message: {
    fontSize: 16,
    backgroundColor: "#fed9b7",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    color: "#001219",
  },
});
