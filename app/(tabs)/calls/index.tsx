import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { SegmentedControl } from '@/components/SegmentedControl';
import Animated ,{FadeInUp,FadeOutUp} from 'react-native-reanimated';
import {View,Text,ScrollView, TouchableOpacity,StyleSheet,Image} from 'react-native';
import calls from '@/assets/data/calls.json'
import { FlatList } from 'react-native-gesture-handler';
import { defaultStyles } from '@/constants/styles';
import { format } from 'date-fns';
import SwipeableRow from '@/components/SwipeableRow';


const Page = () => {

    const [isEditing,setIsEditing] = useState(false);
    const [items,setItems] = useState(calls);
    const [selectedOption,setSelectedOption] = useState('All');

    const onEdit = () => {
        let editingNew = !isEditing;
        setIsEditing(editingNew);
    };

    useEffect(() => {
        if(selectedOption === 'All'){
            setItems(calls);
        }else {
            setItems(calls.filter((item) => item.missed))
        }
    },[selectedOption]);

    return (
        <View style = {{flex : 1,backgroundColor : Colors.background}}>
            <Stack.Screen 
                options = {{
                    headerTitle: () => (
                        <SegmentedControl options={['All','Missed']} selectedOption={selectedOption} onOptionPress={setSelectedOption}/>
                    ),
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
            <ScrollView contentInsetAdjustmentBehavior='automatic' contentContainerStyle = {{paddingBottom:40}}>
                <View style={defaultStyles.block}>
                    <FlatList data = {items} scrollEnabled = {false} keyExtractor={(item) => item.id.toString()} 
                    ItemSeparatorComponent={() => <View style={defaultStyles.separator}/>}
                    renderItem={({item,index}) => (
                        <SwipeableRow>
                            <Animated.View entering = {FadeInUp.delay(index * 10)} exiting={FadeOutUp}>
                                <View style={defaultStyles.item}>
                                    <Image source={{ uri: item.img }} style={styles.avatar} />

                                    <View style={{ flex: 1, gap: 2 }}>
                                        <Text style={{ fontSize: 18, color: item.missed ? Colors.red : '#000' }}>
                                            {item.name}
                                        </Text>

                                        <View style={{ flexDirection: 'row', gap: 4 }}>
                                            <Ionicons
                                                name={item.video ? 'videocam' : 'call'}
                                                size={16}
                                                color={Colors.gray} />
                                            <Text style={{ color: Colors.gray }}>
                                                {item.incoming ? 'Incoming' : 'Outgoing'}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                        <Text style={{ color: Colors.gray }}>
                                            {format(item.date, 'dd.MM.yy')}
                                        </Text>

                                        <Ionicons
                                            name="information-circle-outline"
                                            size={24}
                                            color={Colors.primary} />

                                    </View>

                                </View>
                            </Animated.View>
                        </SwipeableRow>
                    )}/>
                </View>
            </ScrollView>
        </View>   
    );
};

const styles = StyleSheet.create({
    avatar : {
      width : 40,
      height : 40,
      borderRadius : 20,
    },
});


export default Page;
