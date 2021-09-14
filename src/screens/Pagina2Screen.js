import { useNavigation } from '@react-navigation/native'
import React,{useEffect} from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../theme/Styles'

const Pagina2Screen = ({navigation}) => {
    const navigator = useNavigation()
    useEffect(()=> {
        navigator.setOptions({
            title:'Hola Mundo',
            headerBackTitle:''
        })
    },[])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>
        <Button 
            title='Ir pagina 3'
            onPress={()=> navigation.navigate('Pagina3Screen')}
            />
        </View>
    )
}

export default Pagina2Screen