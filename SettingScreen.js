import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SettingScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      cardStyle: { backgroundColor: "#121212" },
    });
  }, [navigation]);

  const openURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Cannot open URL: " + url);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pleaseLogin}></Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.logoContainer}>
          <Image source={require("./moondrop_logo.png")} style={styles.logo} />
          <Text style={styles.versionText}>Version Number (2.0.9c-241129)</Text>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() =>
              navigation.navigate("SettingsDetail", {
                transition: { backgroundColor: "#121212" },
              })
            }
          >
            <Text style={styles.optionText}>Setting</Text>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() =>
              navigation.navigate("Wallpaper", {
                transition: { backgroundColor: "#121212" },
              })
            }
          >
            <Text style={styles.optionText}>Wallpaper Download</Text>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() =>
              openURL("https://moondroplab.com/en/security-privacy")
            }
          >
            <Text style={styles.optionText}>Privacy Policy</Text>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() =>
              openURL("https://www.moondropsites.com/terms-of-service")
            }
          >
            <Text style={styles.optionText}>User Agreement</Text>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() =>
              navigation.navigate("HelpAndFeedback", {
                transition: { backgroundColor: "#121212" },
              })
            }
          >
            <Text style={styles.optionText}>Help And Feedback</Text>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.followContainer}>
          <Text style={styles.followText}>Follow us:</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialIcon}>
              <Image
                source={require("./wechat.png")}
                style={styles.socialIconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Image
                source={require("./weibo.png")}
                style={styles.socialIconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Image
                source={require("./other_social.png")}
                style={styles.socialIconImage}
              />
            </TouchableOpacity>
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
    padding: 16,
    backgroundColor: "#121212", // Ensure consistent bg color
  },
  pleaseLogin: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#121212", // Add background color here
  },
  contentContainer: {
    paddingBottom: 24, // Add bottom padding for scrolling
  },
  logoContainer: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#121212", // Ensure consistent bg color
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  versionText: {
    color: "white",
    marginTop: 8,
  },
  optionsContainer: {
    backgroundColor: "#232323",
    margin: 16,
    borderRadius: 8,
    marginTop: 0,
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
  followContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: "#232323",
    borderRadius: 8,
  },
  followText: {
    color: "white",
    fontSize: 16,
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: "row",
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    overflow: "hidden",
    backgroundColor: "#121212", // Add background color
  },
  socialIconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default SettingScreen;
