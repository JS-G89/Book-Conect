import React from 'react'
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, } from 'react-native';
import { CORES } from '../../constants/cores';
import { ImageBackground } from 'react-native-web';


const Livros = [
  {
    title: '"Era uma vez Dom Quixote"',
    image: require('../../../img/livro1.jpg'),
    autor: 'Autor: miguel de Cervantes',
    editora: 'Editora: Global',
    preco: '  R$ 39,90  ',
  },

  {
    title: '"A Droga da Obediência"',
    image: require('../../../img/livro2.webp'),
    autor: 'Autor: Pedro Bandeira',
    editora: 'Editora: Moderna',
    preco: '  R$ 49,90  ',
  },

  {
    title: '"Harry Potter e o Cálice de Fogo"',
    image: require('../../../img/livro3.jpg'),
    autor: 'Autor: J.K. Rowling',
    editora: 'Editora: Rocco',
    preco: '  R$ 109,90  ',
  },
  {
    title: '"Tinha tudo pra dar certo..."',
    image: require('../../../img/livro4.jpg'),
    autor: 'Autor: Rodrigo Fernandes',
    editora: 'Editora: Ativa',
    preco: '  R$ 89,00  ',

  },
  {
    title: '"Café com DEUS pai"',
    image: require('../../../img/livro5.webp'),
    autor: 'Autor: Junior Rostirola',
    editora: 'Editora: Editora Vida',
    preco: '  R$ 79,40  ',

  },

];

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  ...Livros[index],
});

const getItemCount = _data => 5;

const Item = ({ title, image, autor, editora, preco }) => (
  <View style={styles.item}>

    <Text style={styles.title}>{title}</Text>
    <ImageBackground source={image}
      style={{
        width: 150,
        height: 180,
        marginTop:5,
      }} />
    <Text style={styles.info}>{autor}</Text>
    <Text style={styles.info}>{editora}</Text>
    <Text style={styles.preco}>{preco}</Text>

  </View>
);




export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        initialNumToRender={1}
        renderItem={({ item }) => <Item title={item.title} image={item.image} autor={item.autor} editora={item.editora} preco={item.preco} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CORES.COR_FUNDO_CLARO,
    height: 310,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 10,
    shadowRadius: 5,
    shadowColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },

  info: {
    textAlign: 'right',
    fontSize: 15,
    fontWeight: 700,

  },

  preco: {
    borderRadius:6,
    backgroundColor:"#1ED760",
    textAlign: 'right',
    fontSize: 30,
    fontWeight: 700,

  },

});



