import {Text, useWindowDimensions, View} from 'react-native';
import {
  createDrawerNavigator,
   DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import { BottonTabsNavigator } from './BottonTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

const SideMenuNavigator = () => {
  const dimensions=useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: (dimensions.width>=768)?'permanent':'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen options={{drawerIcon(props) {
        return <IonIcon name='home-outline' color={props.color}/>;
      },}} name="Tabs" component={BottonTabsNavigator} />
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen options={{drawerIcon(props) {
        return <IonIcon name='people-outline' color={props.color}/>;
      },}} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
export default SideMenuNavigator;

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
      <Text> Desde Custom Drawer Content</Text>
    </DrawerContentScrollView>
  );
};
