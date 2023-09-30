const { View, Text, Button } = require("react-native")

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button 
                title="Ir para a página de Detalhes" 
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

export default HomeScreen