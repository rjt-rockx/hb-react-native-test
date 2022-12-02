/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import WebView from 'react-native-webview';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

const html = /*html*/ `
<html>
  <h1>hello world</h1>
  <div id="container" style="height: 100%; width: 100%; border: none"></div>
  <script type="module">
    import Hyperbeam from "https://unpkg.com/@hyperbeam/web@latest/dist/index.js"
    const container = document.getElementById("container")
    const embedURL = "https://5jbgg37q96087x0tth441pn29.hyperbeam.com/ovDXWpcqScSTlih1XsFL4g?token=8i_OQVDahuaL8nFn8TtyF_ZF32cEln3kGrw4VG_3tkM"
    initializeHB()
    async function initializeHB() {
      try {
        const hb = await Hyperbeam(container, embedURL)
      } catch (e) {
        alert(e)
      }
    }
  </script>
</html>
`;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <WebView originWhitelist={['*']} source={{ html }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
