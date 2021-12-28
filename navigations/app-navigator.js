import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../scenes/home/home'
import Header from '../components/atoms/header/header';
import CategoryDetails from '../scenes/category-details/category-details';
import ProductDetails from '../scenes/product-details/product-details';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    const [categoryName, setCategoryName] = useState('')
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerTitle: (props) => <Header color="black" showDrawer={true} /> }}
                />
                <Stack.Screen
                    name="Category"
                    options={{ headerTitle: (props) => <Header color="#F0F0F0" showDrawer={false} categoryName={categoryName} />, headerTransparent: true, headerTintColor: '#F0F0F0' }}>
                    {props => <CategoryDetails {...props} setCategoryName={setCategoryName} />}
                </Stack.Screen>
                <Stack.Screen
                    name="Product"
                    component={ProductDetails}
                    options={{ headerTitle: (props) => <Header color="black" categoryName={''} /> }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;