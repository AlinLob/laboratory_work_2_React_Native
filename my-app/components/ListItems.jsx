import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItems = ({topic, description, logo}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.topic}>{topic}</Text>
            <Text style={styles.description}>{description}</Text>
        <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e1e2f',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        position: 'relative',
        overflow: 'hidden',
        shadowColor: '#FFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#f9b234',
        alignItems: 'center', 
    },
    topic: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#BBBBBB',
        marginBottom: 10,
        textAlign: 'left', 
    },
    logoContainer: {
        width: 100,
        height: 100,
        borderRadius: 50, 
        backgroundColor: '#FFF', 
        overflow: 'hidden', 
        borderWidth: 2, 
        borderColor: '#f9b234', 
        marginTop: 10,
        
    },
    logo: {
      width: 70,
      height: 80,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 10,
    },
  });
  
  export default ListItems;