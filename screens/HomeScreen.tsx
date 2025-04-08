import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useDeviceContext } from "../context/DeviceContext";

interface HomeScreenProps {
  navigation: any;
}

interface Device {
  id: string;
  name: string;
  version: string;
  macAddress?: string;
  image: any;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { currentDevice } = useDeviceContext();
  const [loading, setLoading] = useState(true);
  const [devices, setDevices] = useState<Device[]>([]);

  const sampleDevices: Device[] = [
    {
      id: "1",
      name: "MAY",
      version: "1.0.0",
      image: require("../assets/devices/may.png"),
    },
    {
      id: "2",
      name: "Nekocake",
      version: "1.0.0",
      macAddress: "41:42:4C:30:87:F5",
      image: require("../assets/devices/nekocake.png"),
    },
  ];

  const handleSearchTextTap = () => {
    setLoading(false);
    setDevices(sampleDevices);
  };

  const scanForDevices = () => {
    setLoading(true);
  };

  const renderDeviceItem = ({ item }: { item: Device }) => {
    return (
      <TouchableOpacity
        style={styles.deviceItem}
        onPress={() =>
          navigation.navigate("DeviceDetails", { deviceId: item.id })
        }
      >
        <View style={styles.deviceCard}>
          <View style={styles.deviceContent}>
            <Text style={styles.deviceName}>{item.name}</Text>
            <View style={styles.deviceInfo}>
              <Text style={styles.deviceVersion}>Version: {item.version}</Text>
              {item.macAddress && (
                <Text style={styles.deviceMac}>{item.macAddress}</Text>
              )}
            </View>
          </View>
          <Image source={item.image} style={styles.deviceImage} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <View style={styles.headerLeft} />
        <View style={styles.headerCenter}>
          <Image
            source={require("../assets/icons/logohome.png")}
            style={styles.logoImage}
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddDevice")}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      {loading ? (
        <View style={styles.searchingContainer}>
          <View style={styles.searchingCircles}>
            {[1, 2, 3, 4, 5].map((i) => (
              <View key={i} style={[styles.circle, { opacity: 0.2 * i }]} />
            ))}
            <TouchableOpacity
              onPress={handleSearchTextTap}
              style={styles.searchTextWrapper}
            >
              <Text style={styles.searchingText}>Searching For Device...</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : devices.length === 0 ? (
        <View style={styles.noDevicesContainer}>
          <Text style={styles.noDevicesText}>No devices found</Text>
          <TouchableOpacity style={styles.scanButton} onPress={scanForDevices}>
            <Text style={styles.scanButtonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={devices}
          renderItem={renderDeviceItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.deviceList}
        />
      )}

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
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    height: 30,
    width: 30, // Same width as the add button to ensure balance
  },
  headerCenter: {
    flex: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    height: 30,
    width: 120,
    resizeMode: "contain",
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 24,
  },
  searchingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchingCircles: {
    position: "relative",
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 150,
    width: "100%",
    height: "100%",
  },
  searchTextWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  searchingText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  noDevicesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDevicesText: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  scanButton: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  scanButtonText: {
    color: "white",
  },
  deviceList: {
    padding: 16,
  },
  deviceItem: {
    marginBottom: 16,
  },
  deviceCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    padding: 16,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deviceContent: {
    flex: 1,
  },
  deviceName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  deviceInfo: {
    marginTop: 8,
  },
  deviceVersion: {
    color: "#999",
    fontSize: 12,
  },
  deviceMac: {
    color: "#999",
    fontSize: 12,
    marginTop: 4,
  },
  deviceImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
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

export default HomeScreen;
