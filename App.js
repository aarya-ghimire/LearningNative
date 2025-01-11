import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Switch,
} from "react-native";

export default function App() {
  // State for theme (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Handle primary button press
  const handlePressPrimary = () => {
    alert("Primary Button Pressed! Welcome to my app.");
  };

  // Handle secondary button press
  const handlePressSecondary = () => {
    alert("Secondary Button Pressed! Explore more features!");
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#001219" : "#f4f3ee" },
      ]}
    >
      {/* Header Section */}
      <Text
        style={[
          styles.header,
          { color: isDarkMode ? "#f4f3ee" : "#001219" },
        ]}
      >
        My Cool App
      </Text>

      {/* Greeting and Main Message */}
      <Text
        style={[
          styles.greeting,
          { color: isDarkMode ? "#fed9b7" : "#264653" },
        ]}
      >
        Welcome to My App!
      </Text>
      <Text
        style={[
          styles.message,
          {
            backgroundColor: isDarkMode ? "#264653" : "#fed9b7",
            color: isDarkMode ? "#f4f3ee" : "#001219",
          },
        ]}
      >
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

      {/* Theme Switcher */}
      <View style={styles.switchContainer}>
        <Text
          style={{
            color: isDarkMode ? "#f4f3ee" : "#001219",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#00afb9" }}
          thumbColor={isDarkMode ? "#0081a7" : "#f4f3ee"}
        />
      </View>

      {/* Footer Section */}
      <Text
        style={[
          styles.footer,
          { color: isDarkMode ? "#fed9b7" : "#264653" },
        ]}
      >
        Built with ❤️ using React Native
      </Text>

      {/* Status Bar */}
      <StatusBar
        style={isDarkMode ? "light" : "dark"}
        translucent={true}
        backgroundColor={isDarkMode ? "#001219" : "#264653"}
      />
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
  },

  // Header style
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
    textDecorationLine: "underline",
  },

  // Greeting text
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },

  // Message text
  message: {
    fontSize: 20,
    padding: 20,
    borderRadius: 15,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 25,
  },

  // Common button style
  button: {
    width: 220,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginTop: 20,
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
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },

  // Footer style
  footer: {
    marginTop: 40,
    fontSize: 16,
    fontStyle: "italic",
  },

  // Switch container
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
});
