import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HelpAndFeedbackScreen = ({ navigation }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    console.log("Feedback submitted:", feedback);

    setFeedback("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="chevron-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help And Feedback</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.keyboardAvoidView}
      >
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.description}>
            If you encounter any problems while using this app, we are very
            sorry! Please fill in the text box below with the issue you
            encountered and the version number of the app you are using. Thank
            you very much for your feedback!
          </Text>

          <TextInput
            style={styles.inputBox}
            placeholder="Please describe the issues you encountered while using the app"
            placeholderTextColor="#787878"
            multiline
            textAlignVertical="top"
            value={feedback}
            onChangeText={setFeedback}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  keyboardAvoidView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  description: {
    color: "white",
    fontSize: 13,
    lineHeight: 24,
    marginBottom: 24,
  },
  inputBox: {
    backgroundColor: "#232323",
    borderRadius: 8,
    padding: 16,
    color: "white",
    fontSize: 13,
    height: 200,
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#333333",
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 70,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default HelpAndFeedbackScreen;
