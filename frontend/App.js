import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_300Light_Italic,
  Montserrat_200ExtraLight,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_800ExtraBold,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_900Black_Italic,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { useState } from "react";
import Popup from "./StoreInfo";
import StoreCard from "./StoreCard";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Nav from "./Nav";


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_900Black,
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_300Light_Italic,
    Montserrat_200ExtraLight,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_800ExtraBold,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_900Black_Italic,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_700Bold_Italic,
  });

  const [isPopupVisible, setPopupVisible] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    setScrollPosition(y);
  };


  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: 'never' }}>
         <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} onScroll={handleScroll} scrollEventThrottle={16}>
                <View>
                    <Text style={{left: wp('5%'), top: hp('2%'), fontFamily: "Montserrat_300Light", fontSize: wp('4.25%'), fontStyle: 'normal'}}>Explore Stores</Text>
                    <Text style={{left: wp('4.5%'), top: hp('1.75%'), fontFamily: "Montserrat_400Regular", fontWeight: 400, fontSize: wp('9%')}}>Near You</Text>
                    <View style={{left: wp('2.5%'), right: wp('2.5%'), top: hp('2%'), backgroundColor: '#D9D9D9', height: hp('0.4%'), width: wp('95%')}} />
                    <View style={{left: wp('4%'), right: wp('4%'), backgroundColor: '#F3F8FE', height: hp('5%'), top: hp('4%'), width: wp('92%'), borderRadius: wp('3.5%'), display: 'flex',  alignItems: 'center', flexDirection: 'row'}}>
                        <AntDesign name="search1" size={wp('4%')} color="black" style={{left: wp('3%'), color: '#B8B8B8'}} />
                        <Text style={{ left: wp('5%'), color: '#B8B8B8', fontSize: wp('4%')}}>Find stores...</Text>
                    </View>
                    {/* Filter switcher */}
                    <View>
                        <View style={{top: hp('7%'), left: wp('4%'), display: 'flex', flexDirection: 'row', width: wp('70%'), justifyContent: 'center'}}>
                            <View style={{top: hp('1.5%'), left: wp('10%'), height: hp('4%'), backgroundColor: '#f2f6fb', borderRadius: wp('4%'), width: wp('25%'), display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
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
                            <Text style={{left: wp('4.5%'), fontSize: wp('5%'), fontFamily: 'Montserrat_700Bold'}}>Your Points</Text>
                            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('./assets/no_stores_found.png')} resizeMethod={'resize'} style={{transform: 'scale(0.7)'}} />
                            </View>
                            <Text style={{left: wp('24%'), top: hp('-4%'), fontSize: wp('5%'), fontWeight: 'bold', fontFamily: 'Montserrat_700Bold'}}>No points found</Text>
                            <Text style={{paddingLeft: wp('2.5%'), paddingRight: wp('2.5%'), top: hp('-3%'), fontSize: wp('4%'), fontFamily: 'Montserrat_400Regular', textAlign: 'center'}}>You have no points yet. Start shopping to earn points!</Text>
                        </View>
                    </View>
                    {/* Stores section */}
                    <View style={{top: hp('15%')}}>
                        <Text style={{left: wp('4.5%'), fontSize: wp('5%'), fontFamily: 'Montserrat_700Bold'}}>Near You</Text>
                        <StoreCard />
                    </View>
                    <Popup visible={isPopupVisible} onClose={togglePopup} />
                </View>
            <View style={{height: hp('25%')}} />
        </ScrollView>
        <Nav />
        </View>
        </SafeAreaView>


    );
}