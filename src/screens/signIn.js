import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import ReusableInput from "../components/reuseableInput";
import { FontAwesome5 } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Hello, </Text>

        <View>
          <Text style={styles.subHeader}>Welcome Back!</Text>
        </View>

        <View>
          <Text style={styles.label}>Email</Text>
          <ReusableInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter Email"
          />
        </View>
        <View>
          <Text style={styles.label}>Enter Password</Text>

          <ReusableInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter password"
          />
        </View>

        <TouchableOpacity style={styles.PwContainer}>
          <Text style={styles.forgetPw}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.signInButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            style={styles.signInContent}
          >
            <Text style={styles.signInText}>Sign In</Text>
            <FontAwesome5 name="arrow-right" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.option}>
          <View style={styles.separator}></View>
          <Text style={styles.OrText}>or Sign in With</Text>
          <View style={styles.separator}></View>
        </View>

        <View style={styles.socialMediaContainer}>
          <Image
            source={require("../assets/icons/google.png")}
            style={styles.socialMediaIcon}
          />

          <TouchableOpacity>
            <Image
              source={require("../assets/icons/facebook.png")}
              style={styles.socialMediaIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.OptionText}>
          <Text style={styles.textOption}>Don't have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.signText}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: "20%",
    paddingHorizontal: 30,
  },
  header: {
    bottom: 20,
    fontSize: 40,
    fontWeight: "bold",
    left: 20,
  },
  subHeader: {
    fontSize: 30,
    fontWeight: "normal",
    bottom: 20,
    left: 20,
  },
  label: {
    fontSize: 18,
    top: 47,
    left: 20,
  },
  forgetPw: {
    color: "orange",
    fontSize: 15,
    top: 30,
    left: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    justifyContent: "center",
  },
  OrText: {
    fontSize: 15,
    alignSelf: "center",
    marginHorizontal: 1,
    color: "#ccc",
  },
  separator: {
    width: 80,
    height: 0.5,
    backgroundColor: "#ccc",
    marginHorizontal: 2,
  },
  signInButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009688",
    paddingVertical: 10,
    // paddingHorizontal: 30,
    borderRadius: 15,
    marginTop: 60,
    width: "100%",
    height: 70,
  },

  signInContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  socialMediaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  socialMediaIcon: {
    width: 55,
    height: 50,
    marginHorizontal: 10,
    marginTop: 60,
    bottom: 20,
    borderRadius: 10,
  },
  OptionText: {
    flexDirection: "row",
    marginTop: 40,
    fontSize: 25,
    color: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  signText: {
    color: "orange",
  },
  textOption: {
    fontSize: 15,
  },
});

export default SignIn;
