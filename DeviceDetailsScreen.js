import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DeviceDetailsScreen = ({ navigation }) => {
  const device = {
    name: "MAY",
    image: require("./may_earbuds.png"),
  };

  const handleOptionPress = (option) => {
    switch (option) {
      case "tune_eq":
        navigation.navigate("TuneEQ");
        break;
      case "custom_eq":
        navigation.navigate("CustomEQ");
        break;
      case "config_file":
        Linking.openURL("https://moondroplab.com/en/products/may");
        break;
      case "firmware_update":
        navigation.navigate("FirmwareUpdate");
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Device</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.deviceCard}>
          <Text style={styles.deviceCardTitle}>{device.name}</Text>
          <Image source={device.image} style={styles.deviceImage} />
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionPress("tune_eq")}
          >
            <Text style={styles.optionText}>Tune EQ</Text>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionPress("custom_eq")}
          >
            <Text style={styles.optionText}>Custom EQ</Text>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionPress("config_file")}
          >
            <Text style={styles.optionText}>Configuration File</Text>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionPress("firmware_update")}
          >
            <Text style={styles.optionText}>Firmware Update</Text>
            <Icon name="chevron-right" size={24} color="white" />
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
  },
  deviceCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    margin: 16,
    padding: 16,
    alignItems: "center",
  },
  deviceCardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  deviceImage: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  optionsContainer: {
    backgroundColor: "#232323",
    margin: 16,
    borderRadius: 8,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
});

export default DeviceDetailsScreen;
