import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigate } from './routes';
import Logo from '../my-first-app/img/logo.png'; // Verifique o caminho correto
import { CORES } from './src/constants/cores';
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Logo} style={{ width: 330, height: 200, marginBottom: 50, marginLeft: 8 }} />
        <ActivityIndicator size="large" color={CORES.COR_PRIMARIA} />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StackNavigate />
    </NavigationContainer>
  );
}