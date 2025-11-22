import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { Tabs } from "expo-router";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00A86B",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
          borderTopColor: "#E0E0E0",
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
          backgroundColor: "#FFFFFF",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="home"
              size={28}
              color={color}
              style={{ fontWeight: focused ? "bold" : "normal" }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginTop: 4 }}>Home</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="mylist"
        options={{
          title: "My List",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="list"
              size={28}
              color={color}
              style={{ fontWeight: focused ? "bold" : "normal" }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginTop: 4 }}>My List</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="person"
              size={28}
              color={color}
              style={{ fontWeight: focused ? "bold" : "normal" }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginTop: 4 }}>Profile</Text>
          ),
        }}
      />
    </Tabs>
  );
}
