import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useDeviceContext } from "../context/DeviceContext";

interface AddDeviceScreenProps {
  navigation: any;
}

const AddDeviceScreen = ({ navigation }: AddDeviceScreenProps) => {
  const { addDevice } = useDeviceContext();

  const handleAddBTDevice = () => {
    navigation.navigate("SelectDevice", { deviceType: "bt" });
  };

  const handleAddUSBDevice = () => {
    navigation.navigate("SelectDevice", { deviceType: "usb" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Device</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.deviceTypeContainer}>
          <View style={styles.deviceTypeImageContainer}>
            <Image
              source={require("../assets/icons/headphones.png")}
              style={styles.deviceTypeImage}
            />
            <Image
              source={require("../assets/icons/earbuds.png")}
              style={styles.deviceTypeImage}
            />
          </View>

          <Text style={styles.deviceTypeTitle}>BT Device</Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddBTDevice}
          >
            <Image
              source={require("../assets/icons/bluetooth.png")}
              style={styles.addButtonIcon}
            />
            <Text style={styles.addButtonText}>BT Device</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deviceTypeContainer}>
          <View style={styles.deviceTypeImageContainer}>
            <Image
              source={require("../assets/icons/usb-logo.png")}
              style={styles.usbLogo}
            />
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddUSBDevice}
          >
            <Image
              source={require("../assets/icons/usb.png")}
              style={styles.addButtonIcon}
            />
            <Text style={styles.addButtonText}>USB Device</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 24,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  deviceTypeContainer: {
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  deviceTypeImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  deviceTypeImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    margin: 5,
    tintColor: "#888",
  },
  deviceTypeTitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 15,
  },
  usbLogo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    tintColor: "#888",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    padding: 15,
    borderRadius: 5,
  },
  addButtonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: "white",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#121212",
    paddingVertical: 15,
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  bottomNavButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
  systemNavbar: {
    flexDirection: "row",
    backgroundColor: "#121212",
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  systemNavButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  systemNavSquare: {
    width: 20,
    height: 20,
    backgroundColor: "#444",
    borderRadius: 2,
  },
  systemNavCircle: {
    width: 20,
    height: 20,
    backgroundColor: "#444",
    borderRadius: 10,
  },
  systemNavTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#444",
  },
  systemNavArrow: {
    width: 20,
    height: 20,
    backgroundColor: "#444",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    transform: [{ rotate: "45deg" }],
  },
});

export default AddDeviceScreen;
