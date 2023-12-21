import React from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    TouchableWithoutFeedback, Image, Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Haptics from "expo-haptics";
import {AntDesign} from "@expo/vector-icons";
import 'react-native-gesture-handler';

const StorePopup = ({ visible, onClose, store }) => {
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
<<<<<<< HEAD
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
              <Text style={{left: wp('5%'), top: hp('5%'), fontSize: wp('5%'), fontFamily: 'Montserrat_700Bold'}}>Restaurant One</Text>
              <Text style={{paddingLeft: wp('5%'), paddingRight: wp('5%'), justifyContent: 'center', top: hp('8%'), fontSize: wp('3%'), fontFamily: 'Montserrat_300Light_Italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum...</Text>
              <Text style={{left: wp('5%'), top: hp('10%'), fontSize: wp('3%'), fontFamily: 'Montserrat_700Bold', color: '#1841d6'}}>Read More</Text>
              {/*TODO: another popup like half of the screen with the store info*/}
              <Text style={{left: wp('5%'), top: hp('12%'), fontSize: wp('5%'), fontFamily: 'Montserrat_700Bold'}}>Store Info</Text>
                <Text style={{left: wp('5%'), top: hp('13%'), fontSize: wp('3%'), fontFamily: 'Montserrat_700Bold'}}>Address</Text>
                <Text style={{left: wp('5%'), top: hp('13%'), fontSize: wp('3%'), fontFamily: 'Montserrat_300Light'}}>1234 Street Name</Text>
                <Text style={{left: wp('5%'), top: hp('13%'), fontSize: wp('3%'), fontFamily: 'Montserrat_700Bold'}}>Hours</Text>
                <Text style={{left: wp('5%'), top: hp('13%'), fontSize: wp('3%'), fontFamily: 'Montserrat_300Light'}}>Monday: 9:00 AM - 5:00 PM</Text>

              <TouchableWithoutFeedback onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    onClose();
                    Alert.alert(
                        'Are you sure you want to join this store?',
                        'You will be able to earn points and redeem rewards!',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => {
                                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
                                },
                                style: 'cancel'
                            },
                            { text: 'OK', onPress: () => { Alert.alert('Success', 'Successfully joined the store, you can now earn rewards!')
                                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
                            }}
                        ],
                        { cancelable: false }
                    )
              }} >
              <View style={{backgroundColor: '#1f52fc', width: wp('50%'), height: hp('5%'), top: hp('15%'), left: wp('25%'), borderRadius: wp('3%'), shadowColor: '#5e7ffc', shadowOffset: {
                      width: 3,
                      height: 3,
                  },
                  shadowOpacity: 0.50,
                  shadowRadius: 3.84,
                  elevation: 5}}>
                  <Text style={{color: 'white', fontSize: wp('3%'), fontFamily: 'Montserrat_700Bold', textAlign: 'center', top: hp('1.25%')}}>Join Store</Text>

              </View>
              </TouchableWithoutFeedback>
=======
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
>>>>>>> 6367169eaa831f7f8fc03d7771787f6bc70d23cc
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default StorePopup;
