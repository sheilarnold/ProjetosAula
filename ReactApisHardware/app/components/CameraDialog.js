import React, { Component } from "react";
import { View, Image, Text, Button, Modal, TouchableOpacity, StyleSheet } from "react-native";

class Camera_Dialog extends Component{
    static defaultProps = {
        isOpen: false,
        onClose: () => {},
    }

    state ={
        currentImage: 'https://www.dci.com.br/wp-content/uploads/2021/02/capacapa-1.jpg'
    }

    getImageFormClipboard = () => {

    }

    save = () => {
        this.props.onClose();
    }

    capture = () => {

    }

    render(){
        const {props, state} = this;
        return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.isOpen}
            >
                <View style={styles.modalView}>
                    <View style={styles.previewContainer}>
                        <Image source={{uri: state.currentImage}} style={styles.preview}/>
                        <TouchableOpacity onPress={props.onClose}>
                            <Text style={styles.closeButton}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            title="Salvar"
                            onPress={this.save}
                            color="blue"
                        />
                        <Button
                            title="Capturar"
                            onPress={this.capture}
                            color="blue"
                        />
                        <Button
                            title="Colar"
                            onPress={this.getImageFormClipboard}
                            color="blue"
                        />
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
    },
    previewContainer: {
        backgroundColor: "gray",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    preview: {
        width: "100%",
        height: 75,
        borderWidth: 2,
        borderColor: "black"
    },
    closeButton: {
        padding: 15,
        backgroundColor: "red",
        fontSize: 20,
        color: "white",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 40,
        backgroundColor: "gray"
    }
})

export default Camera_Dialog;