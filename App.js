import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";

export default function App() {
  const handlePressPrimary = () => {
    alert("Primary Button Pressed! Welcome to my app.");
  };

  const handlePressSecondary = () => {
    alert("Secondary Button Pressed! Explore more features!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome to My App!</Text>
      <Text style={styles.message}>
        Open up App.js to start working on your app.
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.primaryButton,
          pressed && styles.primaryButtonPressed,
        ]}
        onPress={handlePressPrimary}
      >
        <Text style={styles.buttonText}>Primary Action</Text>
      </Pressable>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={handlePressSecondary}
      >
        <Text style={styles.buttonText}>Secondary Action</Text>
      </TouchableOpacity>
      <StatusBar style="light" translucent={true} backgroundColor="#264653" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "linear-gradient(180deg, #f4f3ee, #e0afa0)",
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
    marginBottom: 20,
  },
  button: {
    width: 200, 
    height: 50, 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 15,
  },
  primaryButton: {
    backgroundColor: "#00afb9",
  },
  primaryButtonPressed: {
    backgroundColor: "#0081a7",
  },
  secondaryButton: {
    backgroundColor: "#f07167",
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
