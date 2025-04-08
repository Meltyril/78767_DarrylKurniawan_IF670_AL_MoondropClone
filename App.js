import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import DeviceScreen from "./DeviceScreen";
import ProductScreen from "./ProductScreen";
import SettingScreen from "./SettingScreen";
import DeviceDetailsScreen from "./DeviceDetailsScreen";
import AddDeviceScreen from "./AddDeviceScreen";
import SelectDeviceScreen from "./SelectDeviceScreen";
import WallpaperScreen from "./WallpaperScreen";
import SettingsDetailScreen from "./SettingsDetailScreen";
import HelpAndFeedbackScreen from "./HelpAndFeedbackScreen";
import TuneEQScreen from "./TuneEQScreen";
import CustomEQScreen from "./CustomEQScreen";
import FirmwareUpdateScreen from "./FirmwareUpdateScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DeviceStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "card",
        cardStyle: { backgroundColor: "#121212" },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current }) => ({
          cardStyle: {
            opacity: current.progress,
            backgroundColor: "#121212",
          },
        }),
      }}
    >
      <Stack.Screen name="DeviceHome" component={DeviceScreen} />
      <Stack.Screen name="DeviceDetails" component={DeviceDetailsScreen} />
      <Stack.Screen name="AddDevice" component={AddDeviceScreen} />
      <Stack.Screen name="SelectDevice" component={SelectDeviceScreen} />
      <Stack.Screen name="TuneEQ" component={TuneEQScreen} />
      <Stack.Screen name="CustomEQ" component={CustomEQScreen} />
      <Stack.Screen name="FirmwareUpdate" component={FirmwareUpdateScreen} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "card",
        cardStyle: { backgroundColor: "#121212" },
      }}
    >
      <Stack.Screen name="SettingHome" component={SettingScreen} />
      <Stack.Screen name="Wallpaper" component={WallpaperScreen} />
      <Stack.Screen name="SettingsDetail" component={SettingsDetailScreen} />
      <Stack.Screen name="HelpAndFeedback" component={HelpAndFeedbackScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const tabNavigator = useMemo(() => {
    return (
      <Tab.Navigator
        initialRouteName="Device"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#121212", borderTopWidth: 0 },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#888888",
          headerShown: false,
          detachInactiveScreens: true,
        }}
      >
        <Tab.Screen
          name="Product"
          component={ProductScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="shopping" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Device"
          component={DeviceStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="headphones" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="account" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      {tabNavigator}
    </NavigationContainer>
  );
};

export default App;
