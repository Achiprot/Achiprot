import  React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import call from 'react-native-phone-call'


const Home = () =>{
    const [inputCall,setInputCall] = useState('+22893396936')

    const CallUser = () =>{
        const args ={
            number: inputCall,
            prompt: true,
        }
        call(args).catch(console.error)
    }
    return(
    <View style={styles.root}>
        <Image source={require('../../assets/index.png')}/>
        <Text style={styles.titre}>Service De Cybersecurité</Text>
        <Text style={styles.titre2}>Cybersecurité</Text>
        <Icon name="phone" 
            size={100}
            color = "green"
            style={styles.icon}
            onPress={CallUser}
        />
        <View style={styles.root2}>
             <Text style={styles.titre3}>achiprot@achiprot.com</Text>
             <Text>Siège(Togo) : +22893396936 <Image source={require('../../assets/togo.png')}/></Text>

        </View>
       
    </View>
    

    )
};

const styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "white",
        
    },
    icon:{
        marginTop:50
    },

    root2:{
        
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "grey",
        marginTop:200
        
    },
    titre:{
        fontSize:25,
        marginBottom:8,
        marginTop:60
    },
    titre2:{
        fontSize:25,
        
    },
    titre3:{
        fontSize:18,
        
    },
    
});
export default Home;