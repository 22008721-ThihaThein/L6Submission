import React from 'react';
import { View, StatusBar, SectionList, StyleSheet, Text, TouchableOpacity, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { datasource } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    sectionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
    },
    itemImage: {
        width: 120,
        height: 120,
    },
    itemText: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

const Home = ({ navigation }) => {
    const renderGameItem = ({ item, index, section }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
                navigation.navigate('Edit', {
                    game: item,
                    category: section.type,
                    sectionIndex: section.data.indexOf(item),
                })
            }
        >
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.key}</Text>
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section: { type, bgColor, icon } }) => (
        <View style={[styles.sectionHeader, { backgroundColor: bgColor }]}>
            <Icon name={icon} size={20} color="white" />
            <Text style={styles.sectionText}>{type}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar />
            <Button
                title="Add Game"
                onPress={() => navigation.navigate('Add')}
            />
            <SectionList
                sections={datasource}
                renderItem={renderGameItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item.key + index}
            />
        </View>
    );
};

export default Home;
