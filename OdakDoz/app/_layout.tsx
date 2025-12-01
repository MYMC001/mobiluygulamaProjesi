import { Stack } from 'expo-router';



export default function RootLayout() {
   const is_loggedIn =true;

   return (
      <Stack >
        {is_loggedIn ? <Stack.Screen name="(tabs)" options={{ headerShown: false }} />  : <Stack.Screen name="(auth)" options={{ headerShown: false }} /> 
    }
      </Stack>
   );
}  
