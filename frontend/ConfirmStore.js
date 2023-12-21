import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import * as Haptics from "expo-haptics";
import { useState } from "react";

const ConfirmStore = ({ visible, onClose, store }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end", // Align the content at the bottom
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: wp("100%"),
            height: hp("20%"), // Set the height to half of the screen
            borderTopLeftRadius: wp("5%"),
            borderTopRightRadius: wp("5%"),
            padding: wp("5%"),
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: -5,
          }}
        >
          {/* Your content goes here */}
          <Text
            style={{ fontSize: wp("5%"), fontFamily: "Montserrat_700Bold" }}
          >
            Confirm
          </Text>
          <Text
            style={{ fontSize: wp("3%"), fontFamily: "Montserrat_300Light" }}
          >
            Are you sure you want to join this store?
          </Text>

          {/* Close button */}
          <TouchableOpacity
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              onClose();
            }}
            style={{
              backgroundColor: "#1f52fc",
              width: wp("30%"),
              height: hp("5%"),
              borderRadius: wp("3%"),
              alignItems: "center",
              justifyContent: "center",
              marginTop: hp("2%"),
              marginLeft: wp("7.5%"),
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: wp("3%"),
                fontFamily: "Montserrat_700Bold",
              }}
            >
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              onClose();
            }}
            style={{
              backgroundColor: "#1f52fc",
              width: wp("30%"),
              height: hp("5%"),
              borderRadius: wp("3%"),
              alignItems: "center",
              justifyContent: "center",
              marginTop: hp("-5%"),
              right: wp("-50%"),
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: wp("3%"),
                fontFamily: "Montserrat_700Bold",
              }}
            >
              No
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmStore;
