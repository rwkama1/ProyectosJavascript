import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
class MyWeb extends Component {
    render() {
        return <WebView source={{ uri: 'https://instamobile.io/blog' }} />;
    }
}
//import React, { Component } from 'react'
//import { View, WebView, StyleSheet } from 'react-native'
//const App  = () => {
//    return (
//        <View style={styles.container}>
//            <WebView
//                source={{
//                    uri:
//                        'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint'
//                }}
//            />
//        </View>
//    )
//}
//const styles = StyleSheet.create({
//    container: {
//        height: 350,
//    }
//})
//export default App;


// ...
//class MyWebComponent extends Component {
//    render() {
//        return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
//    }
//}
//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
