import * as React from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const RecipeVideos = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (

    <View style={styles.container}>
      <ScrollView>
      <Video
        ref={video}
        style={styles.video}
        source={require('../assets/videos/foodVideo.mp4')}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Video
        ref={video}
        style={styles.video}
        source={require('../assets/videos/foodVideo.mp4')}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Video
        ref={video}
        style={styles.video}
        source={require('../assets/videos/foodVideo.mp4')}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    top: '10%',
  },
  video: {
    alignSelf: 'center',
    width: 355,
    height: 190,
    bottom: 20,
    marginTop: 10,
    borderRadius: 15
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipeVideos;
