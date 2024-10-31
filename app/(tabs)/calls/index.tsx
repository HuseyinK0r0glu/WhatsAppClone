import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Page = () => {

    const [isEditing,setIsEditing] = useState(false);
    const onEdit = () => {
        let editingNew = !isEditing;
        setIsEditing(editingNew);
    };

    return (
        <View>
            <Stack.Screen options = {{
                headerLeft : () => {
                    return (
                        <TouchableOpacity>
                            <Text style = {{color : Colors.primary,fontSize : 18}}>
                                {isEditing ? 'Done' : 'Edit'}
                            </Text>
                        </TouchableOpacity>
                    )
                },
            }}/>
        </View>   
    )
}

export default Page;
