import {View , Text , StyleSheet , Image, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import welcomeImage from '@/assets/images/welcome.png';
import Colors from '@/constants/Colors';
const welcome_image =  Image.resolveAssetSource(welcomeImage).uri;

const Page = () => {
  
    const openLink = () => {

    };

    return (
        // View like a div in HTML
        // {} allows us to pass JavaScript objects 
        // replace int Link determines how navigation behaves
        // when replace is true that means we won't be able to go back
        // asChild effectively makes the child component behave like a link itself
        <View style = {styles.conainer}>
            <Image source={{uri : welcome_image }} style = {styles.welcome}></Image>
            <Text style = {styles.headline} > Welcome to WhatsApp Clone</Text>  
            <Text style = {styles.description}>
                Read our {' '}
                <Text style = {styles.link} onPress={openLink}>
                    Privacy Policy
                </Text>
                . {'Tap "Agree & Continue" to accept the '}
                <Text style = {styles.link} onPress={openLink}>
                    Terms of Service 
                </Text>
                .
            </Text>            
            <Link href={'/otp'} replace asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Agree & Continue</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

// StyleSheet is similar to CSS
const styles = StyleSheet.create({
    conainer : {
        flex : 1,
        padding : 20,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#fff',
    },
    welcome : {
        width : '100%',
        height : 300,
        marginBottom : 80,

    },
    headline : {
        fontSize : 24,
        fontWeight : 'bold',
        marginVertical : 20,
    },
    description : {
        fontSize : 14,
        textAlign : 'center',
        marginBottom : 80,
        color : Colors.gray,
    },
    link : {
        color : Colors.primary,
    },
    button : {
        width : '100%',
        alignItems : 'center',
    },
    buttonText : {
        fontSize : 22,
        color : Colors.primary,
        fontWeight : 'bold',
    }
});

export default Page