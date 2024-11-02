import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { View , Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen 
                name = "index" 
                options={{ 
                    title : 'Calls', 
                    // these are for IOS
                    // headerLargeTitle : true,headerLargeTitleShadowVisible : false,
                    // headerBlurEffect : 'regular',
                    headerStyle : {backgroundColor : Colors.background},
                    headerSearchBarOptions : {
                        placeholder : 'Search',
                    },
                    headerRight : () => {
                        return (
                            <TouchableOpacity>
                                <Ionicons name="call-outline" color={Colors.primary} size = {30}/>
                            </TouchableOpacity>
                        )
                    },
                }} />
        </Stack>
    )
}

export default Layout
