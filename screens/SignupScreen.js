import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomBox from "react-native-customized-box";
import Login from "./LoginScreen";
import Loginimage from "../assets/try.jpg";

export default function SignupScreen({ navigation }) {
  const [getEmailId, setEmailId] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getFirstName, setFirstName] = useState("");
  const [getLastName, setLastName] = useState("");
  const [username, setusername] = useState("");
  const [getError, setError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerFunction = () => {
    setLoading(true);
    
    if (getEmailId === "") {
      setEmailError("*This is Required");
    }
    if (getPassword === "") {
      setPasswordError("*This is Required");
    }

    if (
      getEmailId !== "" &&
      getPassword !== "" &&
      getPassword.length >= 6
    ) {
      navigation.navigate("Login");
    } else {
      setError(true);
      setLoading(false);
      setThrowError("Please fill the Form carefully");
    }
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{ paddingTop: 20 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Create Account for Free!</Text>
          <Image
            style={styles.registerImage}
            source={Loginimage}
          />
          {/* <Text style={{ color: "#29c26a", fontSize:24, fontWeight: "bold" }}>Relife Tracker</Text> */}

          {/* First Name */}
          <CustomBox
            placeholder={"First Name"}
            boxColor={"silver"}
            focusColor={"#29c26a"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "First Name",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            values={getFirstName}
            onChangeText={(value) => {
              setFirstName(value);
              setError(false);
            }}
          />
          {/* Last Name */}
          <CustomBox
            placeholder={"Last Name"}
            boxColor={"silver"}
            focusColor={"#29c26a"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "Last Name",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            values={getLastName}
            onChangeText={(value) => {
              setLastName(value);
              setError(false);
            }}
          />
          {/* Username */}
          <CustomBox
            placeholder={"Username"}
            boxColor={"silver"}
            focusColor={"#29c26a"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "Username",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            values={username}
            onChangeText={(value) => {
              setusername(value);
              setError(false);
            }}
          />

          {/* Email Id */}
          <CustomBox
            placeholder={"Email"}
            boxColor={"silver"}
            focusColor={"#29c26a"}
            type={"email"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "Email",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            // requiredConfig={{
            //   text: <Text>{emailError}</Text>,
            //   style: {
            //     marginBottom: 10,
            //   },
            // }}
            values={getEmailId}
            onChangeText={(value) => {
              setEmailId(value);
              setError(false);
              setEmailError("");
            }}
          />
          {/* Password */}
          <CustomBox
            placeholder={"Password"}
            boxColor={"silver"}
            focusColor={"#29c26a"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
              overflow: "hidden",
            }}
            labelConfig={{
              text: "Password",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            toggle={true}
            requiredConfig={{
              text: <Text>{passwordError}</Text>,
              style: {
                marginBottom: 10,
              },
            }}
            values={getPassword}
            onChangeText={(value) => {
              setPassword(value);
              // setError(false);
              setPasswordError("");
            }}
          />
          {/* Login Button */}
          <TouchableOpacity
            style={styles.registerbtn}
            onPress={registerFunction}
          >
            <Text style={styles.registerBtnText}>Register</Text>
            {loading && loading ? (
              <ActivityIndicator style={styles.indicator} color={"white"} />
            ) : null}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  errorCard: {
    width: 300,
    height: 50,
    backgroundColor: "#de3138",
    justifyContent: "center",
    paddingLeft: 15,
    borderRadius: 40,
  },
  errorCardText: {
    paddingLeft: 15,
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    position: "absolute",
  },
  cross: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
    left: 250,
    position: "relative",
  },
  registerImage: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  myLogo: {
    width: 100,
    height: 70,
    borderRadius: 40,
    left: 150,
    marginBottom: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  registerbtn: {
    marginTop: 10,
    backgroundColor: "#29c26a",
    width: 300,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    flexDirection: "row",
  },
  registerBtnText: {
    color: "white",
    fontSize: 22,
  },
});
