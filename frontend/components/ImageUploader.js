import React from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const ImageUploader = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const pickImage = () => {
        ImagePicker.launchImageLibrary({}, (response) => {
            if (response.assets) {
                setSelectedImage(response.assets[0].uri);
            }
        });
    };

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append('image', {
            uri: selectedImage,
            type: 'image/jpeg',
            name: 'upload.jpg',
        });

        try {
            const res = await axios.post('http://<YOUR_BACKEND_IP>:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View>
            <Button title="Pick Image" onPress={pickImage} />
            {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
            <Button title="Upload Image" onPress={uploadImage} />
        </View>
    );
};

export default ImageUploader;
