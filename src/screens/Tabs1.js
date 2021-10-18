import React, { useEffect } from 'react'
import { Text } from 'react-native'

const Tabs1 = () => {
    useEffect(() => {
      console.log('tab1')
    }, [])
    return (
        <Text>Tabs1</Text>
    )
}

export default Tabs1