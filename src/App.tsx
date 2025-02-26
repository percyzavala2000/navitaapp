// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import SideMenuNavigator from './presentation/routes/SideMenuNavigator';
const App = () => {
  return (
    
    
      <NavigationContainer >
       {/*  <StackNavigator/> */}
       <SideMenuNavigator/>
      </NavigationContainer>
   
  )
}
export default App
