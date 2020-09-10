import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Default from '../pages/Default';

const Stack = createStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="SignIn">
            <Stack.Screen options={{ headerShown: false }} name="Default" component={Default} />
        </Stack.Navigator>
    );
}

export default AuthRoutes;