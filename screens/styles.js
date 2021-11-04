import { StyleSheet,Dimensions } from "react-native";

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;

let bodyHeight = height * 0.6;
let headHeight = height * 0.3;

export const styles = StyleSheet.create({
    mainBody: {
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        width: width,
        height: height * 0.1,
        paddingLeft: width * 0.1,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: 'black',
    },
    titleText:{
        fontSize: height * 0.05,
        color: 'white',
        fontWeight: 'bold',
    },
    head:{
        width: width,
        height: headHeight,
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'black'
    },
    tophead:{
        height: headHeight ,
        width: width * 0.85,
        paddingBottom: headHeight * 0.05,
        paddingRight: width * 0.05,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    head1Text:{
        fontSize: headHeight * 0.1,
    },
    head2Text:{
        fontSize: headHeight * 0.35
    },
    bottomhead:{
        height: headHeight ,
        width: width * 0.15,
        paddingBottom: headHeight * 0.05,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    head3Text:{
        fontSize: headHeight * 0.2,
    },
    body:{
        width: width,
        height: bodyHeight,
        backgroundColor: 'black',
        display: "flex",
        flexDirection: "column",
    },
    bodyPart1:{
        display: "flex",
        flexDirection: "row",
    },
    btn:{
        width: width * 0.2,
        height: height * 0.11,
        marginTop: height * 0.009,
        marginLeft: width * 0.04,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: height * 0.5,  
    },
    btnText:{
        fontSize: height * 0.04,
    },  
    color1:{
        backgroundColor: '#EFFD5F',
    },
    color2:{
        backgroundColor: '#FC94AF',
    },
    color3:{
        color: 'white'
    }
});