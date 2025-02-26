import { StyleSheet } from 'react-native';

export const globalColors={
  primary:'#7037eb',
  secondary:'#f72585',
  tertiary:'#3a0ca3',
  success:'#4cc9f0',
  warning:'#fca311',
  danger:'#e71d36',
  dark:'#22223b',
  background:'#ffffff',


}

export const globalSyles=StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:globalColors.background
  },
  primaryButton:{
    padding:10,
    backgroundColor:globalColors.primary,
    borderRadius:5,
    width:'100%',
    alignItems:'center',
    marginBottom:10,
    
  },
  text:{
    color:globalColors.background,
    fontSize:18,
  }

})