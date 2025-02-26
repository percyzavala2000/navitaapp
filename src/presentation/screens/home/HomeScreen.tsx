import { View, Text, Pressable} from 'react-native'
import { globalSyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../../components/shared/PrimaryButton';
const HomeScreen = () => {

  const navigation=useNavigation();
  

  return (
    <View style={globalSyles.container}>
     <PrimaryButton onPress={()=>navigation.navigate('Products'as never)}label='Products'/>
     <PrimaryButton onPress={()=>navigation.navigate('Settings'as never)}label="Settings"/>
    </View>
  )
}
export default HomeScreen

