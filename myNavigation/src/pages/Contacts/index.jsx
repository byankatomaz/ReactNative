import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}){
    return(
        <View style={{padding: 30}}>
            <View style={{marginTop: 60}}>
                <Text style={{fontSize: 20}}>Nome: João Silva</Text>
                <Text>Telefone: (19) 98781-5696</Text>
                <Text 
                onPress = {() => navigation.navigate('Information',
                {
                    nome: 'João Silva',
                    telefone: '(19) 98781-5696',
                    endereco: 'Rua das Flores',
                    n: 769,
                    profissao: 'Carpinteiro',
                    email: 'joaosilva@carpintaria.com.br'
                }
                )}
                >Information...</Text>
            </View>

            <View style={{marginTop: 60}}>
                <Text style={{fontSize: 20}}>Nome: Amanda da Silva</Text>
                <Text>Telefone: (19) 98836-2348</Text>
                <Text 
                onPress = {() => navigation.navigate('Information',
                {
                    nome: 'Amanda da Silva',
                    telefone: '(19) 98781-5696',
                    endereco: 'Rua das Neves',
                    n: 56,
                    profissao: 'Advogada',
                    email: 'amandasilva@advocacia.com.br'
                }
                )}
                >Information...</Text>
            </View>
            
        </View>
    );
}