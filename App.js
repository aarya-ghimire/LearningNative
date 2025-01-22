import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Switch,
} from "react-native";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [counter, setCounter] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#f4f3ee");
  const [quote, setQuote] = useState("");
  const [emoji, setEmoji] = useState("");

  const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Act as if what you do makes a difference. It does.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don’t watch the clock; do what it does. Keep going.",
  ];

  const emojis = ["😊", "🚀", "🎉", "✨", "😎", "🌟", "🔥", "💪", "💡", "🎯","🕉️"];

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  // Handle primary button press
  const handlePressPrimary = () => {
    setCounter((prevCounter) => prevCounter + 1);
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
  };

  // Reset counter
  const handleResetCounter = () => {
    setCounter(0);
    setEmoji("");
  };

  // Set dynamic greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    const baseGreeting =
      hour < 12
        ? "Good Morning"
        : hour < 18
        ? "Good Afternoon"
        : "Good Evening";

    setGreeting(baseGreeting);
  }, []);

  // Set current date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
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

      {/* Current Date */}
      <Text
        style={[
          styles.date,
          { color: isDarkMode ? "#fed9b7" : "#264653" },
        ]}
      >
        {currentDate}
      </Text>

      {/* Motivational Quote */}
      <Text
        style={[
          styles.quote,
          {
            color: isDarkMode ? "#00afb9" : "#f07167",
            fontStyle: "italic",
          },
        ]}
      >
        {quote}
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

      {/* Emoji Reaction */}
      <Text
        style={[
          styles.emojiText,
          { color: isDarkMode ? "#f07167" : "#264653" },
        ]}
      >
        {emoji}
      </Text>

      {/* Progress Bar */}
      <View
        style={[
          styles.progressBarContainer,
          { backgroundColor: isDarkMode ? "#264653" : "#fed9b7" },
        ]}
      >
        <View
          style={[
            styles.progressBar,
            {
              width: `${Math.min(counter * 10, 100)}%`,
              backgroundColor: isDarkMode ? "#00afb9" : "#f07167",
            },
          ]}
        />
      </View>

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
        backgroundColor={isDarkMode ? "#001219" : "#ffffff"}
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
    marginBottom: 50,
    textDecorationLine: "underline",
  },

  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },

  date: {
    fontSize: 16,
    marginBottom: 20,
  },

  quote: {
    fontSize: 18,
    marginBottom: 25,
    textAlign: "center",
  },

  counterText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

  emojiText: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 20,
  },

  progressBarContainer: {
    width: "90%",
    height: 20,
    borderRadius: 10,
    marginVertical: 20,
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    borderRadius: 10,
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

  resetButton: {
    backgroundColor: "#264653",
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
});
