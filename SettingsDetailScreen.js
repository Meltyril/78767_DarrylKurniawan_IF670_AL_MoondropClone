import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  Alert,
  Modal,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SettingsDetailScreen = ({ navigation }) => {
  const [followSystem, setFollowSystem] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const languages = [
    { id: "1", name: "English" },
    { id: "2", name: "Bahasa Indonesia" },
    { id: "3", name: "日本語" },
    { id: "4", name: "한국어" },
    { id: "5", name: "中文" },
  ];

  const toggleFollowSystem = () => {
    setFollowSystem(!followSystem);
  };

  const toggleDarkMode = () => {
    if (!followSystem) {
      setDarkMode(!darkMode);
    }
  };

  const handleWipeData = () => {
    Alert.alert(
      "Wipe Data",
      "Are you sure you want to wipe all data? This action cannot be undone. (Tombol ini hanya mengarahkan kembali ke awal)",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Wipe Data",
          style: "destructive",
          onPress: () => {
            // Simply navigate to the initial screen when confirmed
            navigation.reset({
              index: 0,
              routes: [{ name: "Device" }], // Navigate to the Device tab which is the initial route
            });
          },
        },
      ]
    );
  };

  const selectLanguage = (language) => {
    setCurrentLanguage(language);
    setShowLanguageModal(false);
  };

  const LanguageModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showLanguageModal}
      onRequestClose={() => setShowLanguageModal(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Language</Text>
            <TouchableOpacity onPress={() => setShowLanguageModal(false)}>
              <Icon name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={languages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.languageItem}
                onPress={() => selectLanguage(item.name)}
              >
                <Text style={styles.languageName}>{item.name}</Text>
                {currentLanguage === item.name && (
                  <Icon name="check" size={20} color="#4CAF50" />
                )}
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
          />
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Setting</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.section}>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Night Mode</Text>
          <View style={styles.settingValueContainer}>
            <Text style={styles.settingValue}>Follow system</Text>
            <Switch
              value={followSystem}
              onValueChange={toggleFollowSystem}
              trackColor={{ false: "#444", true: "#888" }}
              thumbColor={followSystem ? "#fff" : "#ccc"}
            />
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Language</Text>
          <TouchableOpacity
            style={styles.settingValueContainer}
            onPress={() => setShowLanguageModal(true)}
          >
            <Text style={styles.settingValue}>{currentLanguage}</Text>
            <Icon name="chevron-right" size={24} color="#aaa" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.settingItem} onPress={handleWipeData}>
          <Text style={[styles.settingLabel, styles.dangerText]}>
            Wipe Data
          </Text>
          <Icon name="chevron-right" size={24} color="#aaa" />
        </TouchableOpacity>
      </View>

      <LanguageModal />
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
  section: {
    backgroundColor: "#232323",
    margin: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  settingLabel: {
    color: "white",
    fontSize: 16,
  },
  settingValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValue: {
    color: "#aaa",
    marginRight: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginHorizontal: 16,
  },
  dangerText: {
    color: "#FF5252",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#232323",
    borderRadius: 12,
    overflow: "hidden",
    maxHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  modalTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  languageName: {
    color: "white",
    fontSize: 16,
  },
});

export default SettingsDetailScreen;
