import { View, Text, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
const ProfileScreen = () => {
  const{top}=useSafeAreaInsets();
  const navigation=useNavigation<NavigationProp<RootStackParams>>();
  
  return (
    <View style={{flex:1,paddingHorizontal:20,marginTop:Platform.OS==='android'?top:top+20}}>
      <Text>ProfileScreen</Text>
      <PrimaryButton label='Abrir Menu' onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}/>
    </View>
  )
}
export default ProfileScreen