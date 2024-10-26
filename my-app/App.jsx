import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import topics from './data/data_programming_languages.js';
import ListItems from './components/ListItems.jsx';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    
    setTimeout(() => {
      setRefreshing(false); 
    }, 1000); 
  };

  return (
    <View style={styles.container}>
      <FlatList
       data={topics}
       renderItem={({item}) => {
       return (
        <ListItems topic={item.topic} description={item.description} logo={item.logo}/>
        );
      }}
       keyExtractor={(item) => item.id}
       refreshing={refreshing}
       onRefresh={onRefresh}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151521',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
});