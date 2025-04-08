import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AddDeviceScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Device</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* BT Device Section */}
        <View style={styles.section}>
          <View style={styles.deviceTypes}>
            <View style={styles.deviceRow}>
              <TouchableOpacity
                style={styles.deviceTypeItem}
                onPress={() =>
                  navigation.navigate("SelectDevice", { type: "bluetooth" })
                }
              >
                <Image
                  source={require("./headphones.png")}
                  style={styles.deviceImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deviceTypeItem}
                onPress={() =>
                  navigation.navigate("SelectDevice", { type: "bluetooth" })
                }
              >
                <Image
                  source={require("./earbuds.png")}
                  style={styles.deviceImage}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.deviceTypeDesc}>
            <Icon name="bluetooth" size={18} color="white" />
            <Text style={styles.deviceTypeText}>BT Device</Text>
          </View>
        </View>

        {/* USB Device Section */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.usbDeviceItem}
            onPress={() => navigation.navigate("SelectDevice", { type: "usb" })}
          >
            <Image
              source={require("./usb-device.png")}
              style={styles.usbDeviceImage}
            />
          </TouchableOpacity>
          <View style={styles.deviceTypeDesc}>
            <Icon name="usb" size={18} color="white" />
            <Text style={styles.deviceTypeText}>USB Device</Text>
          </View>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    backgroundColor: "#232323",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  deviceTypes: {
    width: "100%",
  },
  deviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deviceTypeItem: {
    width: "48%",
    height: 120,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  deviceImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  usbDeviceItem: {
    width: "100%",
    height: 120,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  usbDeviceImage: {
    width: 200,
    height: 80,
    resizeMode: "contain",
  },
  deviceTypeDesc: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  deviceTypeText: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
  },
});

export default AddDeviceScreen;
