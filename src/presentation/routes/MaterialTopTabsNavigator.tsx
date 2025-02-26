import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AboutScree from '../screens/about/AboutScree';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import HomeScreen from '../screens/home/HomeScreen';
import { StackNavigator } from './StackNavigator';

export const MaterialTopTabsNavigator = () => {

  const Tab = createMaterialTopTabNavigator();
  // render
  return (
    <>
    <HamburgerMenu/>
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScree} />
    </Tab.Navigator>
    </>
  );
};
