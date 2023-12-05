import React from "react";
import { Container, Content, Title } from "./styles";
import { Input } from "../../components/Form/Input";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Button } from "../../components/Form/Button";
import { Logo, BackToSignIn, Icon, BackToSignTitle} from "./styles";
import logo from "../../assets/logo.png";
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  goBack: () => void;
}

export const SignUp: React.FunctionComponent = () => {
  const { goBack } = useNavigation<ScreenNavigationProp>();

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo  source={logo}/>
            <Title>Crie sua conta</Title>
            <Input placeholder="Nome completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button title="Criar conta" activeOpacity={0.7} />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={()=> goBack()}>
        <Icon name="arrow-left" />
        <BackToSignTitle>Voltar para Login</BackToSignTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
