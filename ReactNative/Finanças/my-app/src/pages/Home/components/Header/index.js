import react from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar
}
    from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>Header do App</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
    }
})