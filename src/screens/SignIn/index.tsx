import React from "react";
import { View, Image, Text, StatusBar } from "react-native";
import { styles } from "./styles";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        resizeMode="stretch"
        source={IllustrationImg}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
        </Text>

        <ButtonIcon activeOpacity={0.8} title="Entrar com Discord" />
      </View>
    </View>
  );
}
