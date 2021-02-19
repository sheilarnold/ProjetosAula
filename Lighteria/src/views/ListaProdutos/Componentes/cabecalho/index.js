import React from 'react';
import { Image, SafeAreaView, Text, View } from "react-native"

const Cabecalho = ({}) => {
    return(
        <SafeAreaView
        style={{flex: 1, backgroundColor: "#F4F0F4"}}
        >
        <View
            style={{
            //borderColor: "purple",
            //borderWidth: 1,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",//alinhamento pelo eixo X
            alignItems: 'center',//alinhamento pelo eixo Y
            paddingHorizontal: 6,
            paddingTop: 30,
            paddingBottom: 40,
            }}
        >
            <Text
            style={{
                fontFamily: 'OpenSans-ExtraBold',
                fontSize: 28,
            }}
            >
            Lighteria
            </Text>
            <View
            style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 50,
                height: 50,
                padding: 18,
                alignItems: "center",
                justifyContent: "center",
            }}
            >          
            <Image
                style={{
                width: 30, 
                height: 30,
                }}
                source={{uri: icon}}
                />
            </View>
        </View>
        <View
            /*style={{
            paddingHorizontal: 24,
            }}*/
        >
            <View
            style={{
                borderWidth: 0.5,
                borderColor: "#A1A5AA"
            }}
            />
                <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: -46,
                }}
                >
                    <Text
                        style={{
                        padding: 34,
                        backgroundColor: "#F4F0F4",
                        fontSize: 16,
                        fontFamily: "OpenSans-Regular",
                        color: "#A1A5AA",
                        }}
                    >
                        Categorias
                    </Text>
                </View>
        </View>
        </SafeAreaView>
    )
}

const icon = "data:image/png;base64,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";

export default Cabecalho;