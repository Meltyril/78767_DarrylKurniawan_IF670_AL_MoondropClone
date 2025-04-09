import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

interface WipeDataScreenProps {
  navigation: any;
}

const WipeDataScreen = ({ navigation }: WipeDataScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.content}>
        <Text style={styles.title}>Wipe All Data</Text>

        <View style={styles.warningContainer}>
          <Text style={styles.warningTitle}>Warning</Text>
          <Text style={styles.warningText}>
            This action will permanently delete all your app data, including
            device settings, preferences, and personal configurations.
          </Text>

          <Text style={styles.cautionText}>
            Are you sure you want to proceed?
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.wipeButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.wipeButtonText}>Wipe Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
  },
  content: {
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  warningContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  warningTitle: {
    color: "#FF3B30",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  warningText: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 15,
  },
  cautionText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  cancelButton: {
    backgroundColor: "#2A2A2A",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  wipeButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    flex: 1,
  },
  wipeButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default WipeDataScreen;
