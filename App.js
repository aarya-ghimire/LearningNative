import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function App() {
  // Handle primary button press
  const handlePressPrimary = () => {
    alert("Primary Button Pressed! Welcome to my app.");
  };

  // Handle secondary button press
  const handlePressSecondary = () => {
    alert("Secondary Button Pressed! Explore more features!");
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.header}>My Cool App</Text>

      {/* Greeting and Main Message */}
      <Text style={styles.greeting}>Welcome to My App!</Text>
      <Text style={styles.message}>
        Open up App.js to start working on your app.
      </Text>

      {/* Buttons */}
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

      {/* Footer Section */}
      <Text style={styles.footer}>Built with ❤️ using React Native</Text>

      {/* Status Bar/ */}
      <StatusBar style="light" translucent={true} backgroundColor="#264653" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "linear-gradient(180deg, #f4f3ee, #e0afa0)",
  },

  // Header style
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#001219",
    textDecorationLine: "underline",
  },

  // Greeting text
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#264653",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },

  // Message text
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

  // Common button style
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

  // Primary button style
  primaryButton: {
    backgroundColor: "#00afb9",
  },

  // Primary button pressed state
  primaryButtonPressed: {
    backgroundColor: "#0081a7",
  },

  // Secondary button style
  secondaryButton: {
    backgroundColor: "#f07167",
  },

  // Button text style
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },

  // Footer style
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: "#264653",
    fontStyle: "italic",
  },
});
