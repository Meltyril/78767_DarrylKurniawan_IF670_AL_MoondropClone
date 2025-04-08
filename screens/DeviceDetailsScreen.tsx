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

interface DeviceDetailsScreenProps {
  navigation: any;
  route: {
    params: {
      deviceId: string;
    };
  };
}

const DeviceDetailsScreen = ({
  navigation,
  route,
}: DeviceDetailsScreenProps) => {
  const { currentDevice } = useDeviceContext();
  const { deviceId } = route.params || { deviceId: "may" };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Device</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Device Image */}
      <View style={styles.deviceImageContainer}>
        <Text style={styles.deviceName}>{currentDevice.name}</Text>
        <Image source={currentDevice.image} style={styles.deviceImage} />
      </View>

      {/* Menu Options */}
      <ScrollView style={styles.menuContainer}>
        {currentDevice.hasEQ && (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("TuneEQ")}
          >
            <Text style={styles.menuText}>Tune EQ</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>
        )}

        {currentDevice.hasCustomEQ && (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("CustomEQ")}
          >
            <Text style={styles.menuText}>Custom EQ</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>
        )}

        {currentDevice.hasConfigFile && (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              /* Handle configuration file */
            }}
          >
            <Text style={styles.menuText}>Configuration File</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>
        )}

        {currentDevice.hasFirmwareUpdate && (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("FirmwareUpdate")}
          >
            <Text style={styles.menuText}>Firmware Update</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* Navigation Bar */}
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
          style={[styles.navItem, styles.navItemActive]}
          onPress={() => navigation.navigate("Device")}
        >
          <Image
            source={require("../assets/icons/device.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Device</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
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
  deviceImageContainer: {
    backgroundColor: "#1E1E1E",
    margin: 15,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  deviceName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  deviceImage: {
    width: "80%",
    height: 120,
    resizeMode: "contain",
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  menuItem: {
    backgroundColor: "#1E1E1E",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  menuText: {
    color: "white",
    fontSize: 16,
  },
  menuArrow: {
    color: "white",
    fontSize: 18,
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
});

export default DeviceDetailsScreen;
