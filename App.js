import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

const Page = styled.SafeAreaView`
  flex 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  border: 1px solid #000;
`;

const KeyboardArea = styled.KeyboardAvoidingView = `
  background-color: ${Platform.OS == 'ios' ? '#00F' : '#0F0'};
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.View`
  width: 200px;
  height: 200px;
  background; #000;
  margin-botton: 20px;
`;

export default () => {

  return (
    <Page>
    <KeyboardArea behavior = {Platform.OS == 'ios' ? 'padding' : null}>
        <Logo></Logo>
        <Input />
      </KeyboardArea>
    </Page>
  )
}
