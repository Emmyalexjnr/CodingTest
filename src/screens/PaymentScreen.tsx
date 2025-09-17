import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Appbar, Button, SegmentedButtons } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Transfer from '../components/Transfer';

type StateType = {
    paymentType: 'domestic' | 'international'
}

const PaymentScreen = () => {
    const [state, setState] = React.useState<StateType>({ paymentType: 'domestic' });

    const onChangePaymentType = (value: 'domestic' | 'international') => {
        setState((prevState) => ({ ...prevState, paymentType: value }));
    };
    
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
            <Appbar.Header>
                <Appbar.Content title="Payments" />
            </Appbar.Header>
            <SegmentedButtons style={{ width: '100%', marginBottom: 20 }}
                value={state.paymentType}
                onValueChange={onChangePaymentType}
                buttons={[
                    {
                        value: 'domestic',
                        label: 'Domestic',
                    },

                    {
                        value: 'international',
                        label: 'International',
                    },

                ]}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ flex: 1 }}>

                    <Transfer paymentType={state.paymentType} />
                </View>

            </ScrollView>
        </View>
    )
}

export default PaymentScreen