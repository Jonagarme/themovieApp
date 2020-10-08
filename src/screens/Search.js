import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {searchMoviesApi} from '../api/movies';

export default function Search() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    searchMoviesApi().then((response) => {
      setMovies(response.results);
    });
  }, []);

  return (
    <View>
      <Text>Estamos en search</Text>
    </View>
  );
}
