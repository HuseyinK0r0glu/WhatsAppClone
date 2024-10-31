import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import {View,Text} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Page = () => {

    const [isEditing,setIsEditing] = useState(false);
    const onEdit = () => {
        let editingNew = !isEditing;
        setIsEditing(editingNew);
    };

    return (
        <View style = {{flex : 1,backgroundColor : Colors.background}}>
            <Stack.Screen 
                options = {{
                    headerLeft : () => {
                        return (
                            <TouchableOpacity>
                                <Text style = {{color : Colors.primary,fontSize : 18}}>
                                    {isEditing ? 'Done' : 'Edit'}
                                </Text>
                            </TouchableOpacity>
                        )
                    },
                }}
            />
            <ScrollView contentInsetAdjustmentBehavior='automatic'>

            </ScrollView>
        </View>   
    )
}

export default Page;
