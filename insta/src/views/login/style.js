import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flexGrow: 2,
        justifyContent:"center",
        alignContent:"center",
    },
    
    input: {
        width: largura*0.8,
        textAlign: "center", 
        marginTop: 40,
        fontSize: 30
    },

    btn:{
        alignItems: "center",
        marginBottom: 50,
    }
});

export default styles;