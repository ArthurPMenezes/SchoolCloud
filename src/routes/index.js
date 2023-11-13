import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SigIn from '../pages/SignIn'
import Register from '../pages/register'
import ScreenOne from "../pages/ScreenOne"
import ScreenThree from '../pages/ScreenThree'
import ScreenTwo from '../pages/ScreenTwo'


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

            <Stack.Screen
            name='ScreenOne'
            component={ScreenOne}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='ScreenTwo'
            component={ScreenTwo}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='ScreenThree'
            component={ScreenThree}
            options={{headerShown: false}}
            />
            
        </Stack.Navigator>
    )
}