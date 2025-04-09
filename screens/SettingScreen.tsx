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
  Switch,
  Linking,
} from "react-native";
import { useDeviceContext } from "../context/DeviceContext";

interface SettingScreenProps {
  navigation: any;
}

const SettingScreen = ({ navigation }: SettingScreenProps) => {
  const { settings, updateSettings } = useDeviceContext();

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
        <Text style={styles.headerTitle}>Setting</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.settingSection}>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Night Mode</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>Follow system</Text>
              <Switch
                value={settings.nightMode}
                onValueChange={(value) => updateSettings({ nightMode: value })}
                trackColor={{ false: "#555", true: "#007AFF" }}
                thumbColor="#FFF"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() =>
              navigation.navigate("SettingsDetails", {
                settingType: "language",
              })
            }
          >
            <Text style={styles.settingLabel}>Language</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>{settings.language}</Text>
              <Text style={styles.settingArrow}>→</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.settingSection}>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate("WipeData")}
          >
            <Text style={styles.settingLabel}>Wipe Data</Text>
            <Text style={styles.settingArrow}>→</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingSection}>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate("Wallpaper")}
          >
            <Text style={styles.settingLabel}>Wallpaper Download</Text>
            <Text style={styles.settingArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() =>
              Linking.openURL("https://moondroplab.com/en/security-privacy")
            }
          >
            <Text style={styles.settingLabel}>Privacy Policy</Text>
            <Text style={styles.settingArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() =>
              Linking.openURL("https://www.moondropsites.com/terms-of-service")
            }
          >
            <Text style={styles.settingLabel}>User Agreement</Text>
            <Text style={styles.settingArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate("HelpAndFeedback")}
          >
            <Text style={styles.settingLabel}>Help And Feedback</Text>
            <Text style={styles.settingArrow}>→</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.followSection}>
          <Text style={styles.followTitle}>Follow us:</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialIcon}>
              <Image
                source={require("../assets/icons/wechat.png")}
                style={styles.socialIconImage}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialIcon}>
              <Image
                source={require("../assets/icons/weibo.png")}
                style={styles.socialIconImage}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialIcon}>
              <Image
                source={require("../assets/icons/ca.png")}
                style={styles.socialIconImage}
              />
            </TouchableOpacity>
          </View>
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
          onPress={() => navigation.navigate("Home")}
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
    paddingHorizontal: 15,
  },
  settingSection: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  settingLabel: {
    color: "white",
    fontSize: 16,
  },
  settingValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValueText: {
    color: "#999",
    fontSize: 14,
    marginRight: 10,
  },
  settingArrow: {
    color: "#999",
    fontSize: 18,
  },
  followSection: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  followTitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialIcon: {
    backgroundColor: "#2A2A2A",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIconImage: {
    width: 30,
    height: 30,
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

export default SettingScreen;
