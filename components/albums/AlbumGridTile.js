import { Text, Pressable, View, StyleSheet } from "react-native";
import { GlobalColors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function AlbumGridTile({userId, id, title}){
    const navigation = useNavigation();

    return (
        <View style={styles.gridItem}>
        <Pressable
            android_ripple={{ color: '#ccc' }}
            style={styles.button}
            onPress={() => navigation.navigate('AlbumDetails', {id: id})}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
    )

}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: 'hidden',
        backgroundColor: GlobalColors.secondaryLight
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
})