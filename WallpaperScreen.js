import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const WallpaperScreen = ({ navigation }) => {
  // Sample wallpaper data
  const wallpapers = [
    {
      id: "1",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/657a724b6f96fa8facd13615_%E6%97%85%E8%A1%8C%E8%80%85.jpg",
    },
    {
      id: "2",
      image:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/625fb843a8046c1c7861d89e/671a2ff725a231518ee5e789_robin-m.jpg",
    },
    {
      id: "3",
      image:
        "https://scontent.fcgk30-1.fna.fbcdn.net/v/t39.30808-6/480686050_930633865898819_4247634778649099431_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF3OqmLPp_QCq00e8e5Oo_8pXg_YlrYUIGleD9iWthQgQvHW0DdQkRyspgOiC5zJ4BSVBT5CW8TK0m9ha58g4U-&_nc_ohc=L-Bt94WJNloQ7kNvgF5l8qi&_nc_oc=AdgTbqJIG_B7KQpy5YdFmXtoY-tL5q2HwmA-Q8KpChAlum6nE1FysjmajkUOGS4dWnU&_nc_zt=23&_nc_ht=scontent.fcgk30-1.fna&_nc_gid=AZhOi6SZ6AvcwSPYpjB2T8H&oh=00_AYEBFujBpYgxcXZfZEtrJPOgVfEkGe0E8JnqtiZ6_WD8fw&oe=67D28DD5",
    },
    {
      id: "4",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/64dc8dfab3dfcf5fa53e042b_33.jpg",
    },
    {
      id: "5",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/64d19ce1ee89ff2192fd2af2_BEAUTIFUL-WORLD.jpg",
    },
    {
      id: "6",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/6443519ae250ac7bf9fdbcb8_ARIASE-FULL.jpg",
    },
    {
      id: "7",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/673aaa576ccbf2bcc132b379_KADENZ.jpg",
    },
    {
      id: "8",
      image: "https://pbs.twimg.com/media/Gc9DtgrWwAA4t8c.jpg:large",
    },
  ];

  // Render each wallpaper item
  const renderWallpaperItem = ({ item }) => (
    <TouchableOpacity style={styles.wallpaperItem}>
      <Image source={{ uri: item.image }} style={styles.wallpaperImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="chevron-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallpaper Download</Text>
      </View>

      <FlatList
        data={wallpapers}
        renderItem={renderWallpaperItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.wallpaperList}
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
    alignItems: "center",
    padding: 16,
    paddingTop: 8,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  wallpaperList: {
    padding: 8,
  },
  wallpaperItem: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    overflow: "hidden",
    height: 230,
  },
  wallpaperImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default WallpaperScreen;
