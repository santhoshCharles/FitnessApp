import Activity from '../screens/Activity';
import Home from '../screens/Home'
import { createStackNavigator, createAppContainer } from "react-navigation";

const navigator = createStackNavigator(
   {
        HomeScreen: Home,
  
        HomeScreen: Activity
   
},
{
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
}
)
export default createAppContainer(navigator);
