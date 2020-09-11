import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../pages/Register';

const Stack = createStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="SignIn">
            <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        </Stack.Navigator>
    );
}

export default AuthRoutes;