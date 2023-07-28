import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, Platform, TouchableOpacity, } from 'react-native';
import bille from '../../assets/bille.png'
import Spotify from '../../assets/spotify.svg'

const {height: heightScreen} = Dimensions.get('screen')

export function GetStarted() {
  return (
    <View style={styles.container}>
      <Image style={
        {position: 'absolute',
        width: '100%',
        height: heightScreen,
        }} source={bille}/>

      <Spotify style={styles.logo}/>

      <View style={{
        top: 450,
        alignItems: 'center',
        paddingHorizontal: 53,

      }}>
        <Text style={{
          color: '#DADADA',
          fontSize: 25,
          lineHeight: 33,
          fontWeight: '700',
        }}
        >Enjoy listening to music
        </Text>
        <Text style={{
          color: '#797979',
          fontSize: 17,
          lineHeight: 22,
          fontWeight: '400',
          textAlign: 'center',
           marginTop: 21,
        }}
        >Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Sagittis enim purus sed phasellus. 
          Cursus ornare id scelerisque aliquam.
          </Text>

          <TouchableOpacity
          style={{
            width: 329,
            height: 92,
            backgroundColor: '#42C83C',
            borderRadius: 30,
            marginTop: 37,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Text style={{
              color: '#F6F6F6',
              fontSize: 22,
              lineHeight: 29,
              fontWeight: '700',
              textAlign: 'center',
              textTransform: 'capitalize',
            }}>
              Get started
              </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0C0C',
    alignItems: 'center',
  },
  logo:{
    marginTop: 60,
    width: 196,
    height: 59,
  },
});
