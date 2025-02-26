import {View, Text, Pressable} from 'react-native';
import {globalSyles} from '../../theme/theme';
import {DrawerActions, NavigationProp, useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {useEffect} from 'react';
import { RootStackParams } from '../../routes/StackNavigator';
const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalSyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        label="Products"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Settings"
      />
    </View>
  );
};
export default HomeScreen;
