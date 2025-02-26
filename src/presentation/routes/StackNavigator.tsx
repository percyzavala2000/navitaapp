import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProductoScreen from '../screens/products/ProductoScreen';
import { useNavigation } from '@react-navigation/native';
import { use, useEffect } from 'react';


export type RootStackParams = {
  Home:undefined,
  Products:undefined,
  Settings:undefined,
  Producto:{Id:number,name:string,price:number}
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigation=useNavigation();

  useEffect(() => {
   navigation.setOptions({
    headerShown:false,
    
   })
  }, [])
  return (
    <Stack.Navigator screenOptions={{headerShown:true,headerStyle:{
     elevation:0,
     shadowColor:'transparent'
    }} }>
      <Stack.Screen  name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} /> 
      <Stack.Screen name='Producto' component={ProductoScreen} />
    </Stack.Navigator>
  );
}