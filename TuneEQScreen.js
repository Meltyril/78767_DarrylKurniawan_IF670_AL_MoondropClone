// TuneEQScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TuneEQScreen = ({ navigation }) => {
  const [activePreset, setActivePreset] = useState("Moondrop Classic");

  const eqPresets = [
    "Balanced",
    "Moondrop Classic",
    "X' Dynamic",
    "Nobass",
    "Wennebostel",
  ];

  const handlePresetSelect = (preset) => {
    setActivePreset(preset);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tune EQ</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {eqPresets.map((preset) => (
          <View key={preset} style={styles.presetCard}>
            <Text style={styles.presetText}>{preset}</Text>
            <TouchableOpacity
              style={[
                styles.presetButton,
                activePreset === preset && styles.activePresetButton,
              ]}
              onPress={() => handlePresetSelect(preset)}
            >
              <Text style={styles.presetButtonText}>
                {activePreset === preset ? "Using" : "Use"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
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
  presetCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#232323",
    padding: 16,
    margin: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  presetText: {
    color: "white",
    fontSize: 16,
  },
  presetButton: {
    backgroundColor: "#454545",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activePresetButton: {
    backgroundColor: "#666666",
  },
  presetButtonText: {
    color: "white",
    fontSize: 14,
  },
});

export default TuneEQScreen;
