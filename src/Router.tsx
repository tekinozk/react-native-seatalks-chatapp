import { Text,View,Button } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Login from './pages/auth/Login'
import Sign from './pages/auth/Sign'
import FlashMessage from "react-native-flash-message";
import Messages from './pages/Messages'
import auth from "@react-native-firebase/auth" 
import {useState,useEffect} from "react"
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import ChatRooms from './pages/ChatRooms'


const Stack = createStackNavigator()

function Router() {
  const [userSession,setUserSession] = useState()
  useEffect(() => {
  auth().onAuthStateChanged(user=>{
    setUserSession(!!user)
  })
  }, [])




const AuthStack = () =>{
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}  >
    <Stack.Screen name='LoginPage' component={Login} />
    <Stack.Screen name='SignPage'  component={Sign} />
  </Stack.Navigator>

  )
}

const InsideStack = () =>{
  return(
  <Stack.Navigator>
    <Stack.Screen name='ChatRoomsPage' options={{headerShown:true,title:"Sohbet Odaları",headerTintColor:"grey"}} component={ChatRooms}/>  
    <Stack.Screen name='MessagePage'  options={{headerShown:true,title:"Sohbet",headerTintColor:"grey",headerRight:()=><Icon onPress={()=>auth().signOut()} name="logout" size={40} />}} component={Messages} />
  </Stack.Navigator>)
}


  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}}  >

{
  userSession?<Stack.Screen name='InsideStack' component={InsideStack}></Stack.Screen>
:
<Stack.Screen name='AuthStack' component={AuthStack} />
}



      </Stack.Navigator>
      <FlashMessage position="top" /> 
    </NavigationContainer>

  )
  
}

export default Router