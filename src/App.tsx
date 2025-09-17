import { View, Text } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import PaymentScreen from './screens/PaymentScreen';


const App = () => {
    return (

        <SafeAreaProvider>
            <PaperProvider >
                <PaymentScreen />
            </PaperProvider>
        </SafeAreaProvider>

    )
}

export default App