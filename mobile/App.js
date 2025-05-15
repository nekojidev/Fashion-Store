import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

// Use Android emulator host or localhost depending on platform
const WEBAPP_URL = Platform.OS === 'android'
  ? 'http://10.0.2.2:3000'
  : 'http://localhost:3000';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: WEBAPP_URL }}
        style={styles.container}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
