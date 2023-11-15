import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView,
  TouchableOpacity, 
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: '1',
    title: 'Segunda-feira',
    text: 'As sementes de uma vida de estudo transforma-se em frutos do sucesso',
    image: require('../../assets/logo1.png'),
  },
  {
    key: '2',
    title: 'Segunda-feira',
    text: 'lore inpulse lore inpulse lore inpulse lore inpulse lore inpulse',
    image: require('../../assets/logo1.png'),
  },
  {
    key: '3',
    title: 'Didáticos',
    text: 'lore inpulse lore inpulse lore inpulse lore inpulse lore inpulse',
    image: require('../../assets/logo1.png'),
  },
];


export default function App() {
  const [showHome, setShowHome] = useState(false);

  function Slide1({ item }) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View> 
            <Text style={styles.homeTitle}>Bom dia!</Text>
          </View>
          <View style={styles.containerSlide}>
            <Image source={item.image} style={styles.logo} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  function Slide2({ item }) {
    return (
      <View style={styles.container2}>
        <ScrollView contentContainerStyle={styles.containerScroll2}>
          <View> 
            <View style={styles.header2}>
              <Text style={styles.homeTitle2}>Bom dia!</Text>
              <Image source={require('../../assets/logo2.png')} style={styles.logoH}/>
            </View>
          </View>
          <View style={styles.containerSlide2}>
            <Text style={styles.title2}>{item.title}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  function Slide3({ item }) {
    return (
      <View style={styles.container3}>
        <ScrollView contentContainerStyle={styles.containerScroll3}>
          <View> 
            <View style={styles.header2}>
              <Text style={styles.homeTitle2}>Bom dia!</Text>
              <Image source={require('../../assets/logo2.png')} style={styles.logoH}/>
            </View>
          </View>
          <View style={styles.containerSlide3}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Biologia Moderna</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>Física</Text>
                <Text style={styles.buttonSubText}>Newton, Helou, Gualter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
                <Text style={styles.buttonText}>Geografia</Text>
                <Text style={styles.buttonSubText}>Fronteiras da GLobalização</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}>
                <Text style={styles.buttonText}>Matemática</Text>
                <Text style={styles.buttonSubText}>Contexto e Aplicações</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button5}>
                <Text style={styles.buttonText}>Química</Text>
            </TouchableOpacity>
            <Text style={styles.title3}>{item.title}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
  function renderSlides({ item, index }) {
    switch (index) {
      case 0:
        return <Slide1 item={item} />;
      case 1:
        return <Slide2 item={item} />;
      case 2:
        return <Slide3 item={item} />;
      default:
        return null;
    }
  }

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: "#FFFF",
        width: 30,
      }}
      renderDoneButton={() => null} // Remover o botão "done"
      onDone={() => setShowHome(true)} // Defina a ação quando o botão "done" é pressionado
    />
  );
}

