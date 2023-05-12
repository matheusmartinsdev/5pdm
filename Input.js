import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';

const Input = ({ onFetch }) => {
  const [url, setUrl] = useState('');

  const handleFetch = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => onFetch(data))
      .catch(error => onFetch('Ops! Houve um erro ao consultar esta API'));
  };

  return (
    <View>
      <form onSubmit={(e) => e.preventDefault()}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setUrl}
        value={url}
      />
      <Button title="Consultar" onPress={handleFetch} />
      </form>
    </View>
  );
};

export default Input;
