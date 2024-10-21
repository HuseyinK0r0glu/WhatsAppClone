import {View , Text , StyleSheet , Image } from 'react-native';
import welcomeImage from '@/assets/images/welcome.png';
import Colors from '@/constants/Colors';
const welcome_image =  Image.resolveAssetSource(welcomeImage).uri;

const Page = () => {
    return (
        // View like a div in HTML
        // {} allows us to pass JavaScript objects 
        <View style = {styles.conainer}>
            <Image source={{uri : welcome_image }} style = {styles.welcome}></Image>
            <Text style = {styles.headline} > Welcome to WhatsApp Clone</Text>
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

    },
    link : {
        color : Colors.gray,
    },
});

export default Page