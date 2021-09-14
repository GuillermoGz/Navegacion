import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import styles from '../theme/Styles'


const Pagina1Screen = ({navigation}) => {
    useEffect(() =>{        

        navigation.setOptions({
            headerLeft:()=>(
                <Button
                title='Menu'
                onPress={()=> navigation.toggleDrawer()}
                />
            )
        })
    },[])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button 
            title='Ir pagina 2'
            onPress={()=> navigation.navigate('Pagina2Screen')}
            />
            <View style={styles.botonPersona}>
            <TouchableOpacity
            onPress={()=> navigation.navigate('PersonaScreen',{
                id:1,
                nombre:'Pedro'
            })}>
            <Text style={styles.textoBtnPersona}>Pedro</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pagina1Screen