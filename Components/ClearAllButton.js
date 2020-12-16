import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const ClearButton = props => {
    return(
        <TouchableOpacity onPress = {props.onPress}>
            <Icon type = "font-awesome" name = {"trash"}size = {30}color = "Orange" reverse = {true}></Icon>
         

        </TouchableOpacity>
    )
} 

export default ClearButton ;