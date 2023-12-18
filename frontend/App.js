import { StatusBar } from 'expo-status-bar';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    });

    return (
        <SafeAreaView>
            <View>
                <Text style={{left: wp('3%'), top: hp('2%'), fontFamily: "Montserrat", fontSize: wp('4.25%'), fontStyle: 'normal'}}>Explore Stores</Text>
                <Text style={{left: wp('3%'), top: hp('1.75%'), fontFamily: "Montserrat", fontStyle: 'normal', fontWeight: 'bold', fontSize: wp('9%')}}>Near You</Text>
                <View style={{left: wp('2.5%'), right: wp('2.5%'), top: hp('2%'), backgroundColor: '#D9D9D9', height: hp('0.4%'), width: wp('95%')}}></View>
                <View style={{left: wp('4%'), right: wp('4%'), backgroundColor: '#F3F8FE', height: hp('5%'), top: hp('4%'), width: wp('92%'), borderRadius: wp('3.5%'), display: 'flex',  alignItems: 'center', flexDirection: 'row'}}>
                    <AntDesign name="search1" size={wp('4%')} color="black" style={{left: wp('3%'), color: '#B8B8B8'}} />
                    <Text style={{ left: wp('5%'), color: '#B8B8B8', fontSize: wp('4%')}}>Find stores...</Text>
                </View>
                {/* Filter switcher */}
                <View>
                    <View style={{top: hp('7%'), left: wp('4%'), display: 'flex', flexDirection: 'row', width: wp('70%'), justifyContent: 'center'}}>
                        <View style={{top: hp('1.5%'), left: wp('10%'), height: hp('4%'), backgroundColor: '#f2f6fb', borderRadius: wp('4%'), width: wp('20%'), display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ color: '#176FF2', fontSize: wp('3.5%')}}>Location</Text>
                        </View>
                        <View style={{top: hp('1.5%'), left: wp('10%'), height: hp('4%'),  borderRadius: wp('4%'), width: wp('18%'), display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'gray'}}>Type</Text>
                        </View>
                        <View style={{top: hp('1.5%'), left: wp('10%'), height: hp('4%'), borderRadius: wp('4%'), width: wp('18%'), display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'gray'}}>Food</Text>
                        </View>
                    </View>
                </View>
                {/* Points section */}
                <View style={{top: hp('13%')}}>
                    <View style={{}}>
                        <Text style={{left: wp('4.5%'), fontSize: wp('5%'), fontFamily: 'Montserrat'}}>Your Points</Text>
                        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('./assets/no_stores_found.png')} resizeMethod={'resize'} style={{transform: 'scale(0.7)', left: wp('7%')}}></Image>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
