import { StyleSheet, Text, View } from "react-native"

const Mesa = (props) => {
    return (
        <View style={styles.container}>
            <Text styles={styles.texto}>
                Mesa {props.numMesa}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "Red",
            padding : 10,
            margin: 5,
            borderRadius: 5
        },

        texto: {
            color: "White",
            fontSize: 16,
            textAlign: "center"
        }
    }
)

export default Mesa