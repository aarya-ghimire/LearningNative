import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Switch,
  Alert,
  Animated,
  TextInput,
} from "react-native";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [counter, setCounter] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#f4f3ee");
  const [quote, setQuote] = useState("");
  const [emoji, setEmoji] = useState("");
  const [name, setName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);

  const progressAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Act as if what you do makes a difference. It does.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don’t watch the clock; do what it does. Keep going.",
  ];

  const emojis = [
    "😊",
    "🚀",
    "🎉",
    "✨",
    "😎",
    "🌟",
    "🔥",
    "💪",
    "💡",
    "🎯",
    "🔉⃣",
  ];

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const generateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  const handlePressPrimary = () => {
    setCounter((prevCounter) => prevCounter + 1);
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);

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
  };

  const handleResetCounter = () => {
    setCounter(0);
    setEmoji("");
    Animated.timing(progressAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleResetApp = () => {
    setCounter(0);
    setQuote("");
    setEmoji("");
    setGreeting("");
    setName("");
    setIsNameEntered(false);
    Animated.timing(progressAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const onButtonPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onButtonPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

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

  if (!isNameEntered) {
    return (
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <Text style={[styles.header, { color: "#001219" }]}>Enter Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={() => setIsNameEntered(true)}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#001219" : backgroundColor },
      ]}
    >
      <Text
        style={[styles.header, { color: isDarkMode ? "#f4f3ee" : "#001219" }]}
      >
        My Cool App
      </Text>

      <Text
        style={[styles.greeting, { color: isDarkMode ? "#fed9b7" : "#264653" }]}
      >
        {greeting}, {name}!
      </Text>

      <Text
        style={[styles.date, { color: isDarkMode ? "#fed9b7" : "#264653" }]}
      >
        {currentDate}
      </Text>

      <Text
        style={[
          styles.quote,
          { color: isDarkMode ? "#00afb9" : "#f07167", fontStyle: "italic" },
        ]}
      >
        {quote}
      </Text>

      <Text
        style={[
          styles.counterText,
          { color: isDarkMode ? "#f07167" : "#264653" },
        ]}
      >
        Primary Button Pressed: {counter} time(s)
      </Text>

      <Text
        style={[
          styles.emojiText,
          { color: isDarkMode ? "#f07167" : "#264653" },
        ]}
      >
        {emoji}
      </Text>

      <View
        style={[
          styles.progressBarContainer,
          { backgroundColor: isDarkMode ? "#264653" : "#fed9b7" },
        ]}
      >
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
              backgroundColor: isDarkMode ? "#00afb9" : "#f07167",
            },
          ]}
        />
      </View>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
          onPress={handlePressPrimary}
          onPressIn={onButtonPressIn}
          onPressOut={onButtonPressOut}
        >
          <Text style={styles.buttonText}>Primary Action</Text>
        </Pressable>
      </Animated.View>

      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={handleResetCounter}
      >
        <Text style={styles.buttonText}>Reset Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={generateQuote}
      >
        <Text style={styles.buttonText}>Generate Quote</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={handleResetApp}
      >
        <Text style={styles.buttonText}>Reset App</Text>
      </TouchableOpacity>

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

      <View style={styles.footerLineContainer}>
        <View style={styles.footerLine}></View>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerLogo}>Aarya's App</Text>
        <Text
          style={[styles.footer, { color: isDarkMode ? "#fed9b7" : "#264653" }]}
        >
          © Aarya Ghimire 2025 | Built with ❤️ using React Native
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
  header: { fontSize: 32, fontWeight: "bold", marginBottom: 16 },
  greeting: { fontSize: 18, marginVertical: 8 },
  date: { fontSize: 16, marginBottom: 8 },
  quote: { fontSize: 14, marginVertical: 8 },
  counterText: { fontSize: 18, marginVertical: 8 },
  emojiText: { fontSize: 36, marginVertical: 8 },
  progressBarContainer: {
    width: "80%",
    height: 10,
    borderRadius: 5,
    marginVertical: 16,
  },
  progressBar: { height: "100%", borderRadius: 5 },
  button: { padding: 12, borderRadius: 8, marginVertical: 8 },
  primaryButton: { backgroundColor: "#264653" },
  primaryButtonPressed: { backgroundColor: "#2a9d8f" },
  resetButton: { backgroundColor: "#f07167" },
  buttonText: { color: "#f4f3ee", fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#264653",
    borderRadius: 8,
    padding: 12,
    width: "80%",
    marginVertical: 16,
  },
  switchContainer: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  footerLineContainer: { width: "100%", marginTop: 24 },
  footerLine: { height: 1, backgroundColor: "#f4f3ee", marginBottom: 12 },
  footerContainer: {
    alignItems: "center",
    marginTop: 24,
    width: "100%",
  },
  footerLogo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f07167",
    marginBottom: 8,
  },
  footer: {
    fontSize: 14,
    textAlign: "center",
  },
});
