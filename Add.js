import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const styles = StyleSheet.create({
    container: { padding: 10 },
    input: { borderWidth: 1, marginBottom: 10, padding: 8 },
});

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const handleAddGame = () => {
        if (!name || !image || !category) return;

        const index = datasource.findIndex(section => section.type === category);
        if (index !== -1) {
            datasource[index].data.push({ key: name, image });
        }
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text>Game Name:</Text>
            <TextInput style={styles.input} onChangeText={setName} value={name} />
            <Text>Image URL:</Text>
            <TextInput style={styles.input} onChangeText={setImage} value={image} />
            <RNPickerSelect
                value={category}
                onValueChange={setCategory}
                items={datasource.map(section => ({ label: section.type, value: section.type }))}
            />
            <Button title="Add Game" onPress={handleAddGame} />
        </View>
    );
};

export default Add;
