import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({



container:{
    flex: 1,
    //backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40
},

content:{
    flex:1,
    

},

banner:{

    width: '100%',
    resizeMode: 'contain'
},

stagram:{
    width: '100%',
    resizeMode: 'contain',
    marginTop:60,
},

arrow:{
    width: '100%',
    resizeMode: 'contain',
    marginTop:10,
},

title:{
    fontFamily: 'Poopins_400Regular',
    color:'#daa520',
    fontSize: 25,
    lineHeight: 30,
    marginTop: 80,
    fontWeight:'900',
    textAlign:"center"
    

},

titleBold:{
    fontFamily: 'Poppins_600semiBold',
    color:'#fff',
    textAlign:"center",
    fontSize: 35,
    fontWeight:'900',
},

paragraf:{
  color:"#fff",
  fontSize: 15,
  textAlign:"center",
},

buttonsContainer:{
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    marginLeft:60,
    width:100,
    

},

button:{
    height: 100,
    width: '150%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent:'center',
    //textAlign:"center",

},

inputo:{
    marginTop: 100,
    //width: '150%',
    color: '#fff',
    //borderRadius: 8,
    //padding: 24,
    //justifyContent:'center',
    //textAlign:"center",

},



buttonPrimary:{
    backgroundColor: '#9871f5'
},

buttonText:{
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20,
},

buttonSecondary:{
    backgroundColor: '#04d361'

},



});

export default styles;