import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const DescriptionModel = ({ visible, onClose, store }) => {
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
            height: hp("35%"), // Set the height to half of the screen
            borderTopLeftRadius: wp("5%"),
            borderTopRightRadius: wp("5%"),
            padding: wp("5%"),
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: -5
          }}
        >
          {/* Your content goes here */}
          <Text style={{ fontSize: wp('5%'), fontFamily: 'Montserrat_700Bold' }}>Description</Text>
          <Text style={{ fontSize: wp('3%'), fontFamily: 'Montserrat_300Light' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales neque sodales ut etiam sit amet nisl. Volutpat lacus laoreet non curabitur gravida arcu. Feugiat vivamus at augue eget arcu dictum. Vestibulum morbi blandit cursus risus at ultrices mi tempus.
          </Text>

          {/* Close button */}
          <TouchableOpacity
            onPress={onClose}
            style={{
              backgroundColor: '#1f52fc',
              width: wp('30%'),
              height: hp('5%'),
              borderRadius: wp('3%'),
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: hp('2%'),
            }}
          >
            <Text style={{ color: 'white', fontSize: wp('3%'), fontFamily: 'Montserrat_700Bold' }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DescriptionModel;
