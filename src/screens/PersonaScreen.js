import React, {useEffect}from 'react'
import { Text, View } from 'react-native'
import styles from '../theme/Styles'


const PersonaScreen = ({route,navigation}) => {
   const params = route.params
   useEffect(()=>{
       navigation.setOptions({
           title:params.nombre
       })
   })
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{ JSON.stringify(params,null,3)}</Text>
        </View>
    )
}

export default PersonaScreen