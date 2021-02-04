import React, {Component} from 'react';
import { Button, TextInput, View } from 'react-native';

class Form extends Component{

    static defaultProps = {
        onAdd: () => {}
    }

    state = {
        text: ''
    }

    adicionar = () => {
        const {state} = this;
        if(state.text){
            this.props.onAdd(state.text);
            this.addText('');
        }
    }

    addText = (text) => {
        this.setState({text});
    }

    render(){
        const {state} = this;
        return(
            <View>
                <TextInput value={state.text} onChange={this.addText}/>
                <Button
                    title="Adicionar"
                    color="#0062ac"
                    onPress={this.adicionar}
                />
            </View>
        );
    }
}

export default Form;