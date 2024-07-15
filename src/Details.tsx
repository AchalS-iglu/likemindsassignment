import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_URL} from './lib/constants';

const getMovieDetails = async (id: string) => {
  const res = await fetch(`${API_URL}i=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await res.json();
};

const Details = ({navigation, route}) => {
  const id = route.params.id;
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    getMovieDetails(id).then(res => {
      setMovieDetails(res);
    });
  }, [id]);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="<"
      />
      {movieDetails ? (
        <View>
          <Image src={movieDetails.Poster} style={{width: 200, height: 200}} />
          <View>
            <Text style={styles.text}>
              {movieDetails.Title} ({movieDetails.Year})
            </Text>
            <Text style={styles.text}>{movieDetails.Plot}</Text>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  text: {
    color: 'black',
  },
});
