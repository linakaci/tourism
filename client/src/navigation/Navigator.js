import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Home';
import Activites from '../Activites';
import Hotels from '../Hotels';
import Restaurants from '../Restaurants';

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Activites:{screen:Activites},
    Hotels:{screen:Hotels},
    Restaurants:{screen:Restaurants},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);