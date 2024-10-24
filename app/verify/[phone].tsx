import { useLocalSearchParams } from 'expo-router'
import {View ,Text} from 'react-native'
import { useState } from 'react';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

const Page = () => {
    const {phone,signin} = useLocalSearchParams<{phone : string,signin : string}>();
    const [code,setCode] = useState('');
    return  (
        <View>
            <Text>Page</Text>
        </View>
    )
}

export default Page