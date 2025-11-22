import React, { useEffect } from "react";
import { View, Image, StyleSheet, useWindowDimensions, Text } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    // Navigate to login after 2.5 seconds
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#5FD3D3", "#A8D45F", "#E8C354"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Image
            source={require("../assets/images/Logo.png")}
            style={styles.logo}
          />
        </View>
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.brandTitle}>CarDrive</Text>
        <Text style={styles.brandSubtitle}>Your Adventure Starts Here</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 60,
    alignItems: "center",
    zIndex: 10,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  textContainer: {
    marginTop: 40,
    alignItems: "center",
    zIndex: 10,
  },
  brandTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  brandSubtitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
