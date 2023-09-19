import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./styles";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `O seu IMC hoje é: ${props.resultImc} e seu nivel é ${props.nivelImc}`,
    });
  };

  return (
    <View>
      <Text style={styles.resultText}>
        {props.messageResultImc}
      </Text>
      <Text style={styles.resultTextIMC}>{props.resultImc}</Text>
      <Text style={styles.resultText}>{props.nivelImc}</Text>
      <View style={styles.boxText}>
        <TouchableOpacity style={styles.buttonShare} onPress={onShare}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
