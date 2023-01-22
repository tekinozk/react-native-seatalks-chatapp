import React from 'react'
import styles from "./ChatRooms.style"
import {View,Text,FlatList} from "react-native"
import FloatingButton from '../../components/FloatingButton'
import CreatChatRoom from '../../components/modal/CreateChatRoom/creatChatRoom'
import {useState,useEffect} from "react"
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import ChatRoomCard from '../../components/ChatRoomCard'
import parseContentData from '../../utils/parseContentData'
function ChatRooms({navigation}) {
const[list,setList] = useState([])
const[visible,setVisible] = useState(false)


useEffect(() => {
  database().ref("/chatrooms").on("value",snapshot=>{
    const chatRoomData = snapshot.val()
   const parsedChatRoom= parseContentData(chatRoomData) 
    setList(parsedChatRoom)

  })
}, [])



const handlePress = () => {
setVisible(true)
} 

const handleToggle = () => {
setVisible(!visible)
}

const handleCreateChatRoom = (text) =>{
const usermail = auth().currentUser.email

const chatRoom = {
    username : usermail.split("@")[0],
    chatRoomName:text,
    date:new Date().toISOString().replace(/T/,"  ").split(".")[0],}
database().ref("/chatrooms").push(chatRoom)
    handleToggle()
    console.log(chatRoom.date)
  };

  





const handleChat = (chatRoomName) => {
  navigation.navigate("MessagePage",{chatRoomName})
}

const renderChatRooms = ({item}) => { return <ChatRoomCard handleChat={()=>handleChat(item.chatRoomName)} chatroom={item}/>}



  return (

  
  
    <View style={styles.container}  >
     
        <View style={styles.flat}>
       <FlatList  numColumns={2} data={list} renderItem={renderChatRooms} />
        </View>
        <View style={styles.inner_container}>
        
<CreatChatRoom  isVisible={visible} onPress={handleCreateChatRoom} onClose={handleToggle} />
        </View>
        <View style={styles.float}>
        <FloatingButton icon="plus" onPress={handlePress}/>
        </View>
    </View>
 
  )
}

export default ChatRooms