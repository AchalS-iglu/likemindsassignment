import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const History = ({navigation, route}) => {
//   console.log(route.params.searchHistory);
  return (
    <View>
      {/* {route.params.searchHistory ? (
        route.params.searchHistory.map((search, i) => {
          return (
            <View key={i}>
              <Text>{search.query}</Text>
              <Text>{search.timestamp}</Text>
            </View>
          );
        })
      ) : (
        <Text>No search history</Text>
      )} */}
    </View>
  );
};

export default History;

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
