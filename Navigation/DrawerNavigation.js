import React from "react";
import invariant from 'fbjs/lib/invariant';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import CreatePost from "../screens/CreatePost";
import Feed from "../screens/Feed";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component={ TabNavigator }></Drawer.Screen>
            <Drawer.Screen name = "Profile" component={ Profile }></Drawer.Screen>
            <Drawer.Screen name = "CreatePost" component={ CreatePost }></Drawer.Screen>
            <Drawer.Screen name=""></Drawer.Screen>

        </Drawer.Navigator>
    )
}