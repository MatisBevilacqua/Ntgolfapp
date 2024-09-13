import { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Platform } from 'react-native';
import { useUUID } from './Security/useUUID';

export default function App() {
  const uuid = useUUID();

  const handleMessage = (event) => {
    const data = event.nativeEvent.data;
    console.log('Message reçu depuis la page Web:', data);
  };

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{ uri: `https://preinstall5.j.netgolf.fr/acces-app.php?uuid=${uuid}` }}
        javaScriptEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        allowInlineMediaPlayback={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 50 : 0,
  },
});

///516056305
