import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";

interface ProductScreenProps {
  navigation: any;
}

interface Device {
  id: string;
  name: string;
  image: {
    uri: string;
  };
}

const ProductScreen = ({ navigation }: ProductScreenProps) => {
  const usbDevices: Device[] = [
    {
      id: "1",
      name: "Moonriver 2",
      image: {
        uri: "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/641e4e8ca2bd1ea0fa293c1b_MOONRIVER2.jpg",
      },
    },
    {
      id: "2",
      name: "DAWN PRO",
      image: {
        uri: "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/64d9c81be627fe010d036677_DAWNPRO.jpg",
      },
    },
    {
      id: "3",
      name: "ECHO-B",
      image: {
        uri: "https://csi-zone.id/cdn/shop/files/1737422518477_1_1200x.png?v=1737423159",
      },
    },
  ];

  const btDevices: Device[] = [
    {
      id: "4",
      name: "EDGE",
      image: {
        uri: "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/625fb843a8046c1c7861d89e/672089d495f5fc8d568d3188_COSMO.png",
      },
    },
    {
      id: "5",
      name: "ROBIN'S Earphones",
      image: {
        uri: "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/671a0c41e85c58ad26583d64_ROBIN-EN_01.jpg",
      },
    },
    {
      id: "6",
      name: "BIANCA:STIGMATA",
      image: {
        uri: "https://img.alicdn.com/imgextra/i3/2214606048233/O1CN01ld7R1P2AglnXB2YX9_!!2214606048233.jpg",
      },
    },
  ];

  const wiredDevices: Device[] = [
    {
      id: "7",
      name: "Kadenz",
      image: {
        uri: "https://m.media-amazon.com/images/I/51s9YlNYxKL.jpg",
      },
    },
    {
      id: "8",
      name: "PARA",
      image: {
        uri: "https://miro.medium.com/v2/resize:fit:1400/1*N6B1Nls0S2n60ZbwGnhVqg.jpeg",
      },
    },
  ];

  const renderDeviceItem = ({ item }: { item: Device }) => (
    <TouchableOpacity style={styles.deviceItem}>
      <View style={styles.deviceImageContainer}>
        <Image
          source={item.image}
          style={styles.deviceImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.deviceName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = (title: string, toggleable = true) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {toggleable && (
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/menu.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
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

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
          {renderSectionHeader("USB Device")}
          <FlatList
            data={usbDevices}
            renderItem={renderDeviceItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.section}>
          {renderSectionHeader("BT Device")}
          <FlatList
            data={btDevices}
            renderItem={renderDeviceItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.section}>
          {renderSectionHeader("Wired Devices")}
          <FlatList
            data={wiredDevices}
            renderItem={renderDeviceItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={[styles.navItem, styles.navItemActive]}
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
    width: 30,
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
  scrollContainer: {
    flex: 1,
  },
  section: {
    backgroundColor: "#232323",
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
  deviceItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  deviceImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    overflow: "hidden",
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  deviceImage: {
    width: "100%",
    height: "100%",
  },
  deviceName: {
    color: "white",
    fontSize: 16,
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

export default ProductScreen;
