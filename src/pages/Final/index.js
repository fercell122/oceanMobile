import React from "react";
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import { View,  Text, Image, ImageBackground  } from "react-native";


import styles from '../../styles-globals/styles';
import logo from '../../assets/logo.png'
import backgroundI from '../../assets/background.jpg'
import arrow from '../../assets/icon-2.svg'
import iconStagram from '../../assets/icon-3.svg'





function Landing(){

         const { navigate } = useNavigation();

        function handleNavigateToNomear(){
            navigate('Nomear');
        }

        
        


        return (
          <ImageBackground
             resizeMode="cover"
             source={backgroundI}
             style={styles.content}
             >
            <View style={styles.container}>
             
                <Image source={logo} style={styles.banner} />
                <Text style={styles.title}>
                     Time de  {'\n'}
                     desenvolvimento
            
                </Text>

                <Text style={styles.titleBold}>Sua evolução começa agora</Text>

            <Text style={styles.paragraf}>Faça parte dessa jornada junto{'\n'}
             com a Oceaning e conquiste o mundo com suas habilidades de programação</Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                onPress={handleNavigateToNomear}
                style={[styles.button, styles.buttonPrimary]}>
                    
                    <Text style={styles.buttonText}>COMEÇAR AGORA
                    <Image source={arrow} style={styles.arrow} />
                    </Text>
                    
                </RectButton>

            </View>
  
            <Image source={iconStagram} style={styles.stagram} />
            <Text style={styles.paragraf}>Compartilhe</Text>
            </View>
            
            </ImageBackground>
        );
}
    
export default Landing;