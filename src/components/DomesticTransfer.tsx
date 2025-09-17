import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';

type StateType = {
    recipientName: string, accountNumber: string, amount: string
}

const DomesticTransfer = () => {
    const [state, setState] = React.useState<StateType>({
        recipientName: '',
        accountNumber: '',
        amount: '',
    });
    const onChangeRecipientName = (value: string) => {
        setState({ ...state, recipientName: value });
    };
    const onChangeAccountNumber = (value: string) => {
        setState({ ...state, accountNumber: value });
    };
    const onChangeAmount = (value: string) => {
        setState({ ...state, amount: value });
    };
    return (
        <View>
            <TextInput
                mode="outlined" value={state.recipientName}
                onChangeText={onChangeRecipientName}
                label="Recipient Name"
                placeholder=""
            />
            <TextInput
                mode="outlined" value={state.accountNumber}
                onChangeText={onChangeAccountNumber}
                label="Account Number"
                placeholder=""
            />
            <TextInput
                mode="outlined" value={state.amount}
                onChangeText={onChangeAmount}
                label="Amount"
                placeholder=""
            />
        </View>
    )
}

export default DomesticTransfer