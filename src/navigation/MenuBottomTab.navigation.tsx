import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenPage1, ScreenPage2 } from '../screens';
import { AntDesign } from '@expo/vector-icons';

type MenuTabParam = {
    Page1: undefined
    Page2: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Page1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ScreenPage1}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="home" size={24} color="black" /> 
                    )
                }}
            />
            <Tab.Screen name="Tarefas" component={ScreenPage2}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="calendar" size={24} color="black" />
                    )
                }}
            />    
        </Tab.Navigator>
    );
}