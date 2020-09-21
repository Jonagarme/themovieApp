import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton} from 'react-native-paper';

import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;

  const buttonLeft = () => {
    return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'TheMovieApp', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{title: '', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{title: 'Nuevas Peliculas', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{title: 'Peliculas Populares', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{title: '', headerLeft: () => buttonLeft()}}
      />
    </Stack.Navigator>
  );
}
