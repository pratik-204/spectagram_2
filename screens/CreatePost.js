import React from 'react';
import { Text , View } from  'react-native';
import invariant from 'fbjs/lib/invariant';

export default class CreatePost extends Components{
    render() {
        return(
            <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
             <Text> CreatePost </Text>
            </View>
        )
    }
}