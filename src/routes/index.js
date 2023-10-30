import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SigIn from '../pages/SignIn'
import Register from '../pages/register'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="SignIn"
            component={SigIn}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false}}
            />

        </Stack.Navigator>
    )
}