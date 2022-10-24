
import { StyleSheet, Text, View, Image,StatusBar,useColorScheme,SafeAreaView } from 'react-native';
import Main from './src/navigation/Main';

const App = () =>{

  const isDarkMode = useColorScheme() === "dark"

  const backgroundStyle = {
    flex:1
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content": "dark-content"}  />
      <Main/>
      
    </SafeAreaView>
  );
}

export default App