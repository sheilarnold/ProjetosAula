import React, { Component } from "react";
import { View, Image, Text, Button, Modal, TouchableOpacity, StyleSheet } from "react-native";
import Clipboard from '@react-native-community/clipboard';
import { PictureService } from "../services/PictureService";

class Camera_Dialog extends Component{
    static defaultProps = {
        isOpen: false,
        onClose: () => {},
    }

    state ={
        currentImage: 'https://www.dci.com.br/wp-content/uploads/2021/02/capacapa-1.jpg'
    }

    getImageFromClipboard = async() => {
        const imageUrl = await Clipboard.getString();
        const extensions = ['.png', '.jpg', '.jpeg'];
        const isImage = extensions.some(extension => imageUrl.toLowerCase().includes(extension));
        //console.log(imageUrl);
        //console.log(isImage);
        if(isImage){
            this.setState({
                currentImage: imageUrl
            })
        }            

    }

    save = async() => {
        const result = await PictureService.save(this.state.currentImage);
        this.props.onClose(result);
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
                            onPress={this.getImageFromClipboard}
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
        width: "25%",
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