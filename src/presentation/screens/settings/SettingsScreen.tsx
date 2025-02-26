import { View, Text } from 'react-native'
import { globalSyles } from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { DrawerActions, StackActions, useNavigation } from '@react-navigation/native';
const SettingsScreen = () => {
  const navigation=useNavigation();
  
  return (
    <View style={globalSyles.container} >
      <Text style={{marginBottom:10}}  >Settings Screen</Text>
      <PrimaryButton label='Regresar' onPress={()=>navigation.goBack()}/>
      <PrimaryButton label='Ir Home' onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}/>
    </View>
  )
}
export default SettingsScreen