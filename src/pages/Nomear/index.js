import React from "react";
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import { View,  Text, Image, ImageBackground  } from "react-native";
import {Input} from "react-native-elements";




import styles from '../../styles-globals/styles';
import logo from '../../assets/logo.png'
import backgroundI from '../../assets/background.jpg'
import arrow from '../../assets/icon-2.svg'
import iconStagram from '../../assets/icon-3.svg'





function Landing(){

         const { navigate } = useNavigation();

        function handleNavigateToNomear(){
            navigate('Habilidades');
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
                     Vamos  {'\n'}
                     Começar
            
                </Text>

                <Text style={styles.titleBold}>Como devemos te chamar?</Text>

            <Text style={styles.paragraf}>Nos diga como devemos te chamar{'\n'}
               e qual é o seu e-mail para que possamos te enviar novidades</Text>

               <Input style={styles.inputo}

                placeholder='name'
                />


            <View style={styles.buttonsContainer}>
                <RectButton
                onPress={handleNavigateToNomear}
                style={[styles.button, styles.buttonPrimary]}>
                    
                    <Text style={styles.buttonText}>Continuar
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