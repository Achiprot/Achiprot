import  React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,Image, Linking} from 'react-native';
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
        <View style={styles.logo}>
                    <Image source={require('../../assets/index.png')} style={styles.logo}/>
        </View>
        
        <View style={styles.second}>
            
            
            <Text style={styles.titre}>Service De </Text>
            <Text style={styles.titre2}>Cybersecurité</Text>
            <Icon name="phone" 
                size={100}
                color = "green"
                style={styles.icon}
                onPress={CallUser}
            />
            <Icon name="car" 
                size={35}
                color = "grey"
                style={styles.icon3}
                onPress={() => Linking.openURL('https://www.achiprot.com/Achiprot-voiture/')}
            />
            <Icon name="globe" 
                size={35}
                color = "grey"
                style={styles.icon2}
                onPress={()=>{ Linking.openURL('https://www.achiprot.com/')}}
            />
            <View style={styles.root2}>
                <Text style={styles.titre3}>achiprot@achiprot.com</Text>
            </View> 
            <View style={styles.root3}>
                    <Text>Siège(Togo) : +22893396936 </Text>
            </View>
        
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
        marginTop:100
        
    },

    root3:{
        
        alignItems:'center',
        justifyContent:'center',
        
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
    logo:{
        marginRight:120,
        marginBottom:50
    },
    second:{
     
        alignItems:'center',
        justifyContent:'center',
        
    },
    icon2:{
        marginRight: 120
    },
    icon3:{
        marginLeft: 120,
    }

    
});
export default Home;