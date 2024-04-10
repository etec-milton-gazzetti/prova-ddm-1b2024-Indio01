import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Voce esta na pagina inicial</Text>
            <Button title="Toggle drawer" onPress={()=>navigation.toggleDrawer()}/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});