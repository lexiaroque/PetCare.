import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PetProfiles from './homeComponents/petProfiles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => navigation.navigate('UserProfile')}
        >
          <Icon name="user-circle-o" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../Images/justLogo.png')}
            style={styles.homeLogo}
          />
          </TouchableOpacity>

          <Text style={styles.myPets}> My Pets </Text>
      <ScrollView>
        <PetProfiles />
      </ScrollView>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Search')}
        >
          <Icon name="search" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Calendar')}
        >
          <Icon name="calendar" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileIcon: {
    position: 'absolute',
    top: 25, 
    right: 10, 
    backgroundColor: 'transparent', // Set background color to transparent
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  homeLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 100,
  },
  myPets: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
  },
});

export default Home;