import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DeviceProvider } from "./context/DeviceContext";

// Import screens
import HomeScreen from "./screens/HomeScreen";
import DeviceScreen from "./screens/DeviceScreen";
import DeviceDetailsScreen from "./screens/DeviceDetailsScreen";
import AddDeviceScreen from "./screens/AddDeviceScreen";
import SelectDeviceScreen from "./screens/SelectDeviceScreen";
import ProductScreen from "./screens/ProductScreen";
import SettingScreen from "./screens/SettingScreen";
import SettingsDetailsScreen from "./screens/SettingsDetailsScreen";
import TuneEQScreen from "./screens/TuneEQScreen";
import CustomEQScreen from "./screens/CustomEQScreen";
import FirmwareUpdateScreen from "./screens/FirmwareUpdateScreen";
import WallpaperScreen from "./screens/WallpaperScreen";
import HelpAndFeedbackScreen from "./screens/HelpAndFeedbackScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DeviceProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#121212" },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Device" component={DeviceScreen} />
          <Stack.Screen name="DeviceDetails" component={DeviceDetailsScreen} />
          <Stack.Screen name="AddDevice" component={AddDeviceScreen} />
          <Stack.Screen name="SelectDevice" component={SelectDeviceScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen
            name="SettingsDetails"
            component={SettingsDetailsScreen}
          />
          <Stack.Screen name="TuneEQ" component={TuneEQScreen} />
          <Stack.Screen name="CustomEQ" component={CustomEQScreen} />
          <Stack.Screen
            name="FirmwareUpdate"
            component={FirmwareUpdateScreen}
          />
          <Stack.Screen name="Wallpaper" component={WallpaperScreen} />
          <Stack.Screen
            name="HelpAndFeedback"
            component={HelpAndFeedbackScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DeviceProvider>
  );
};

export default App;
