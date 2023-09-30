import { Button, Text, View } from "react-native"

const DetailsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Details Screen</Text>

            <Button 
                title="Voltar para página principal"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default DetailsScreen