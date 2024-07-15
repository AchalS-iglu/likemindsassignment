import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {API_URL} from './lib/constants';
import {Button, ScrollView, TextInput} from 'react-native';

const getSearch = async (q: string) => {
  const res = await fetch(`${API_URL}s=${q}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await res.json()).Search;
};

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchResult, setSearchResult] = useState({});

  return (
    <View style={styles.container}>
      <View>
        <View>
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search for a movie..."
            style={styles.input}
          />
          <Button
            onPress={() => {
              if (searchQuery.length > 0) {
                getSearch(searchQuery).then(res => {
                  const {totalResults, Response, ...result} = res;
                  setSearchResult(result);
                });
                setSearchHistory(
                  searchHistory.concat({
                    query: searchQuery,
                    timestamp: new Date().toISOString(),
                  }),
                );
                console.log(Object.values(searchResult));
              }
            }}
            title="Search"
          />
        </View>
      </View>
      <View style={styles.search}>
        {Object.values(searchResult).length > 0 && searchResult ? (
          Object.values(searchResult).map((movie, i) => {
            return (
              <Pressable
                key={i}
                onPress={() => {
                  navigation.navigate('Details', {id: movie.imdbID});
                }}>
                <Text style={styles.text}>
                  {movie.Title} ({movie.Year})
                </Text>
              </Pressable>
            );
          })
        ) : (
          <Text>No results</Text>
        )}
      </View>
      <Button
        onPress={() => {
          navigation.navigate('History', {searchHistory});
        }}
        title="History"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
    color: 'black',
  },
  search: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    color: 'black',
  },
});
