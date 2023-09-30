import { useState } from "react"
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native"

const ListaFrutas = () => {
    const [frutas, setFrutas] = useState([])
    const [novaFruta, setNovaFruta] = useState("")
    const adicionaFruta = () => {
        setFrutas([...frutas, { nome: novaFruta, quantidade: 0 }])
        setNovaFruta('')
    }

    const incrementarQuantidade = (index) => {
        const novasFrutas = [...frutas]

        novasFrutas[index].quantidade += 1
        setFrutas(novasFrutas)
    }
    const decrementarQuantidade = (index) => {
        const novasFrutas = [...frutas]

        if (novasFrutas[index].quantidade  <= 0 ){
            Alert.alert("Não pode negativer estoque!")
            return 
        }
        novasFrutas[index].quantidade -= 1
        setFrutas(novasFrutas)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Lista de Frutas
            </Text>
            <TextInput style={styles.input} 
                placeholder="Informe uma fruta"
                value={novaFruta}
                onChangeText={(texto) => setNovaFruta(texto)}>

            </TextInput>

            <Button title="Add Fruta" onPress={adicionaFruta}></Button>

            <FlatList data={frutas} keyExtractor={(item, index) => index.toString()} renderItem={({ item, index }) => (
                <View style={styles.item}>
                    <Text>
                        {item.nome}
                    </Text>
                    <Text>Quantidade: {item.quantidade}</Text>

                    <Button title="Adicionar" onPress={() => incrementarQuantidade(index)}></Button>
                    <View style={{height : 10}}></View>
                    <Button title="Retirar" onPress={() => decrementarQuantidade(index)}></Button>

                </View>

            )}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20
    },
    titulo : {
        fontSize : 24,
        fontWeight : "bold",
        marginBottom : 10,
        marginTop : 50
        
    },
    input : {
        borderWidth : 1,
        borderColor : '#ccc',
        padding : 10,
        marginBottom : 10
    },
    item : {
        borderWidth : 1,
        borderColor : '#ddd',
        padding : 10,
        marginBottom : 5
    }

})

export default ListaFrutas