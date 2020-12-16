import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const AddButton = props => {
    return(
        <TouchableOpacity onPress = {props.onPress}>
            <Icon type = "font-awesome" name = {"plus"}size = {30}color = "Red" reverse = {true}></Icon>
         

        </TouchableOpacity>
    )
} 

export default AddButton ;