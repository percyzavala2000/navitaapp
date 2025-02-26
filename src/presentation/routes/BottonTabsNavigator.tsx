import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import { MaterialTopTabsNavigator } from './MaterialTopTabsNavigator';
import { StackNavigator } from './StackNavigator';

export const BottonTabsNavigator = () => {
  const Tab = createBottomTabNavigator();
  // render
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle: {backgroundColor: globalColors.background},
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon(props) {
            return <Text style={{color: props.color}}>Tab1</Text>;
          },
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon(props) {
            return <Text style={{color: props.color}}>Tab2</Text>;
          },
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon(props) {
            return <Text style={{color: props.color}}>Tab3</Text>;
          },
        }}
        component={MaterialTopTabsNavigator}
      />
    </Tab.Navigator>
  );
};
