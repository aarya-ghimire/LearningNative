import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Alert,
  Animated,
  Linking,
} from "react-native";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState("");
  const [emoji, setEmoji] = useState("");
  const progressAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1.1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [counter]);

  const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Act as if what you do makes a difference. It does.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don’t watch the clock; do what it does. Keep going.",
  ];

  const emojis = ["😊", "🚀", "🎉", "✨", "😎", "🌟", "🔥", "💪", "💡", "🎯"];

  const toggleTheme = useCallback(
    () => setIsDarkMode((prevMode) => !prevMode),
    []
  );

  const generateQuote = useCallback(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const handlePressPrimary = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);

    Animated.timing(progressAnim, {
      toValue: Math.min((counter + 1) * 10, 100),
      duration: 500,
      useNativeDriver: false,
    }).start();

    if ((counter + 1) % 30 === 0) {
      Alert.alert(
        "Milestone Reached!",
        `You pressed the button ${counter + 1} times!`
      );
    }
  }, [counter]);

  const resetCounter = useCallback(() => {
    setCounter(0);
    setEmoji("");
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#001219" : "#e8f6ef" },
      ]}
    >
      <View style={styles.topBar}>
        <Text
          style={[styles.header, { color: isDarkMode ? "#f4f3ee" : "#001219" }]}
        >
          My New App
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#00afb9" }}
          thumbColor={isDarkMode ? "#0081a7" : "#f4f3ee"}
        />
      </View>
      <Text
        style={[styles.quote, { color: isDarkMode ? "#00afb9" : "#f07167" }]}
      >
        {quote}
      </Text>
      <Animated.Text
        style={[
          styles.counterText,
          {
            transform: [{ scale: scaleAnim }],
            color: isDarkMode ? "#f4f3ee" : "#001219",
          },
        ]}
      >
        Primary Button Pressed: {counter} time(s)
      </Animated.Text>
      <Text
        style={[
          styles.emojiText,
          { color: isDarkMode ? "#f4f3ee" : "#001219" },
        ]}
      >
        {emoji}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePressPrimary}>
        <Text style={styles.buttonText}>Primary Action</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={generateQuote}>
        <Text style={styles.buttonText}>Generate Quote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={resetCounter}>
        <Text style={styles.buttonText}>Reset Counter</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.footerLogo}>Aarya's App</Text>
        <Text
          style={styles.portfolioText}
          onPress={() => Linking.openURL("https://aaryaghimire.com.np")}
        >
          Check out my <Text style={styles.portfolioLink}>portfolio</Text>
        </Text>
        <Text
          style={[styles.footer, { color: isDarkMode ? "#fed9b7" : "#264653" }]}
        >
          © Aarya Ghimire 2025
        </Text>
      </View>
      <StatusBar
        style={isDarkMode ? "light" : "dark"}
        translucent={true}
        backgroundColor={isDarkMode ? "#001219" : "#ffffff"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  topBar: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: { fontSize: 24, fontWeight: "bold" },
  quote: { fontSize: 14, fontStyle: "italic", marginVertical: 8 },
  counterText: { fontSize: 18, marginVertical: 8 },
  emojiText: { fontSize: 36, marginVertical: 8 },
  button: {
    backgroundColor: "#264653",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    width: 200,
  },
  resetButton: {
    backgroundColor: "#f07167",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    width: 200,
  },
  buttonText: { color: "#f4f3ee", fontWeight: "bold" },
  footerContainer: { alignItems: "center", marginTop: 24, width: "100%" },
  footerLogo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f07167",
    marginBottom: 8,
  },
  portfolioText: { fontSize: 16, marginVertical: 8, color: "#f07167" },
  portfolioLink: { fontWeight: "bold", textDecorationLine: "underline" },
  footer: { fontSize: 14, textAlign: "center" },
});
