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
import Popup from "./StoreInfo";
import { useState } from "react";


export default function StoreCard({ visible, onClose, store }) {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
      };
    return (
        <TouchableWithoutFeedback  style = {{width: wp('45%'), height: hp('17%')}} onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            togglePopup();
        }}>
            <View style={{
                left: wp('3.5%'),
                top: hp('2%'),
                backgroundColor: '#eceaea',
                height: hp('17%'),
                width: wp('45%'),
                borderRadius: wp('4%'),
                shadowColor: '#000',
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>
                <Image source={require('./assets/one.png')} style={{resizeMode: 'contain', left: wp('1.25%'), right: wp('1.25%'), top: hp('-2%'), width: '95%', height: '95%'}} />
                <Text style={{top: hp('-4.5%'), left: wp('1.25%'), fontFamily: 'Montserrat_400Regular'}}>Restaurant One</Text>
                <View style={{width: wp('10.5%'), height: hp('2.15%'), backgroundColor: '#3A544F', top: hp('-8.75%'), left: wp('30%'), borderRadius: wp('3%'), borderColor: '#FFFFFF', borderWidth: wp('0.7%')}}>
                    <Text style={{fontSize: wp('2%'), textAlign: 'center', fontFamily: 'Montserrat_300Light', color: 'white'}}>Food</Text>
                </View>
                <View style={{
                    color: 'black',
                    fontSize: wp('2.5%'),
                    width: wp('1%'),
                    height: hp('1%'),
                    top: hp('10%'),
                }}>
                        <Popup visible={isPopupVisible} onClose={togglePopup} />


                </View>
            </View>
        </TouchableWithoutFeedback >

        
    )
}


