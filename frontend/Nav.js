// PersistentBottomBar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const navbar = ({ onPressButton }) => {
    return (
        <View
          style={{
            position: 'absolute',
            bottom: -5,
            left: 0,
            right: 0,
            backgroundColor: '#1f52fc',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>
            Persistent Bottom Bar
          </Text>
          <TouchableOpacity onPress={onPressButton}>
            <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>
              Action
            </Text>
          </TouchableOpacity>
        </View>
      );
    };

export default navbar;
