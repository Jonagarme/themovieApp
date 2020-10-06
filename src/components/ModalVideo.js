import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Modal, IconButton, Title} from 'react-native-paper';
/* import YouTube from 'react-native-youtube';
import {WebView} from 'react-native-webview';
import {getVideoMovieApi} from '../api/movies'; */

export default function ModalVideo(props) {
  const {show, setShow} = props;

  return (
    <Modal visible={show} contentContainerStyle={styles.modal}>
      <Title>HOLA MODAL</Title>
      <IconButton
        icon="close"
        onPress={() => setShow(false)}
        style={styles.close}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#000',
    height: '120%',
    alignItems: 'center',
  },
  close: {
    backgroundColor: '#1ea1f2',
    width: 50,
    height: 50,
    borderRadius: 100,
    position: 'absolute',
    bottom: 100,
  },
  video: {
    alignSelf: 'stretch',
    height: 300,
  },
});
