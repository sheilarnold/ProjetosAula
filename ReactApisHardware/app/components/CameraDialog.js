import React, { Component } from "react";
import { View, Image, Text, Button, Modal, TouchableOpacity, StyleSheet } from "react-native";
import Clipboard from '@react-native-community/clipboard';
import { PictureService } from "../services/PictureService";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { RNCamera } from "react-native-camera";
import CameraRoll from "@react-native-community/cameraroll";
import { check, PERMISSIONS, request, requestMultiple, RESULTS } from "react-native-permissions";

class Camera_Dialog extends Component{
/*
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
        console.log('access granted')
        let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect:[1,1],
        quality:0.5,
        })
        console.log(data)

        if (!data.cancelled){
        setImage(data.uri);
    }
    
    }else{
        Alert.alert('Permissions required to access camera roll.')
    }
*/
    async componentDidMount(){
        /*ImagePicker.showImagePicker({}, (response) => {
            console.log(response)
        })*/
        console.log('obtendo permissões')
        const permissoes = requestMultiple([
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ]).then((response) => {
            console.log(response)
            return response;
        })

        /*const fotos_galeria = await CameraRoll.getPhotos({            
            first: 10,
            assetType: "Photos",
            after: "10",
        })

        console.log(fotos_galeria);*/
        /*launchImageLibrary({}, () => async (response) => {
            console.log(response)
        })*/
        /*const response = await CameraRoll.getPhotos({
            first: 3,
            assetType: "Photos",
        })
        console.log(response)*/
    }

    static defaultProps = {
        isOpen: false,
        onClose: () => {},
        camera: null,
    }

    state ={
        currentImage: 'https://www.dci.com.br/wp-content/uploads/2021/02/capacapa-1.jpg',
        img: "https://www.dci.com.br/wp-content/uploads/2021/02/capacapa-1.jpg'",
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

    async shot(){
        console.log(this.camera)
        if(this.camera){
            const options = {quality: 0.5, base64: true};
            const data = await this.camera.takePictureAsync(options);
            //console.log(data.uri)
            this.setState({img: data.uri})
            CameraRoll.save(data.uri);
            //console.log(this.state.img)
        }
        
    }

    save = async() => {
        const result = await PictureService.save(this.state.currentImage);
        this.props.onClose(result);
    }

    capture = () => {
        launchCamera({
            mediaType: "photo",
            saveToPhotos: true,
            includeBase64: false,
        }, (response) => {
            console.log(response)
        })
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
                        <Image source={{uri: state.img}} style={styles.preview}/>
                        <TouchableOpacity onPress={props.onClose}>
                            <Text style={styles.closeButton}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column", 
                        }}
                    >
                       <RNCamera
                            ref={(ref) => {
                                this.camera = ref;
                            }}
                            style={{
                                flex: 1,
                                height: 250,
                                justifyContent: "flex-end",
                                alignItems: "center"
                            }}
                            type={RNCamera.Constants.Type.back}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            title="Salvar"
                            onPress={this.save}
                            color="blue"
                        />
                        <Button
                            title="Capturar"
                            //onPress={this.capture}
                            onPress={this.shot}
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
        flexDirection: "column",
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
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 25,

        flexDirection: "row",
        justifyContent: "space-around",
        height: 40,
        backgroundColor: "gray"
    }
})

export default Camera_Dialog;