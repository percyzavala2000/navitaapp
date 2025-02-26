import { View, Text, Pressable } from 'react-native'
import { globalSyles } from '../../theme/theme';

type PrimaryButtonProps={
  onPress:()=>void,
  label:string,
}
const PrimaryButton = ({onPress,label}:PrimaryButtonProps) => {
  return (
   
         <Pressable style={globalSyles.primaryButton} onPress={()=>onPress()} >
           <Text style={globalSyles.text} >{label}</Text>
         </Pressable>
       
  )
}
export default PrimaryButton