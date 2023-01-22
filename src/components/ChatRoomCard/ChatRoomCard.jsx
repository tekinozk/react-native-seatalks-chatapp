import React from 'react'
import {Text,View,TouchableWithoutFeedback} from "react-native"
import styles from "./ChatRoomCard.style"
import {formatDistance,parseISO,subDays} from "date-fns"

function MessageCard({chatroom,handleChat }) {


  return (

<TouchableWithoutFeedback onPress={handleChat}>
 <View style={styles.container} >
  
    <Text style={styles.date}  >{chatroom.date}</Text>
    <Text style={styles.text}   >{chatroom.chatRoomName}</Text>
    <Text style={styles.username}   >{chatroom.username}</Text>

   
 </View>
</TouchableWithoutFeedback>
  )
}

export default MessageCard