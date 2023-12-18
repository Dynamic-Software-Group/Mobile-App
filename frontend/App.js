import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';
import {SearchOutlined} from "@ant-design/icons";

export default function App() {
    const [fontsLoaded] = useFonts({
        'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    });

    return (
    <View>
        <Text style={{left: wp('3%'), top: hp('2%'), fontFamily: "Montserrat", fontSize: 14, fontStyle: 'normal'}}>Explore Stores</Text>
        <Text style={{left: wp('3%'), top: hp('1.5%'), fontWeight: 'medium', fontSize: 32}}>Near You</Text>
        <View style={{left: wp('2.5%'), right: wp('2.5%'), top: hp('2%'), backgroundColor: '#D9D9D9', height: hp('0.4%'), width: wp('95%')}}></View>
        <View style={{left: wp('4%'), right: wp('4%'), backgroundColor: '#F3F8FE', height: hp('5%'), top: hp('3%'), width: wp('92%'), borderRadius: wp('3.5%'), display: 'flex', justifyContent: 'center'}}>
            {/*<SearchOutlined style={{}} />*/}
            <Text style={{color: 'gray', marginLeft: '10px'}}>Find stores</Text>
        </View>
        <View>
            <View style={{top: hp('3%'), left: wp('4%'), display: 'flex'}}>
                <View style={{top: hp('10%'), left: wp('4%'), width: wp('33%'), height: hp('7%'), backgroundColor: 'blue'}}>

                </View>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
