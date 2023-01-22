import {StyleSheet} from "react-native"

export default StyleSheet.create({
    container:{ backgroundColor:"#cfd8dc",
    flex:1,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    
    elevation: 18,
margin:10,
padding:18,
borderBottomStartRadius:10,
borderBottomEndRadius:10,
borderWidth:1,
},
date:{

    textAlign:"left",
    marginBottom:10,
},
text:{
    fontSize:22,
    marginTop:10,  
    marginLeft:15,
},
username:{
    fontStyle:"italic",
    margin:18,
    textAlign:"right",
    textTransform:"capitalize"

},


})