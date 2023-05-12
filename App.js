import React, { useState } from "react";
import { Text, View } from "react-native";
import Input from "./Input";

const App = () => {
  const [response, setResponse] = useState(null);

  const handleFetch = (data) => {
    setResponse(data);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Input onFetch={handleFetch} />
      {response && (
        <View
          src={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: '#70726c'
            }}
          >
            <pre>
              {JSON.stringify(response, null, 2)}
            </pre>
          </Text>
        </View>
      )}
    </View>
  );
};

export default App;
