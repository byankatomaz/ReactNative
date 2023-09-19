//Menos que 18,5 = baixo do peso
//de 18,5 a 24,99 = Normal
//de 25 a 29,99 = sobrepeso
// de 30 a 34,99 = Obesidade 1
// de 35 a 39,9 = obesidade 2
// maior que 40 obesidade 3

import React, { useState } from "react";

import {
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Pressable,
  View,
  Vibration,
  FlatList,
} from "react-native";

import ResultImc from "./ResultImc";
import styles from "./styles";

export default function Form(props) {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [nivelImc, setNivelImc] = useState();
  const [imc, setImc] = useState();
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState();
  const [imcList, setImcList] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let result = (weight / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr) => [
      ...arr,
      {
        id: new Date().getTime(),
        imc: result,
      },
    ]);

    setImc(result);

    return result;
  }

  function varificationImc() {
    if (!imc) {
      Vibration.vibrate(5000);
      setErrorMessage("Campo obrigátorio**");
    }
  }

  function validationImc() {
    console.log(imcList)
    if (weight && height) {
      let calculado = imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual: ");

      if (calculado < 18.5) {
        setNivelImc("Abaixo do peso");
      } else if (calculado >= 18.5 && calculado <= 24.99) {
        setNivelImc("Peso normal");
      } else if (calculado >= 25 && calculado <= 29.99) {
        setNivelImc("Sobrepeso");
      } else if (calculado >= 30 && calculado <= 34.99) {
        setNivelImc("Obesidade 1");
      } else if (calculado >= 35 && calculado <= 39.99) {
        setNivelImc("Obesidade 2");
      } else {
        setNivelImc("Obesidade 3");
      }

      setTextButton("Calcular novamente");
      setErrorMessage(null);
    } else {
      setImc();
      setNivelImc(null);
      varificationImc();
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e altura");
    }
  }

  return (
    <View style={styles.content} onPress={Keyboard.dismiss}>
      {imc == null ? (
        <Pressable>
          <Text style={styles.text}>Altura</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="ex. 1.75"
            placeholderTextColor="gray"
            inputMode="numeric"
          />
          <Text style={styles.errorMessage}> {errorMessage} </Text>

          <Text style={styles.text}>Peso</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="ex 75.50"
            placeholderTextColor="gray"
            inputMode="numeric"
          />
          <Text style={styles.errorMessage}> {errorMessage} </Text>

          <TouchableOpacity
            onPress={validationImc}
            style={styles.buttonCalculator}
          >
            <Text style={styles.button}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exibitionResultImc}>
          <ResultImc
            messageResultImc={messageImc}
            resultImc={imc}
            nivelImc={nivelImc}
          />
          <TouchableOpacity
            onPress={validationImc}
            style={styles.buttonCalculator}
          >
            <Text style={styles.button}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return(
            <Text style={styles.resultItem}>
              <Text style={styles.textList}>Resultado IMC:  </Text>
              {item.imc}
            </Text>
          )
        }}
        keyExtractor={(item) => {
          item.id;
        }}
      ></FlatList>
    </View>
  );
}
