import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import Principal from './src/Principal';
import Sobre from './src/Sobre';
import User from './src/User';

const Drawer = createDrawerNavigator();

export default function Menu(){
    return(
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Principal"
                drawerStyle={{
                    backgroundColor: "#313131",
                    paddingVertical: 20,
                }}
            >
                <Drawer.Screen name="Principal" component={Principal}/>
                <Drawer.Screen name="User" component={User}/>
                <Drawer.Screen name="Sobre" component={Sobre}/>
                <Drawer.Screen name="Configuracoes" component={Configuracoes}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}