 import { Tabs } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';
import {Stack} from "expo-router";


const Auth_layout=()=>{




    return (

        <Stack>

       
            <Stack.Screen 
            name="SignUp"
            options={{
                title:"SignUp",
                headerShown:false
            }}/>

              <Stack.Screen  
                  name="Login"
                 options={{
                    title:"Login",
                    headerShown:false,

             }}
          />
        </Stack>
        

    )
}


export default Auth_layout