import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Switch,
  TextInput, // Import TextInput for custom color input
  ScrollView, // Import ScrollView for color history
} from "react-native";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [counter, setCounter] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#f4f3ee"); // Default background color
  const [customColor, setCustomColor] = useState(""); // State for user input color
  const [colorHistory, setColorHistory] = useState([]); // Track applied colors

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Handle primary button press
  const handlePressPrimary = () => {
    setCounter((prevCounter) => prevCounter + 1);
    alert(`Primary Button Pressed ${counter + 1} time(s)!`);
  };

  // Reset counter
  const handleResetCounter = () => {
    setCounter(0);
    alert("Counter has been reset!");
  };

  // Handle secondary button press
  const handlePressSecondary = () => {
    alert("Secondary Button Pressed! Explore more features!");
  };

  // Apply custom background color
  const applyCustomColor = () => {
    if (/^#[0-9A-F]{6}$/i.test(customColor)) {
      setBackgroundColor(customColor);
      setColorHistory((prevHistory) => [customColor, ...prevHistory]);
    } else {
      alert("Please enter a valid hex color code (e.g., #123ABC).");
    }
  };

  // Generate a random background color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setBackgroundColor(randomColor);
    setColorHistory((prevHistory) => [randomColor, ...prevHistory]);
  };

  // Revert to a color from history
  const revertToColor = (color) => {
    setBackgroundColor(color);
  };

  // Set dynamic greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#001219" : backgroundColor },
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

      {/* Dynamic Greeting */}
      <Text
        style={[
          styles.greeting,
          { color: isDarkMode ? "#fed9b7" : "#264653" },
        ]}
      >
        {greeting}, Welcome to My App!
      </Text>

      {/* Main Message */}
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

      {/* Counter Display */}
      <Text
        style={[
          styles.counterText,
          { color: isDarkMode ? "#f07167" : "#264653" },
        ]}
      >
        Primary Button Pressed: {counter} time(s)
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

      {/* Reset Counter Button */}
      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={handleResetCounter}
      >
        <Text style={styles.buttonText}>Reset Counter</Text>
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

      {/* Custom Background Color Input */}
      {!isDarkMode && (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Background Color (Hex):</Text>
          <TextInput
            style={styles.textInput}
            placeholder="#123ABC"
            value={customColor}
            onChangeText={setCustomColor}
          />
          <TouchableOpacity
            style={[styles.button, styles.applyButton]}
            onPress={applyCustomColor}
          >
            <Text style={styles.buttonText}>Apply Color</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.randomColorButton]}
            onPress={generateRandomColor}
          >
            <Text style={styles.buttonText}>Random Background</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Color History */}
      <ScrollView style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Color History:</Text>
        {colorHistory.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.historyItem, { backgroundColor: color }]}
            onPress={() => revertToColor(color)}
          >
            <Text style={styles.historyText}>{color}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
    textDecorationLine: "underline",
  },

  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },

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

  counterText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

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

  primaryButton: {
    backgroundColor: "#00afb9",
  },

  primaryButtonPressed: {
    backgroundColor: "#0081a7",
  },

  secondaryButton: {
    backgroundColor: "#f07167",
  },

  resetButton: {
    backgroundColor: "#264653",
  },

  applyButton: {
    backgroundColor: "#fed9b7",
  },

  randomColorButton: {
    backgroundColor: "#0081a7",
  },

  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },

  footer: {
    marginTop: 40,
    fontSize: 16,
    fontStyle: "italic",
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  inputContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#264653",
    marginBottom: 10,
  },

  textInput: {
    height: 40,
    width: 200,
    borderColor: "#264653",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    color: "#264653",
  },
});
