import { View, Text } from 'react-native'
import { globalSyles } from '../../theme/theme';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';

const ProductoScreen = () => {

  const {params}=useRoute<RouteProp<RootStackParams, 'Producto'>>();
  const navigation=useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title:params.name
    })
  
  }, [])
  return (
    <View style={globalSyles.container}>
      <Text style={{fontSize:20,textAlign:'center',marginTop:20}} >{params.Id}-{params.name}-{params.price} </Text>
    </View>
  )
}
export default ProductoScreen