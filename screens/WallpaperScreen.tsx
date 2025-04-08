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

interface WallpaperScreenProps {
  navigation: any;
}

const WallpaperScreen = ({ navigation }: WallpaperScreenProps) => {
  const { wallpapers } = useDeviceContext();

  const handleSelectWallpaper = (wallpaperId: string) => {
    // Logic to select wallpaper
    // Then navigate back
    navigation.goBack();
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
        <Text style={styles.headerTitle}>Wallpaper Download</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Wallpaper Grid */}
      <FlatList
        data={wallpapers}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.wallpaperItem}
            onPress={() => handleSelectWallpaper(item.id)}
          >
            <Image source={{ uri: item.image }} style={styles.wallpaperImage} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.wallpaperGrid}
      />
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
  wallpaperGrid: {
    padding: 10,
    paddingBottom: 80,
  },
  wallpaperItem: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  wallpaperImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  bottomNav: {
    position: "absolute",
    bottom: 50, // Adjust to position above system navigation
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#121212",
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  bottomNavButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
  systemNavbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
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

export default WallpaperScreen;
