import styles from "./Login.style"
import {React,useState} from 'react'
import {Text,View} from "react-native"
import Input from "../../../components/Input/input"
import Button from "../../../components/Button/Button"
import { Formik } from "formik"
import auth from "@react-native-firebase/auth"
import { showMessage} from "react-native-flash-message";
import AuthErrorMessageParser from "../../../utils/AuthErrorMessageParser"

function Login({navigation}) {
const [loading,setLoading] = useState(false)
const initialFormValues = {

  usermail:"",
  password:"",

}

const handleSignUp = () => {
  navigation.navigate("SignPage")
}

const handleFormSubmit = async (formValues) => {
try {
  setLoading(true)
  await auth().signInWithEmailAndPassword(formValues.usermail,formValues.password)
 
  setLoading(false)
} catch (error) {
  setLoading(false)
  showMessage({message:AuthErrorMessageParser(error.code),type:"warning"})
}




}



  return (
<View style={styles.container} >
    <Text style={styles.header} >Sea Talks</Text>

<Formik
initialValues={initialFormValues}
onSubmit={handleFormSubmit}
>
  {({values,handleChange,handleSubmit}) =>

    <>
    <Input  value={values.usermail} onChangeText={handleChange("usermail")} placeholder="e-postanızı giriniz... "/>
    <Input   value={values.password}  onChangeText={handleChange("password")} isSecure={true}  placeholder="Şifrenizi giriniz... "/>
    <Button text={"GİRİŞ YAP"} loading={loading} onPress={handleSubmit}  /> 
  </>
  }
</Formik>
  <Button  theme="secondary" text={"KAYIT OL"} onPress={handleSignUp}   />
   </View>
  )
}

export default Login