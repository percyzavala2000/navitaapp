import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProductoScreen from '../screens/products/ProductoScreen';


export type RootStackParams = {
  Home:undefined,
  Products:undefined,
  Settings:undefined,
  Producto:{Id:number,name:string,price:number}
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:true,headerStyle:{
     elevation:0,
     shadowColor:'transparent'
    },presentation:'modal'} }>
      <Stack.Screen  name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} /> 
      <Stack.Screen name='Producto' component={ProductoScreen} />
    </Stack.Navigator>
  );
}