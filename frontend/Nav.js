// PersistentBottomBar.js
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedbackBase,
    TouchableWithoutFeedback
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ExpoHaptics from "expo-haptics/src/ExpoHaptics";
import * as Haptics from "expo-haptics";

const navbar = ({ onPressButton }) => {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: hp('-4%'),
                left: 0,
                right: 0,
                backgroundColor: '#F5F5F5',
                height: hp('9%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                alignItems: 'center',
                shadowColor: '#186FF2',
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.34,
                shadowRadius: 22,
                elevation: 5,
                borderRadius: wp('5%')
            }}>
            <TouchableWithoutFeedback onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}>
            <View style={{ width: wp('7%'), height: hp('5%'), left: wp('4%') }}>
                <Image source={require('./assets/home.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}>
            <View style={{ width: wp('7%'), height: hp('5%'), left: wp('3%') }}>
                <Image source={require('./assets/ticket.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}>
            <View style={{ width: wp('12%'), height: hp('9%'), left: wp('-0.5%') }}>
                <Image source={require('./assets/qr.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}>
            <View style={{ width: wp('7%'), height: hp('5%'), left: wp('-2%') }}>
                <Image source={require('./assets/heart.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}>
            <View style={{ width: wp('7%'), height: hp('5%'), left: wp('-3%') }}>
                <Image source={require('./assets/user.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default navbar;
