import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getNewsMovieApi} from '../api/movies';

export default function Home() {
  const [newMovies, setNewMovies] = useState(null);

  useEffect(() => {
    getNewsMovieApi().then((response) => {
      setNewMovies(response.results);
    });
  }, []);

  return (
    <View>
      <Text>Estamos en home</Text>
    </View>
  );
}
