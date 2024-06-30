
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Perfil from "./src/screens/MeuPerfil";
import Notificacoes from "./src/screens/Notificacoes";
import shopCar from "./src/screens/Carrinho de Compras";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { SimpleLineIcons } from "@expo/vector-icons";
import { CORES } from "./src/constants/cores";
import Sobre from "./src/screens/Informações";
import Estrela from "./src/screens/Avaliações";


export const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={DrawerNavigate}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Perfil"
                component={DrawerNavigate}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

    )

}

export const TabNavigate = () => {
    return (

        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                    headerShown: true,
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarBadge: 3,
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: () => (
                        <SimpleLineIcons name="user" size={24} color="black" />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                }}
            />
            <Tab.Screen
                name="Produtos"
                component={Produtos}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="book" size={24} color="black" />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                }}
            />

        </Tab.Navigator>
    )
}
export const CustomDrawerContent = (props) => {
    return (
        <>
            <DrawerContentScrollView {...props}>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 30 }}>
                    <FontAwesome name="user-circle-o" size={150} color="#E6E6FA" />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#E6E6FA", marginTop: 20 }}>
                        João da Silva
                    </Text>
                </View>
                <View style={{ height: 2, width: '90%', backgroundColor: '#E6E6FA', alignSelf: 'center', marginBottom: 30 }} />
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </>
    );
};
const CustomHeaderTitle = () => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'baseline', }}>

            <Text style={{
                fontWeight: 'bold',
                fontSize: 25,
                color: CORES.COR_FUNDO_CLARO,
            }}>Olá,João da Silva!</Text>

            <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: CORES.COR_FUNDO_CLARO,
            }}>Home</Text>
            <TextInput keyboardType="default"
                style={{
                    marginTop: 2,
                    marginLeft: 5,
                    width: 250,
                    padding: 5,
                    backgroundColor: CORES.COR_FUNDO_CLARO,
                    borderRadius: 4,
                    borderColor: CORES.COR_FUNDO_CLARO,
                    borderWidth: 3,
                    flex: 5,
                }}
                placeholder="   Pesquisar..."
                placeholderTextColor={CORES.COR_PRIMARIA}

            />
        </View>
    );
};

export const DrawerNavigate = () => {
    return (

        <Drawer.Navigator initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: props => <CustomHeaderTitle {...props} />,
                    headerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA,
                        height: 120,
                    },

                    headerTintColor: CORES.COR_FUNDO_CLARO,
                    drawerActiveTintColor: 'black',
                    drawerActiveBackgroundColor: CORES.COR_FUNDO_CLARO,
                    drawerInactiveTintColor: 'white',
                    drawerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA,
                    },


                    drawerIcon: ({ focused }) => (
                        <SimpleLineIcons
                            name="home"
                            size={24}
                            color={focused ? 'black' : 'white'}
                        />
                    )

                }}
            />
            <Drawer.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTintColor: CORES.COR_FUNDO_CLARO,
                    drawerActiveTintColor: 'black',
                    drawerActiveBackgroundColor: CORES.COR_FUNDO_CLARO,
                    drawerInactiveTintColor: 'white',
                    drawerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA
                    },
                    drawerIcon: ({ focused }) => (
                        <SimpleLineIcons
                            name="user"
                            size={24}
                            color={focused ? 'black' : 'white'}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Notificações"
                component={Notificacoes}
                options={{
                    headerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTintColor: CORES.COR_FUNDO_CLARO,
                    drawerActiveTintColor: 'black',
                    drawerActiveBackgroundColor: CORES.COR_FUNDO_CLARO,
                    drawerInactiveTintColor: 'white',
                    drawerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA
                    },
                    drawerIcon: ({ focused }) => (
                        <Ionicons
                            name="notifications-outline"
                            size={28}
                            color={focused ? 'black' : 'white'}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="Meu carrinho"
                component={shopCar}
                options={{
                    headerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTintColor: CORES.COR_FUNDO_CLARO,
                    drawerActiveTintColor: 'black',
                    drawerActiveBackgroundColor: CORES.COR_FUNDO_CLARO,
                    drawerInactiveTintColor: 'white',
                    drawerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA
                    },
                    drawerIcon: ({ focused }) => (
                        <AntDesign
                            name="shoppingcart"
                            size={28}
                            color={focused ? 'black' : 'white'}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="Minhas Avaliações"
                component={Estrela}
                options={{
                    headerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTintColor: CORES.COR_FUNDO_CLARO,
                    drawerActiveTintColor: 'black',
                    drawerActiveBackgroundColor: CORES.COR_FUNDO_CLARO,
                    drawerInactiveTintColor: 'white',
                    drawerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA
                    },
                    drawerIcon: ({ focused }) => (
                        <AntDesign
                            name="staro"
                            size={28}
                            color={focused ? 'black' : 'white'}
                        />
                    )
                }}
            />


            <Drawer.Screen
                name="Sair"
                component={Login}
                options={{
                    headerShown: false,
                    drawerActiveTintColor: 'black',
                    drawerActiveBackgroundColor: CORES.COR_FUNDO_CLARO,
                    drawerInactiveTintColor: 'white',
                    drawerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA

                    },
                    drawerIcon: ({ focused }) => (
                        <Ionicons
                            name="exit-outline"
                            size={30}
                            color={focused ? 'black' : 'white'}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    headerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTintColor: CORES.COR_FUNDO_CLARO,
                    drawerActiveTintColor: 'black',
                    drawerActiveBackgroundColor: CORES.COR_FUNDO_CLARO,
                    drawerInactiveTintColor: 'white',
                    drawerStyle: {
                        backgroundColor: CORES.COR_PRIMARIA

                    },
                    drawerIcon: ({ focused }) => (
                        <Ionicons
                            name="information-circle-outline"
                            size={30}
                            color={focused ? 'black' : 'white'}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
};