import { Stack } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="filter" 
        options={{ 
          title: "filter",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="postvehicle" 
        options={{ 
          title: "Post your vehicle",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="vehicledetails" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="contactdetails" 
        options={{ 
          headerShown: false,
        }} 
      />
    </Stack>
  );
}
