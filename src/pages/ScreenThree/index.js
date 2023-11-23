import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity ,
  Linking,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const slides = [
  {
    key: '1',
    title: '#Dia da Semana',
    text: 'As sementes de uma vida de estudo transformam-se em frutos do sucesso',
    image: require('../../assets/logo1.png'),
  },
  {
    key: '2',
    title: '#Dia da Semana',
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

const getFormattedDate = () => {
  const currentDate = new Date();
  const formattedDay = format(currentDate, 'EEEE', { locale: pt });
  return { day: formattedDay };
};

export default function App() {
  const [showHome, setShowHome] = useState(false);
  const [currentDay, setCurrentDay] = useState(getFormattedDate().day);

  useEffect(() => {
    // Atualiza o dia a cada 10 segundos
    const interval = setInterval(() => {
      const formattedDate = getFormattedDate();
      setCurrentDay(formattedDate.day);
    }, 10000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  function GreetingComponent({ style }) {
    const [greeting, setGreeting] = useState('');
  
    useEffect(() => {
      const updateGreeting = () => {
        const currentHour = new Date().getHours();
  
        if (currentHour >= 5 && currentHour < 12) {
          setGreeting('Bom dia!');
        } else if (currentHour >= 12 && currentHour < 18) {
          setGreeting('Boa tarde!');
        } else {
          setGreeting('Boa noite!');
        }
      };
  
      // Chama a função inicialmente
      updateGreeting();
  
      // Atualiza a saudação a cada minuto
      const intervalId = setInterval(updateGreeting, 60000);
  
      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(intervalId);
    }, []); 

  
    return <Text style={style}>{greeting}</Text>;
  }
  

  function Slide1({ item }) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View>
            <GreetingComponent style={styles.homeTitle}/>
          </View>
          <View style={styles.containerSlide}>
            <Image source={item.image} style={styles.logo} />
            <Text style={styles.title}>{currentDay}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  function Slide2({ item }) {
    const [classSchedules, setClassSchedules] = useState([]);
    const openLink0 = () =>
    Linking.openURL('https://schoolcloudev.my.canva.site/');

  
    useEffect(() => {
      const getClassSchedules = () => {
        // Lógica para obter os horários de aulas com base no dia da semana
        const currentDay = new Date().getDay();
        let schedules = [];
        
        switch (currentDay) {
          case 1:
            schedules = [
              '07:30 - 08:20: Matéria - Professor',
              '08:20 - 09:10: Matéria - Professor',
              'Intervalo',
              '09:30 - 10:20: Matéria - Professor',
              '10:20 - 11:10: Matéria - Professor',
              '11:10 - 12:00: Matéria - Professor',
              'Almoço',
              '13:10 - 14:00: Matéria - Professor',
              '14:00 - 14:50: Matéria - Professor',
              'Intervalo',
              '15:10 - 15:55: Matéria - Professor',
              '15:55 - 16:40: Matéria - Professor',
            ];
          break;
          case 2:
            schedules = [
              '07:30 - 08:20: Matéria - Professor',
              '08:20 - 09:10: Matéria - Professor',
              'Intervalo',
              '09:30 - 10:20: Matéria - Professor',
              '10:20 - 11:10: Matéria - Professor',
              '11:10 - 12:00: Matéria - Professor',
              'Almoço',
              '13:10 - 14:00: Matéria - Professor',
              '14:00 - 14:50: Matéria - Professor',
              'Intervalo',
              '15:10 - 15:55: Matéria - Professor',
              '15:55 - 16:40: Matéria - Professor',
            ];
          break;
            case 3:
              schedules = [
                '07:30 - 08:20: Matéria - Professor',
                '08:20 - 09:10: Matéria - Professor',
                'Intervalo',
                '09:30 - 10:20: Matéria - Professor',
                '10:20 - 11:10: Matéria - Professor',
                '11:10 - 12:00: Matéria - Professor',
                'Almoço',
                '13:10 - 14:00: Matéria - Professor',
                '14:00 - 14:50: Matéria - Professor',
                'Intervalo',
                '15:10 - 15:55: Matéria - Professor',
                '15:55 - 16:40: Matéria - Professor',
              ];
            break;
            case 4:
              schedules = [
                '07:30 - 08:20: Matéria - Professor',
                '08:20 - 09:10: Matéria - Professor',
                'Intervalo',
                '09:30 - 10:20: Matéria - Professor',
                '10:20 - 11:10: Matéria - Professor',
                '11:10 - 12:00: Matéria - Professor',
                'Almoço',
                '13:10 - 14:00: Matéria - Professor',
                '14:00 - 14:50: Matéria - Professor',
                'Intervalo',
                '15:10 - 15:55: Matéria - Professor',
                '15:55 - 16:40: Matéria - Professor',
              ];
            break;
            case 5:
              schedules = [
                '07:30 - 08:20: Matéria - Professor',
                '08:20 - 09:10: Matéria - Professor',
                '',
                'Intervalo',
                '',
                '09:30 - 10:20: Matéria - Professor',
                '10:20 - 11:10: Matéria - Professor',
                '11:10 - 12:00: Matéria - Professor',
                '',
                'Almoço',
                '',
                '13:10 - 14:00: Matéria - Professor',
                '14:00 - 14:50: Matéria - Professor',
                '',
                'Intervalo',
                '',
                '15:10 - 15:55: Matéria - Professor',
                '15:55 - 16:40: Matéria - Professor',
              ];
            break;
          // Adicione casos para os outros dias da semana conforme necessário
          default:
            schedules = [
              'Horário de aulas não disponível para hoje',
              '',
              '',
              'Que tal um descanso?',
            ];
        }
  
        setClassSchedules(schedules);
      };
  
      // Chama a função inicialmente
      getClassSchedules();
  
      // Atualiza os horários de aulas a cada minuto
      const intervalId = setInterval(getClassSchedules, 60000);
  
      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(intervalId);
    }, []);
  
  
    return (
      <View style={styles.container2}>
        <ScrollView contentContainerStyle={styles.containerScroll2}>
          <View>
            <View style={styles.header2}>
              <Text style={styles.homeTitle2}>{currentDay}</Text>
              <TouchableOpacity onPress={openLink0}>
                <Image source={require('../../assets/logo2.png')} style={styles.logoH} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerSlide2}>
            <View style={styles.horaioContainer}>
            {classSchedules.map((schedule, index) => (
            <Text key={index} style={styles.horario}>{schedule}</Text>
          ))}            
          </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  

  function Slide3({ item }) {

  const openLink0 = () =>
    Linking.openURL('https://schoolcloudev.my.canva.site/');

  const openLink1 = () =>
    Linking.openURL('https://drive.google.com/file/d/1Ma3f-lQDfMzZTYZgsP0VClxHJS_x1K0U/view?usp=sharing');

  const openLink2 = () =>
    Linking.openURL('https://drive.google.com/file/d/1Ma3f-lQDfMzZTYZgsP0VClxHJS_x1K0U/view?usp=sharing');

  const openLink3 = () =>
    Linking.openURL('https://drive.google.com/file/d/1Ma3f-lQDfMzZTYZgsP0VClxHJS_x1K0U/view?usp=sharing');
  const openLink4 = () =>
    Linking.openURL('https://drive.google.com/file/d/1Ma3f-lQDfMzZTYZgsP0VClxHJS_x1K0U/view?usp=sharing');
  const openLink5 = () =>
    Linking.openURL('https://drive.google.com/file/d/1Ma3f-lQDfMzZTYZgsP0VClxHJS_x1K0U/view?usp=sharing');

    return (
      <View style={styles.container3}>
        <ScrollView contentContainerStyle={styles.containerScroll3}>
          <View>
            <View style={styles.header2}>
              <GreetingComponent style={styles.homeTitle2}/>
              <TouchableOpacity onPress={openLink0}>
                <Image source={require('../../assets/logo2.png')} style={styles.logoH}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerSlide3}>
            <TouchableOpacity style={styles.button} onPress={openLink1}>
              <Text style={styles.buttonText }>Book in PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={openLink2}>
              <Text style={styles.buttonText}>Book in PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={openLink3}>
              <Text style={styles.buttonText}>Book in PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4} onPress={openLink4}>
              <Text style={styles.buttonText}>Book in PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button5} onPress={openLink5}>
              <Text style={styles.buttonText}>Book in PDF</Text>
            </TouchableOpacity>
            <Text style={styles.title3}>{item.title}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
  return (
    <AppIntroSlider
      renderItem={({ item, index }) => {
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
      }}
      data={slides}
      activeDotStyle={{
        backgroundColor: "#FFFF",
        width: 30,
      }}
      renderDoneButton={() => null}
      onDone={() => setShowHome(true)}
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
    textAlign:'center',
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
    marginTop: 100,
    justifyContent: 'center'
  },
  logo2: {
    width: 300, // Ajuste conforme necessário para a largura
    height: 300, // Ajuste conforme necessário para a altura
    marginBottom: -150,
    marginTop: 10,
    marginLeft: 5
  },
  horaioContainer:{
    marginTop: -10,
    borderRadius: 30,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingVertical: 100
  },
  horario:{
    color: '#1C1C1C',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: '#363636', // Cor da sombra (preto com 75% de opacidade)
    textShadowOffset: { width: 0.05, height: 0 }, // Deslocamento horizontal e vertical da sombra
    textShadowRadius: 5, // Raio da sombra
    textAlign: 'center'
  },
  title2: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#000', // Cor do texto
    elevation: 3,
    marginTop: -5, // Ajuste conforme necessário
    textAlign: 'center',
    textShadowColor: '#808080', // Cor da sombra (preto com 75% de opacidade)
    textShadowOffset: { width: 0.05, height: 0 }, // Deslocamento horizontal e vertical da sombra
    textShadowRadius: 5, // Raio da sombra
  },
  homeTitle2: {
    fontSize: 35,
    marginBottom: -45,
    marginTop: 40,
    marginLeft: -50,
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
  button: {
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
    fontSize: 35,
    marginBottom: -45,
    marginTop: 40,
    marginLeft: -80,
    fontWeight: 'bold',
    color: '#FFFF',
  },
})