import { useAuth } from '@clerk/clerk-expo';
import {View,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Page = () => {
    const devices = [
        {
          name: 'Broadcast Lists',
          icon: 'megaphone',
          backgroundColor: Colors.green,
        },
        {
          name: 'Starred Messages',
          icon: 'star',
          backgroundColor: Colors.yellow,
        },
        {
          name: 'Linked Devices',
          icon: 'laptop-outline',
          backgroundColor: Colors.green,
        },
      ];
    
    const items = [
        {
          name: 'Account',
          icon: 'key',
          backgroundColor: Colors.primary,
        },
        {
          name: 'Privacy',
          icon: 'lock-closed',
          backgroundColor: '#33A5D1',
        },
        {
          name: 'Chats',
          icon: 'logo-whatsapp',
          backgroundColor: Colors.green,
        },
        {
          name: 'Notifications',
          icon: 'notifications',
          backgroundColor: Colors.red,
        },
        {
          name: 'Storage and Data',
          icon: 'repeat',
          backgroundColor: Colors.green,
        },
    ];
    
    const support = [
        {
          name: 'Help',
          icon: 'information',
          backgroundColor: Colors.primary,
        },
        {
          name: 'Tell a Friend',
          icon: 'heart',
          backgroundColor: Colors.red,
        },
    ];

    const { signOut } = useAuth();

    return (
        <View>
            <Text>Settings</Text>
        </View>   
    )
}

export default Page;
