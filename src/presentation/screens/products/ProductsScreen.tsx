import {View, Text, FlatList} from 'react-native';
import {globalSyles} from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {type NavigationProp, useNavigation } from '@react-navigation/native';
import {type RootStackParams } from '../../routes/StackNavigator';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
  },
];
const ProductsScreen = () => {

  const navigation=useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalSyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Producto</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton label={item.name} onPress={() => navigation.navigate('Producto' ,{Id:item.id,name:item.name,price:item.price})} />
        )}
  
      />
      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>
      <PrimaryButton label='Ajustes' onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};
export default ProductsScreen;
