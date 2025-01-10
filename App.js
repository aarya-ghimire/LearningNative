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

      {/* Status Bar */}
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
    backgroundColor: "#f4f3ee",
  },

  // Header style
  header: {
    fontSize: 36, // Increased font size for visibility
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
    textShadowColor: "rgba(0, 0, 0, 0.4)", // Increased shadow visibility
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },

  // Message text
  message: {
    fontSize: 20, // Slightly increased font size
    backgroundColor: "#fed9b7",
    padding: 20, // Increased padding for better spacing
    borderRadius: 15, // More rounded corners
    textAlign: "center",
    color: "#001219",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3, // Enhanced shadow visibility
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 25,
  },

  // Common button style
  button: {
    width: 220, // Wider buttons for visibility
    height: 55, // Slightly taller buttons
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // More rounded button corners
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginTop: 20, // Increased spacing between buttons
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
    fontSize: 18, // Increased text size
    color: "#ffffff",
    fontWeight: "bold",
  },

  // Footer style
  footer: {
    marginTop: 40, // Increased margin for better spacing
    fontSize: 16, // Larger font size for visibility
    color: "#264653",
    fontStyle: "italic",
  },
});
