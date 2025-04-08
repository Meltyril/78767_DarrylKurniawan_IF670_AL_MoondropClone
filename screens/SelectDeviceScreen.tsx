import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { useDeviceContext } from "../context/DeviceContext";

interface SelectDeviceScreenProps {
  navigation: any;
  route: {
    params: {
      deviceType: "bt" | "usb";
    };
  };
}

const SelectDeviceScreen = ({ navigation, route }: SelectDeviceScreenProps) => {
  const { selectableDevices, selectDevice } = useDeviceContext();
  const { deviceType } = route.params || { deviceType: "bt" };

  const handleSelectDevice = (deviceId: string) => {
    selectDevice(deviceId);
    navigation.navigate("DeviceDetails", { deviceId });
  };

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
        <Text style={styles.headerTitle}>Select Device</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Device List */}
      <FlatList
        data={selectableDevices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.deviceItem}
            onPress={() => handleSelectDevice(item.id)}
          >
            <Image source={item.icon} style={styles.deviceIcon} />
            <Text style={styles.deviceName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.bottomNavButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/icons/home.png")}
            style={styles.bottomNavIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavButton} onPress={() => {}}>
          <Image
            source={require("../assets/icons/circle.png")}
            style={styles.bottomNavIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavButton} onPress={() => {}}>
          <Image
            source={require("../assets/icons/back.png")}
            style={styles.bottomNavIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavButton} onPress={() => {}}>
          <Image
            source={require("../assets/icons/down.png")}
            style={styles.bottomNavIcon}
          />
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
    borderBottomWidth: 1,
    borderBottomColor: "#333",
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
  listContent: {
    paddingBottom: 20,
  },
  deviceItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  deviceIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
    tintColor: "white",
  },
  deviceName: {
    color: "white",
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  bottomNavButton: {
    padding: 10,
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
});

export default SelectDeviceScreen;
