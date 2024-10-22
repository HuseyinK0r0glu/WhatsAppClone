import { useState } from 'react';
import { useRouter } from 'expo-router';
import {View,KeyboardAvoidingView,Platform,Text,Linking,StyleSheet} from 'react-native';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
    const [loading,setLoading] = useState(false);
    const [phoneNumber,setPhoneNumber] = useState('');
    const router = useRouter();
    const keyBoardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

    const openLink = () => {
        Linking.openURL("https://www.whatsapp.com/legal/#privacy-policy");
    };

    const sendOTP = async () => {

    };

    const trySignIn = async () => {

    };

    return ( 
        <KeyboardAvoidingView style = {{flex : 1}}>
            <View style = {styles.container}> 
                <Text style = {styles.description}>
                    Whatsapp will need to verify your account. Carrier charges may apply.
                </Text>

                <View style = {styles.list}>
                    <View style = {styles.listItem}>
                        <Text style = {styles.listItem}>Germany</Text>
                        <Ionicons name = "chevron-forward" size = {20} color = {Colors.gray }></Ionicons>
                    </View>
                    <View style = {styles.seperator}></View>
                </View>

                <Text style = {styles.legal}>
                    You must be{' '}
                    <Text style = {styles.link} onPress={openLink}>
                        at least 16 years old
                    </Text>{' '}
                    to register. Learn how WhatsApp works with the{' '}
                    <Text style = {styles.link} onPress={openLink}>
                        Meta Companies
                    </Text>
                </Text>

            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        alignItems : 'center',
        padding : 20,
        backgroundColor : Colors.background,
        gap : 20,
    },
    description : {
        fontSize : 14,
        color : Colors.gray,
    },
    list : {
        backgroundColor : '#fff',
        width : '100%',
        borderRadius : 10,
        padding : 10,
    },
    listItem : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 6,
        marginBottom : 10,
    },
    seperator : {
        width : '100%',
        height : StyleSheet.hairlineWidth,
        backgroundColor : Colors.gray,
        opacity : 0.3,
    },
    link : {
        color : Colors.primary,
    },
    legal: {
        fontSize: 12,
        textAlign: 'center',
        color: '#000',
    },
});

export default Page;