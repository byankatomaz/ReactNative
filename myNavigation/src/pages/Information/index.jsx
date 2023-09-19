import React from "react";
import { View, Text } from "react-native";

export default function Information({ route }){
    return(
        <View style={{padding: 30}}>
            <View style={{marginTop: 60, fontSize: 20}}>
                <Text>
                    Nome: {route.params?.nome}
                </Text>
                <Text>
                    Telefone: {route.params?.telefone}
                </Text>
                <Text>
                    Endereço: {route.params?.endereco}
                </Text>
                <Text>
                    N: {route.params?.n}
                </Text>
                <Text>
                    Profissão: {route.params?.profissao}
                </Text>
                <Text>
                    email: {route.params?.email}
                </Text>
            </View>
        </View>
    );
}