const styles = StyleSheet.create({

  // STYLES DO SLIDE 1

  container: {
    flex: 1,
    backgroundColor: '#0064EA', // Cor do fundo azul
    alignItems: 'center',
  },
  containerScroll: {
    flexGrow: 1,

  },
  containerSlide: {
    backgroundColor: "white", // Cor da telinha branca
    padding: 20,
    borderRadius: 35, // Borda arredondada, ajuste conforme necessário
    elevation: 3, // Sombra, ajuste conforme necessário
    height: 600, // Ajuste conforme necessário para a altura
    width: 350,
    marginBottom: 20, // Ajuste conforme necessário para mover para cima ou para baixo
    marginTop: 100
  },
  logo: {
    width: 300, // Ajuste conforme necessário para a largura
    height: 300, // Ajuste conforme necessário para a altura
    marginBottom: -150,
    marginTop: 10,
    marginLeft: 5
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#000', // Cor do texto
    elevation: 3,
    marginTop: 180,
    textAlign: 'center',
    textShadowColor: '#808080', // Cor da sombra (preto com 75% de opacidade)
    textShadowOffset: { width: 0.05, height: 0 }, // Deslocamento horizontal e vertical da sombra
    textShadowRadius: 5, // Raio da sombra
  },
  text: {
    fontSize: 20,
    color: '#808080', // Cor do texto
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 40,
    fontWeight: "bold",
    textShadowColor: '#A9A9A9', // Cor da sombra (preto com 75% de opacidade)
    textShadowOffset: { width: 0.05, height: 0 }, // Deslocamento horizontal e vertical da sombra
    textShadowRadius: 5, // Raio da sombra
  },
  homeTitle: {
    fontSize: 40,
    marginBottom: -45,
    marginTop: 40,
    marginLeft: 115,
    fontWeight: 'bold',
    color: '#FFFF',
    
  },

    // STYLES DO SLIDE 2

  container2: {
    flex: 1,
    backgroundColor: '#0064EA', // Cor do fundo azul
    alignItems: 'center',
  },
  containerScroll2: {
    flexGrow: 1,

  },
  containerSlide2: {
    backgroundColor: "white", // Cor da telinha branca
    padding: 20,
    borderRadius: 35, // Borda arredondada, ajuste conforme necessário
    elevation: 3, // Sombra, ajuste conforme necessário
    height: 600, // Ajuste conforme necessário para a altura
    width: 350,
    marginBottom: 20, // Ajuste conforme necessário para mover para cima ou para baixo
    marginTop: 100
  },
  logo2: {
    width: 300, // Ajuste conforme necessário para a largura
    height: 300, // Ajuste conforme necessário para a altura
    marginBottom: -150,
    marginTop: 10,
    marginLeft: 5
  },
  title2: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#000', // Cor do texto
    elevation: 3,
    marginTop: 500,
    textAlign: 'center',
    textShadowColor: '#808080', // Cor da sombra (preto com 75% de opacidade)
    textShadowOffset: { width: 0.05, height: 0 }, // Deslocamento horizontal e vertical da sombra
    textShadowRadius: 5, // Raio da sombra
  },
  text2: {
    fontSize: 20,
    color: '#808080', // Cor do texto
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 40,
    fontWeight: "bold"
  },
  homeTitle2: {
    fontSize: 35,
    marginBottom: -45,
    marginTop: 40,
    marginLeft: -80,
    fontWeight: 'bold',
    color: '#FFFF',
  },
  header2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoH: {
    width: 70, // Ajuste conforme necessário para a largura
    height: 70, // Ajuste conforme necessário para a altura
    marginRight: 200,
    marginLeft: -80,
    marginBottom: -60,
    marginTop: -5,
  },
    // STYLES DO SLIDE 3

  container3: {
    flex: 1,
    backgroundColor: '#0064EA', // Cor do fundo azul
    alignItems: 'center',
  },
  containerScroll3: {
    flexGrow: 1,

  },
  containerSlide3: {
    backgroundColor: "white", // Cor da telinha branca
    padding: 20,
    borderRadius: 35, // Borda arredondada, ajuste conforme necessário
    elevation: 3, // Sombra, ajuste conforme necessário
    height: 600, // Ajuste conforme necessário para a altura
    width: 350,
    marginBottom: 20, // Ajuste conforme necessário para mover para cima ou para baixo
    marginTop: 100
  },
  button:{
    position: 'absolute',
    backgroundColor: '#0064EA',
    borderRadius: 20,
    paddingVertical: 8,
    width: '99%',
    height: '15%',
    alignSelf: 'center',
    bottom: '89%',
    alignItems: 'center',
    justifyContent: 'center'
},
  buttonText:{
    color: '#FFFF',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: '#363636', // Cor da sombra (preto com 75% de opacidade)
    textShadowOffset: { width: 0.05, height: 0.5 }, // Deslocamento horizontal e vertical da sombra
    textShadowRadius: 5, // Raio da sombra
  },
  buttonSubText:{
    color: '#FFFF',
    fontSize: 25,
    fontWeight: 'bold',

  },
  button2:{
    position: 'absolute',
    backgroundColor: '#0064EA',
    borderRadius: 20,
    paddingVertical: 8,
    width: '99%',
    height: '15%',
    alignSelf: 'center',
    bottom: '72%',
    alignItems: 'center',
    justifyContent: 'center'
},
  button3:{
    position: 'absolute',
    backgroundColor: '#0064EA',
    borderRadius: 20,
    paddingVertical: 8,
    width: '99%',
    height: '15%',
    alignSelf: 'center',
    bottom: '55%',
    alignItems: 'center',
    justifyContent: 'center'
},
  button4:{
    position: 'absolute',
    backgroundColor: '#0064EA',
    borderRadius: 20,
    paddingVertical: 8,
    width: '99%',
    height: '15%',
    alignSelf: 'center',
    bottom: '38%',
    alignItems: 'center',
    justifyContent: 'center'
},
  button5:{
    position: 'absolute',
    backgroundColor: '#0064EA',
    borderRadius: 20,
    paddingVertical: 8,
    width: '99%',
    height: '15%',
    alignSelf: 'center',
    bottom: '21%',
    alignItems: 'center',
    justifyContent: 'center'
},
  title3: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#000', // Cor do texto
    marginTop: 500,
    textAlign: 'center',
    textShadowColor: '#808080', // Cor da sombra (preto com 75% de opacidade)
    textShadowOffset: { width: 0.05, height: 0 }, // Deslocamento horizontal e vertical da sombra
    textShadowRadius: 5, // Raio da sombra
  },
  homeTitle3: {
    fontSize: 40,
    marginBottom: -45,
    marginTop: 40,
    marginLeft: 70,
    fontWeight: 'bold',
    color: '#FFFF',
    textShadowColor: '#808080', // Cor da sombra (preto com 75% de opacidade)
    textShadowOffset: { width: 0.05, height: 1 }, // Deslocamento horizontal e vertical da sombra
    textShadowRadius: 5, // Raio da sombra

  },
})