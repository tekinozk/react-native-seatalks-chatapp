import {StyleSheet,Dimensions} from "react-native"




const deviceSize = Dimensions.get("window").height

export default StyleSheet.create({
    container:{backgroundColor:"white",
    padding:15,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    marginHorizontal:10, 
    height:deviceSize/3},



    modal:{justifyContent:"flex-end",
    margin:0,},
})