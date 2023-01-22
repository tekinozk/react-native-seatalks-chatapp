import React from 'react'
import Modal from "react-native-modal"
import {Text,View} from "react-native"
import Input from '../../Input/input'
import Button from '../../Button'
import styles from "./createChatRoom.style"


function CreatChatRoom({onClose,isVisible,onPress}) {

const [text,setText] = React.useState("")


const createChatRoom = ()=> {
if(!text){
    return false
}else{
    onPress(text)
    setText(null)
}
}

  return (
    <View>
        <Modal  style={styles.modal} isVisible={isVisible} onSwipeComplete={onClose} onBackdropPress={onClose} onBackButtonPress={onClose}>
        <View style={styles.container}>
     
          <Input  onChangeText={setText} placeholder={"Chat Room Name"}/>
          <Button onPress={createChatRoom} text={"Create Chat Room"}  />
        </View>
      </Modal>
    </View>
  )
}

export default CreatChatRoom