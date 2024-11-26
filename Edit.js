import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { datasource } from './Data';

const styles = StyleSheet.create({
    container: { padding: 10 },
    input: { borderWidth: 1, marginBottom: 10, padding: 8 },
});

const Edit = ({ navigation, route }) => {
    const { game, category, sectionIndex } = route.params;
    const [name, setName] = useState(game.key);
    const [image, setImage] = useState(game.image);

    const handleSave = () => {
        const section = datasource.find(section => section.type === category);
        if (section) {
            section.data[sectionIndex] = { key: name, image };
        }
        navigation.navigate('Home');
    };

    const handleDelete = () => {
        Alert.alert('Confirm Delete', 'Are you sure you want to delete this game?', [
            {
                text: 'Yes',
                onPress: () => {
                    const section = datasource.find(section => section.type === category);
                    if (section) {
                        section.data.splice(sectionIndex, 1);
                    }
                    navigation.navigate('Home');
                },
            },
            { text: 'No' },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text>Edit Game Name:</Text>
            <TextInput style={styles.input} onChangeText={setName} value={name} />
            <Text>Edit Image URL:</Text>
            <TextInput style={styles.input} onChangeText={setImage} value={image} />
            <Button title="Save Changes" onPress={handleSave} />
            <Button title="Delete Game" color="red" onPress={handleDelete} />
        </View>
    );
};

export default Edit;
