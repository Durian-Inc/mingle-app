import * as React from 'react';
import { View } from 'react-native';

interface ISpacerProps {
    height?: any;
    width?: any;
    backgroundColor?: string;
}

export default class Spacer extends React.Component<ISpacerProps, {}> {
    render() {
        return (
            <View
                style={{
                    width: this.props.width ? this.props.width : 28,
                    height: this.props.height ? this.props.height : 28,
                    backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "white"
                }}
            />
        );
    }
}