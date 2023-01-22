import styles from "./Sign.style"
import React from 'react'
import {Text,View} from "react-native"
import Input from "../../../components/Input/input"
import Button from "../../../components/Button/Button"
import {Formik} from "formik"
import auth from "@react-native-firebase/auth"
import FlashMessage, { showMessage } from "react-native-flash-message";
import AuthErrorMessageParser from "../../../utils/AuthErrorMessageParser"



function Sign({navigation}) {
 
  const initialFormValues = {
    usermail:"",
    userpassword:"",
    userconfirm:"",
  }

  const handleLogin = () =>{
    navigation.navigate("LoginPage")
  }
const handleSubmit = async (formValues) =>{
  if(formValues.userpassword === formValues.userconfirm){

    try {
      await auth().createUserWithEmailAndPassword(formValues.usermail,formValues.userconfirm)
      showMessage({message:"Kullanıcı oluşturuldu",type:"success"})
      navigation.navigate("ChatRoomsPage")
    } catch (error) {
      showMessage({message:AuthErrorMessageParser(error.code),type:"danger"})
    }
  }else{
    showMessage({message:"Parolalar eşleşmiyor",type:"warning"})
  }

}





 
 



  return (
<View style={styles.container} >
    <Text style={styles.header} >Bana Ne?</Text>

  <Formik
  initialValues={initialFormValues}
  onSubmit={handleSubmit}
  >
      {({values,handleChange,handleSubmit}) =>

        <>
        <Input onChangeText={handleChange("usermail")} value={values.usermail}   placeholder="e-postanızı giriniz... "/>
        <Input onChangeText={handleChange("userpassword")} value={values.userpassword}  isSecure={true}  placeholder="Şifrenizi giriniz... "/>
        <Input onChangeText={handleChange("userconfirm")} value={values.userconfirm}  isSecure={true}  placeholder="Şifrenizi tekrar giriniz... "/>
        <Button text="KAYIT OL" onPress={handleSubmit} />
    </>  
      }
  </Formik>
  

  
    <Button theme="secondary" text="GERİ" onPress={handleLogin} />
   </View>
  )
}

export default Sign