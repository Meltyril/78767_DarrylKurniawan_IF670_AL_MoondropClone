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

interface DeviceScreenProps {
  navigation: any;
}

const DeviceScreen = ({ navigation }: DeviceScreenProps) => {
  const { connectedDevices } = useDeviceContext();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* USB Devices */}
        <View style={styles.deviceSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>USB Device</Text>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>≡</Text>
            </TouchableOpacity>
          </View>

          {connectedDevices.usb.map((device, index) => (
            <TouchableOpacity
              key={`usb-${index}`}
              style={styles.deviceItem}
              onPress={() =>
                navigation.navigate("DeviceDetails", { deviceId: device.id })
              }
            >
              <Image source={device.image} style={styles.deviceIcon} />
              <Text style={styles.deviceName}>{device.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BT Devices */}
        <View style={styles.deviceSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>BT Device</Text>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>≡</Text>
            </TouchableOpacity>
          </View>

          {connectedDevices.bt.map((device, index) => (
            <TouchableOpacity
              key={`bt-${index}`}
              style={styles.deviceItem}
              onPress={() =>
                navigation.navigate("DeviceDetails", { deviceId: device.id })
              }
            >
              <Image source={device.image} style={styles.deviceIcon} />
              <Text style={styles.deviceName}>{device.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Wired Devices */}
        <View style={styles.deviceSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Wired Devices</Text>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>≡</Text>
            </TouchableOpacity>
          </View>

          {connectedDevices.wired.map((device, index) => (
            <TouchableOpacity
              key={`wired-${index}`}
              style={styles.deviceItem}
              onPress={() =>
                navigation.navigate("DeviceDetails", { deviceId: device.id })
              }
            >
              <Image source={device.image} style={styles.deviceIcon} />
              <Text style={styles.deviceName}>{device.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Product")}
        >
          <Image
            source={require("../assets/icons/product.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Product</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Device")}
        >
          <Image
            source={require("../assets/icons/device.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Device</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, styles.navItemActive]}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            source={require("../assets/icons/setting.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    flex: 1,
    paddingTop: 15,
  },
  deviceSection: {
    marginBottom: 20,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    marginHorizontal: 15,
    overflow: "hidden",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  menuButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButtonText: {
    color: "white",
    fontSize: 20,
  },
  deviceItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  deviceIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 20,
  },
  deviceName: {
    color: "white",
    fontSize: 16,
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  navItemActive: {
    backgroundColor: "#333",
    borderRadius: 20,
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
    tintColor: "white",
  },
  navText: {
    color: "white",
    fontSize: 12,
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

export default DeviceScreen;
