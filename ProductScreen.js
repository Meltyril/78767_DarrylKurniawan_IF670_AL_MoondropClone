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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProductScreen = () => {
  const usbDevices = [
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

  const btDevices = [
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

  const wiredDevices = [
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

  const renderDeviceItem = ({ item }) => (
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

  const renderSectionHeader = (title, toggleable = true) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {toggleable && (
        <TouchableOpacity>
          <Icon name="menu" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
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
});

export default ProductScreen;
