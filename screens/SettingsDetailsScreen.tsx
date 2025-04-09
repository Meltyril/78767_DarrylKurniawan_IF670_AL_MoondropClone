import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Switch,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useDeviceContext } from "../context/DeviceContext";

type SettingsDetailsParams = {
  settingType: "language" | "theme" | "notifications";
};

type SettingsDetailsRouteProp = RouteProp<
  { SettingsDetails: SettingsDetailsParams },
  "SettingsDetails"
>;

interface SettingsDetailsScreenProps {
  navigation: any;
  route: SettingsDetailsRouteProp;
}

const SettingsDetailsScreen = ({
  navigation,
  route,
}: SettingsDetailsScreenProps) => {
  const { settings, updateSettings } = useDeviceContext();
  const { settingType } = route.params || { settingType: "language" };

  const renderContent = () => {
    switch (settingType) {
      case "language":
        return (
          <View style={styles.settingsList}>
            {["English", "Español", "中文", "日本語", "한국어"].map(
              (lang, index) => (
                <TouchableOpacity
                  key={`lang-${index}`}
                  style={styles.settingOption}
                  onPress={() => {
                    updateSettings({ language: lang });
                    navigation.goBack();
                  }}
                >
                  <Text style={styles.settingOptionText}>{lang}</Text>
                  {settings.language === lang && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </TouchableOpacity>
              )
            )}
          </View>
        );

      case "theme":
        return (
          <View style={styles.settingsList}>
            <View style={styles.themeOption}>
              <Text style={styles.themeOptionText}>Dark Theme</Text>
              <Switch
                value={settings.nightMode}
                onValueChange={(value) => updateSettings({ nightMode: value })}
                trackColor={{ false: "#555", true: "#007AFF" }}
                thumbColor="#FFF"
              />
            </View>

            <TouchableOpacity style={styles.settingOption}>
              <Text style={styles.settingOptionText}>System Default</Text>
              <Text style={styles.checkmark}>✓</Text>
            </TouchableOpacity>
          </View>
        );

      case "notifications":
        return (
          <View style={styles.settingsList}>
            <View style={styles.notificationOption}>
              <Text style={styles.settingOptionText}>Firmware Updates</Text>
              <Switch
                value={true}
                onValueChange={() => {}}
                trackColor={{ false: "#555", true: "#007AFF" }}
                thumbColor="#FFF"
              />
            </View>

            <View style={styles.notificationOption}>
              <Text style={styles.settingOptionText}>New Products</Text>
              <Switch
                value={false}
                onValueChange={() => {}}
                trackColor={{ false: "#555", true: "#007AFF" }}
                thumbColor="#FFF"
              />
            </View>
          </View>
        );

      default:
        return <Text style={styles.defaultText}>Setting details</Text>;
    }
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
        <Text style={styles.headerTitle}>
          {settingType.charAt(0).toUpperCase() + settingType.slice(1)}
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>{renderContent()}</ScrollView>
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
  content: {
    flex: 1,
  },
  defaultText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
  },
  settingsList: {
    backgroundColor: "#1E1E1E",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  settingOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  settingOptionText: {
    color: "white",
    fontSize: 16,
  },
  checkmark: {
    color: "#007AFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  themeOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  themeOptionText: {
    color: "white",
    fontSize: 16,
  },
  notificationOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
});

export default SettingsDetailsScreen;
