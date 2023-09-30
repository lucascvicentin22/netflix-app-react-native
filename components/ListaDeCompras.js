import { useState } from "react"
import { Button, FlatList, Text, TextInput, View } from "react-native"

const ListaDeCompras = () => {
    const [lista, setLista] = useState([])
    const [item, setItem] = useState("")
    const adicionarItem = () => {
        setLista([...lista, item])
        setItem("")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Lista de Compras
            </Text>

            <TextInput
                placeholder="Digite um novo Item"
                style={styles.input}
                value={item}
                onChangeText={(texto) => setItem(texto)}
            />

            <Button title="Adicionar" onPress={adicionarItem}

            />

            <FlatList 
            data={lista} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
            <View style={styles.item}>                         
            <Text>{item}</Text>                     
            </View>)}
            />
        </View>
    )
}
const styles = StyleSheetList.create({
    container: {
        flex: 1,
        padding: 20
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        boderColor: '#ccc',
        padding: 10,
        marginBottom: 10
    },
    item: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 5
    }
})
export default ListaDeCompras