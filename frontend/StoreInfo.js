import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const StorePopup = ({ visible, onClose }) => {
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "#ebebeb",
              width: wp("100%"),
              height: hp("100%"),
              top: hp("7%"),
              borderRadius: wp("2%"),
            }}
          >
            <Text>Hello, I'm a Popup!</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                alert("You tapped the button!");
              }}
            >
              <View
                style={{
                  width: wp("12%"),
                  backgroundColor: "white",
                  height: hp("5%"),
                  left: wp("5%"),
                  borderRadius: wp("2%"),
                }}
              />
            </TouchableWithoutFeedback>
            <TouchableOpacity onPress={onClose}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default StorePopup;
