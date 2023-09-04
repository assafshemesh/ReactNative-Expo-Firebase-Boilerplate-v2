import React from "react";
import { StyleSheet, Platform, Image, Text } from "react-native";
import { SvgUri } from "react-native-svg";

export default function SvgImage(props: { style:any, file: any, width: number, height: number }) {
    const { style, file, width, height } = props;
    const isWeb = Platform.OS === 'web';

    if (isWeb) {
        return (
            <Image style={Object.assign({ width: width, height: height }, style)} source={file}></Image>
        )
    }

    const imageSrc = Image.resolveAssetSource(file);
    return (
        <SvgUri width={width} height={height} style={style} uri={imageSrc.uri} ></SvgUri>
        // <Text >fdgdfgdfdf</Text>
    )
}

// const styles = StyleSheet.create({
//     logo: {
//         //   width: 200,
//         //   height: 70,    
//         transform: [{ scaleX: 0.3 }, { scaleY: 0.3 }],
//     },
// });