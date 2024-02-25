import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomDrawerContent from "../components/customDrawerContent";

export default function _layout() {
  return (
    <Drawer
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "About",
          title: "About",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
