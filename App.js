import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const handlePress = () => {
    alert("Button Pressed! Welcome to my app.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome to My App!</Text>
      <Text style={styles.message}>
        Open up App.js to start working on your app.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      <StatusBar style="light" translucent={true} backgroundColor="#264653" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f3ee",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#264653",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  message: {
    fontSize: 18,
    backgroundColor: "#fed9b7",
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
    color: "#001219",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#00afb9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
