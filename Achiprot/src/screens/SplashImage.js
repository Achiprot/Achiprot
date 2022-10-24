import  React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';




const SplashImage = (props) =>{
    const [authLoaded, setAuthLoad] = useState(false);
    useEffect(() => {
        setTimeout(() =>{
            setAuthLoad(true);
        }, 5000)
        
    }, []);

    useEffect(() => {
        if(authLoaded){
            props.navigation.replace('Home')
        }
        
    }, [authLoaded, props.navigation]);


    return(
    <View style={styles.root}>
        <Image source={require('../../assets/index.png')}/>
        
    </View>
    )
};

const styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});
export default SplashImage;