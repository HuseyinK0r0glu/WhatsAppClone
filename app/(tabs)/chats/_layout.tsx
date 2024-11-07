import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import { View , Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Layout = () => (
    <Stack>
        <Stack.Screen
            name="index"
            options={{
                title: 'Chats',
                // these are for IOS
                // headerLargeTitle : true,headerLargeTitleShadowVisible : false,
                // headerBlurEffect : 'regular',
                headerStyle: { backgroundColor: '#fff'},
                headerSearchBarOptions: {
                    placeholder: 'Search',
                },

                headerLeft: () => {
                    return(
                        <TouchableOpacity>
                            <Ionicons
                                name = "ellipsis-horizontal-circle-outline"
                                color = {Colors.primary}
                                size = {30} 
                            />
                        </TouchableOpacity>
                    )
                },

                headerRight: () => {
                    return (
                        <View style = {{flexDirection:'row' , gap:30}}>
                            <TouchableOpacity>
                                <Ionicons name = "camera-outline" color = {Colors.primary} size={30}/>
                            </TouchableOpacity>
                            <Link href="/" asChild>
                                <TouchableOpacity>
                                    <Ionicons name = "add-circle" color = {Colors.primary} size = {30}/>
                                </TouchableOpacity>
                            </Link>
                        </View>
                    )
                },
            }} />
    </Stack>
)

export default Layout
