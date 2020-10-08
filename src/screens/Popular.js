import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {map} from 'lodash';
import {getPopularMoviesApi} from '../api/movies';
import {BASE_PATH_IMG} from '../utils/constants';
import noImage from '../assets/png/default-image.png';
import {Rating} from 'react-native-ratings';
import usePreferences from '../hooks/usePreferences';
import starDark from '../assets/png/starDark.png';
import starLight from '../assets/png/starLight.png';

export default function Popular(props) {
  const {navigation} = props;
  const [movies, setMovies] = useState(null);
  const {theme} = usePreferences();

  useEffect(() => {
    getPopularMoviesApi(1).then((response) => {
      setMovies(response.results);
    });
  }, []);

  return (
    <ScrollView>
      {map(movies, (movie, index) => (
        <Movie key={index} movie={movie} theme={theme} />
      ))}
    </ScrollView>
  );
}

function Movie(props) {
  const {movie, theme} = props;
  const {poster_path, title, release_date, vote_count, vote_average} = movie;
  return (
    <View style={styles.movie}>
      <View>
        <Image
          style={styles.image}
          source={
            poster_path ? {uri: `${BASE_PATH_IMG}/w500${poster_path}`} : noImage
          }
        />
      </View>
      <View>
        <Title>{title}</Title>
        <Title>{release_date}</Title>
        <MovieRating
          voteCount={vote_count}
          voteAverage={vote_average}
          theme={theme}
        />
      </View>
    </View>
  );
}

function MovieRating(props) {
  const {theme, voteCount, voteAverage} = props;
  const media = voteAverage / 2;
  return (
    <View style={styles.viewRating}>
      <Rating
        type="custom"
        ratingImage={theme === 'dark' ? starDark : starLight}
        ratingColor="#ffc205"
        ratingBackgroundColor={theme === 'dark' ? '#192734' : '#f0f0f0'}
        startingValue={media}
        imageSize={20}
        style={{marginRight: 15}}
      />
      <Text style={{fontSize: 12, color: '#8697a5', marginTop: 5}}>
        {voteCount} votos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  movie: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 150,
  },
  viewRating: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  lodadMoreContainer: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  loadMore: {
    backgroundColor: 'transparent',
  },
});
