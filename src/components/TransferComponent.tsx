import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';



type PropsType = {
    paymentType: 'domestic' | 'international'
}

type StateType = {
    amount: string, recipientName: string, accountNumber: string, iban: string, swiftCode: string
}

const TransferComponent = (props: PropsType) => {
    const { paymentType } = props;

    const [state, setState] = React.useState<StateType>({ amount: '', recipientName: '', accountNumber: '', iban: '', swiftCode: '' });

    const onSubmit = () => {
        console.log('Submitted');
    };

    const onChangeText = (value: string, type: 'recipientName' | 'accountNumber' | 'amount' | 'iban' | 'swiftCode') => {
        setState((prevState) => ({ ...prevState, [type]: value }));
    }

    const returnText = () => {
        if(paymentType === 'international') {
            return 'Send money locally'
        }
        return 'Send money to another country'
    }

    const disabled = () => {
        if(state.recipientName === '' || state.accountNumber === '' || state.amount === '') {
            return true
        }
        if(paymentType === 'international') {
            return state.iban === '' || state.swiftCode === ''
        }
        return false
        
    }

    const renderInternationalTransfer = () => {
        if (paymentType === 'international') {
            return (
                <View style={{ gap: 20}}>
                    <TextInput
                        mode="outlined" value={state.iban}
                        onChangeText={(text) => onChangeText(text, 'iban')}
                        label="IBAN - 34" 
                        placeholder=""
                    />
                    <TextInput
                        mode="outlined" value={state.swiftCode}
                        onChangeText={(text) => onChangeText(text, 'swiftCode')}
                        label="SWIFT code"
                        placeholder=""
                    />

                </View>
            )
        }
    }
    return (
        <View style={{ flex: 1}}>
            <Text>{returnText()}</Text>
            <View style={{ flex: 1 , gap: 20, marginTop: 20}}>
                <TextInput
                    mode="outlined" value={state.recipientName}
                    onChangeText={(text) => onChangeText(text, 'recipientName')}
                    label="Recipient Name"
                    placeholder=""
                />
                <TextInput
                    mode="outlined" value={state.accountNumber}
                    onChangeText={(text) => onChangeText(text, 'accountNumber')}
                    label="Account Number" keyboardType='numeric' 
                    placeholder=""
                />
                <TextInput
                    mode="outlined" value={state.amount}
                    onChangeText={(text) => onChangeText(text, 'amount')}
                    label="Amount" keyboardType='numeric'
                    placeholder=""
                />
                {renderInternationalTransfer()}
            </View>
            <View>
                <Button mode="contained" onPress={onSubmit} disabled={disabled()}>
                    Make payment
                </Button>
            </View>
        </View>
    )
}

export default TransferComponent