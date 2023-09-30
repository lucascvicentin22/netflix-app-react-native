import { useState } from "react"
import { Button, Text, View } from "react-native"

const Contador = () => {
    const [contador, setContador] = useState(0)
    const incrementarContador = () => {
        setContador(contador + 1)
    }

    const descrementarContador = () => {
        if (contador <= 0) return
        setContador(contador - 1)
    }

    return (
        <View>
            <Text > Contador: {contador}</Text>
           
            <Button title="Incrementar" onPress={incrementarContador}/>

            <View style={{height : 10}} />

            <Button title="Descrementar" onPress={descrementarContador}/>
        </View>
    )
}
export default Contador