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
  Image,
} from "react-native";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState("");
  const [emoji, setEmoji] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");
  const progressAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: "short", hour: "2-digit", minute: "2-digit" };
      setCurrentDateTime(now.toLocaleDateString(undefined, options));
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
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
    progressAnim.setValue(0);
  }, []);

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? styles.darkMode : styles.lightMode,
      ]}
    >
      <View style={styles.topBar}>
        <Text
          style={[
            styles.header,
            isDarkMode ? styles.textDark : styles.textLight,
          ]}
        >
          My New App
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#ccc", true: "#00afb9" }}
          thumbColor={isDarkMode ? "#0081a7" : "#fff"}
        />
      </View>
      <Text style={styles.dateTimeText}>{currentDateTime}</Text>
      <Image source={require("./assets/me.jpg")} style={styles.profileImage} />
      <Text
        style={[
          styles.quote,
          isDarkMode ? styles.textAccentDark : styles.textAccentLight,
        ]}
      >
        {quote || "Tap 'Generate Quote' for motivation!"}
      </Text>
      <Animated.Text
        style={[
          styles.counterText,
          { transform: [{ scale: scaleAnim }] },
          isDarkMode ? styles.textDark : styles.textLight,
        ]}
      >
        Primary Button Pressed: {counter} time(s)
      </Animated.Text>
      <Text
        style={[
          styles.emojiText,
          isDarkMode ? styles.textDark : styles.textLight,
        ]}
      >
        {emoji}
      </Text>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={handlePressPrimary}
      >
        <Text style={styles.buttonText}>Primary Action</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary} onPress={generateQuote}>
        <Text style={styles.buttonText}>Generate Quote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonReset} onPress={resetCounter}>
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
          style={[
            styles.footer,
            isDarkMode ? styles.footerDark : styles.footerLight,
          ]}
        >
          © Aarya Ghimire 2025
        </Text>
      </View>
      <StatusBar style={isDarkMode ? "light" : "dark"} translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  darkMode: { backgroundColor: "#001219" },
  lightMode: { backgroundColor: "#e8f6ef" },
  textDark: { color: "#f4f3ee" },
  textLight: { color: "#001219" },
  textAccentDark: { color: "#00afb9" },
  textAccentLight: { color: "#f07167" },

  // Move the top bar to the top of the screen
  topBar: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: "rgba(0, 0, 0, 0.1)", // Optional: Slight background for better visibility
  },

  header: { fontSize: 26, fontWeight: "bold" },
  quote: { fontSize: 16, fontStyle: "italic", marginVertical: 8 },
  counterText: { fontSize: 20, marginVertical: 8 },
  emojiText: { fontSize: 40, marginVertical: 8 },

  buttonPrimary: {
    backgroundColor: "#264653",
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
    width: 220,
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  buttonSecondary: {
    backgroundColor: "#0081a7",
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
    width: 220,
    alignItems: "center",
  },
  buttonReset: {
    backgroundColor: "#f07167",
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
    width: 220,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },

  footerContainer: { alignItems: "center", marginTop: 24, width: "100%" },
  footerLogo: { fontSize: 20, fontWeight: "bold", color: "#f07167" },
  portfolioText: { fontSize: 16, marginVertical: 8 },
  portfolioLink: { fontWeight: "bold", textDecorationLine: "underline" },
  footerDark: { color: "#fed9b7" },
  footerLight: { color: "#264653" },

  dateTimeText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#00afb9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    marginVertical: 8,
  },
  counterText: {
    fontSize: 20,
    marginVertical: 8,
  },
  emojiText: {
    fontSize: 40,
    marginVertical: 8,
  },
});
