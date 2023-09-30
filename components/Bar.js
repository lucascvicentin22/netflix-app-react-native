import { Text, View, ViewBase } from "react-native"
import Mesa from "./Mesa"

const Bar = (props) => {

    const { nome, ano, numMesas } = props
    const mesas = []

    for (let i = 1; i <= numMesas; i++) {
        mesas.push(<Mesa />)
    }

    return (
        <View>

            <Text>
                Espaço {props.nome}
            </Text>

            <Text>
                O Espaço do {props.nome} é para juntar a galera, estamos no mesmo endereço á {props.ano}
            </Text>

            <View styke={{ height: 150 }}></View>

            <Text>
                Temos Mesas para você juntar Familia e Amigos! Quantidade de Mesas:
            </Text>

        </View>
    )
}

export default Bar