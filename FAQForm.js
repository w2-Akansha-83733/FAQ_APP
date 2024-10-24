import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFAQ } from './FAQContext';

const FAQForm = ({ currentFAQ }) => {
  const [question, setQuestion] = useState(currentFAQ ? currentFAQ.question : '');
  const [answer, setAnswer] = useState(currentFAQ ? currentFAQ.answer : '');
  const { createFAQ, updateFAQ } = useFAQ();

  const handleSubmit = () => {
    if (currentFAQ) {
      updateFAQ(currentFAQ.id, { ...currentFAQ, question, answer });
    } else {
      createFAQ({ question, answer });
    }
    setQuestion('');
    setAnswer('');
  };

  const isFormValid = question.trim() !== '' && answer.trim() !== '';

  return (
    <View style={styles.formContainer}>
      <Text style={styles.heading}>{currentFAQ ? "Update FAQ" : "Add a New FAQ"}</Text>
      
      <TextInput
        placeholder="Enter your question"
        value={question}
        onChangeText={setQuestion}
        style={styles.input}
        placeholderTextColor="#888"
      />
      
      <TextInput
        placeholder="Enter the answer"
        value={answer}
        onChangeText={setAnswer}
        style={[styles.input, styles.textArea]}
        multiline={true}
        numberOfLines={4}
        placeholderTextColor="#888"
      />
      
      <TouchableOpacity 
        onPress={handleSubmit} 
        style={[styles.button, !isFormValid && styles.disabledButton]}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>{currentFAQ ? "Update FAQ" : "Add FAQ"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    margin: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FAQForm;
