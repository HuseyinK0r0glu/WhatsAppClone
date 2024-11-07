import {View,Text, ScrollView, FlatList} from 'react-native';
import chats from '@/assets/data/chats.json'
import { defaultStyles } from '@/constants/styles';

const Page = () => {
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic' contentContainerStyle = {{paddingBottom:40}}>
            <FlatList 
                scrollEnabled = {false} 
                data = {chats} 
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => 
                    <View style = {[defaultStyles.separator]}/>
                }
                renderItem={({item}) => 
                    <Text>
                        {item.from}
                    </Text>}/>
        </ScrollView>   
    )
}

export default Page;
