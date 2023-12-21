import React from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    TouchableWithoutFeedback, Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Haptics from "expo-haptics";
import {AntDesign} from "@expo/vector-icons";
import 'react-native-gesture-handler';
import {Swipeable} from "react-native-gesture-handler";
import GestureHandler from "react-native-gesture-handler/src/web_hammer/GestureHandler";

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
              borderRadius: wp("7%"),
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: -5
            }}>

              <View style={{width: wp('90%'), height: hp('40%'), top: hp('3%'), left: wp('5%'), borderRadius: wp('5%'), shadowColor: '#000',
                  shadowOffset: {
                      width: 2,
                      height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: -5}}>
                  <Image source={require('./assets/one_thumbnail.png')} style={{ resizeMode: 'contain', top: hp('0%'), width: '100%', height: '100%' }} />
                  <TouchableWithoutFeedback
                      onPress={() => {
                          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                          onClose();
                      }}
                  >
                      <View
                          style={{
                              width: wp("12%"),
                              backgroundColor: "white",
                              height: hp("5%"),
                              left: wp("7%"),
                              borderRadius: wp("2%"),
                              top: hp("2%"),
                              position: 'absolute',
                          }}
                      >
                          <AntDesign name="left" size={24} color="black" style={{alignSelf: 'center', top: hp('1%')}} />
                      </View>
                  </TouchableWithoutFeedback>
              </View>

          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default StorePopup;
