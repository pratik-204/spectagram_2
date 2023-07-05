import React , { Components } from 'react';
import { Text ,view , Stylesheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { CreateBottomTabNavigator } from '@react-navigations/bottom-tabs';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import invariant from 'fbjs/lib/invariant';

const Tab = CreateBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
         <Tab.Navigator 
        screenOptions={({route})=> ({
            tabBarIcon: ({focused , color , size }) => {
                let iconName;
                if (route.name === 'Feed'){
                  iconName = focused
                    ? 'book'
                    : 'book_outline';
                }   
                else if( route.name === 'CreatePost') {
                    iconName = focused ? 'create' : 'create-Post'
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activateTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
          >
            <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
            <Tab.Screen name="CreateStory" component={CreateStory} options={{headerShown:false}}/>
         </Tab.Navigator>
       </NavigationContainer>
    )
}
export default BottomTabNavigator