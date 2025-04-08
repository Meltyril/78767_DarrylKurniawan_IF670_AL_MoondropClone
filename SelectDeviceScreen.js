import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SelectDeviceScreen = ({ navigation, route }) => {
  const { type } = route.params;

  // Updated device data with image URLs
  const deviceList = [
    {
      id: "1",
      name: "Psyche",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b842877c100bae8439b2ef_6788838a7507b879d68edce5_psyche.jpeg",
    },
    {
      id: "2",
      name: "Meteor",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b842853dbb2b0cfe372c08_676f5b9c51550a5babc1caba_meteor.jpeg",
    },
    {
      id: "3",
      name: "Concerto",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b842805b377dd7fc6945cd_6719eafa7c64bc246ca834e8_Concerto.jpeg",
    },
    {
      id: "4",
      name: "Kadenz",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b842842d75d04ae7da91f3_6719e7d70bd3169dfe903c9e_kadenz.jpeg",
    },
    {
      id: "5",
      name: "CHU2 DSP",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b842812d75d04ae7da86dd_64a67decb6354a3471c0d4cd_CHU2.jpeg",
    },
    {
      id: "6",
      name: "DUSK-SP",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b8428292a539783ed204b9_662c593acb810b870abf6e07_DUSK-m.jpeg",
    },
    {
      id: "7",
      name: "DarkSaber",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b8428151391e1ff1344219_650a4e787457e8f22b4e70ab_DARKSABER.jpeg",
    },
    {
      id: "8",
      name: "MAY",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b842859c7549f184fe38fd_65780ab878fffdcd92172123_MAY.jpeg",
    },
    {
      id: "9",
      name: "Starfield II",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b842893bfe46115bfc39d8_64ba1be8ea0a30cccb4f9ac3_STARFIELD2.jpeg",
    },
    {
      id: "10",
      name: "Aria-SP",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/64409e11efa14f4db8c83d61_641d588172db5f30e1c08a98_ARIASE.jpeg",
    },
    {
      id: "11",
      name: "Solis",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/64409e15efa14ffdabc83ddb_641d539a6cafd02dc3be4dd4_SOLIS.jpeg",
    },
    {
      id: "12",
      name: "Blessing 3",
      imageUrl:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/627128d862c9a44234848dda/67b8427fa3101478726f9737_64336e53545aff474ff65098_BLESSING3.jpeg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Device</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={deviceList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.deviceItem}
            onPress={() => {
              // Connect to device logic
              navigation.navigate("DeviceHome");
            }}
          >
            <View style={styles.deviceImageContainer}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.deviceImage}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.deviceName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
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
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  deviceItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    height: 80,
  },
  deviceImageContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    overflow: "hidden",
    marginRight: 16,
    backgroundColor: "#333",
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

export default SelectDeviceScreen;
