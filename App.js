
import React from 'react';
import { SafeAreaView } from 'react-native';
import { FAQProvider } from './FAQContext';
import FAQForm from './FAQForm';
import FAQList from './FAQList';

const App = () => {
  return (
    <FAQProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <FAQForm />
        <FAQList />
      </SafeAreaView>
    </FAQProvider>
  );
};

export default App;
