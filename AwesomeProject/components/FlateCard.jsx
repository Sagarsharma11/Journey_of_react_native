import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

const FlateCard = () => {

    return (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}>Flate Slides</Text>
            <View style={[styles.container, { border: 5 }]}>
                <View style={[styles.flexbox, styles.colorOne]}>
                    <Text style={styles.textStyle}>
                        Red
                    </Text>
                </View>             
                <View style={[styles.flexbox, styles.colorThree]}>
                    <Text style={styles.textStyle}>
                        Green
                    </Text>
                </View>
                <View style={[styles.flexbox, styles.colorTwo]}>
                    <Text style={styles.textStyle}>
                        Blue
                    </Text>
                </View>
                <View style={[styles.flexbox, styles.colorTwo]}>
                    <Text style={styles.textStyle}>
                        Extra
                    </Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row'
    },
    flexbox: {
        width: 100,
        height: 100,
        margin: 4,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    colorOne: {
        backgroundColor: '#ef4444'
    },
    colorTwo: {
        backgroundColor: '#2563eb'
    },
    colorThree: {
        backgroundColor: '#4ade80'
    },
    textStyle: {
        color: 'white'
    }
})

export default FlateCard