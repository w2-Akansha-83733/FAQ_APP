// // screens/FaqScreen.js
// import React, { useContext, useState } from 'react';
// import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native';
// import { FaqContext } from '../context/FaqContext';

// const FaqScreen = () => {
//     const { faqs, addFaq, updateFaq, deleteFaq } = useContext(FaqContext);
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');

//     const handleAddFaq = () => {
//         if (!question || !answer) {
//             Alert.alert('Please fill all fields');
//             return;
//         }
//         // Add parent_id if required, here assuming parent_id should be 0 or some value
//         addFaq({ question, answer});
//         setQuestion('');
//         setAnswer('');
//     };
    

//     return (
//         <View>
//             <FlatList
//                 data={faqs}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View>
//                         <Text>{item.question}</Text>
//                         <Text>{item.answer}</Text>
//                         {/* Update and Delete functionality can be added here */}
//                     </View>
//                 )}
//             />
//             <TextInput
//                 placeholder="Question"
//                 value={question}
//                 onChangeText={setQuestion}
//             />
//             <TextInput
//                 placeholder="Answer"
//                 value={answer}
//                 onChangeText={setAnswer}
//             />
//             <Button title="Add FAQ" onPress={handleAddFaq} />
//         </View>
//     );
// };

// export default FaqScreen;





// import React, { useContext, useState } from 'react';
// import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { FaqContext } from '../FaqContext';

// const FaqScreen = () => {
//     const { faqs, addFaq, updateFaq, deleteFaq } = useContext(FaqContext);
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');
//     const [editMode, setEditMode] = useState(false);
//     const [currentId, setCurrentId] = useState(null);

//     const handleAddOrUpdateFaq = () => {
//         if (!question || !answer) {
//             Alert.alert('Please fill all fields');
//             return;
//         }

//         if (editMode) {
//             // Update mode
//             updateFaq(currentId, { question, answer });
//             setEditMode(false);
//             setCurrentId(null);
//         } else {
//             // Add new FAQ
//             addFaq({ question, answer });
//         }

//         setQuestion('');
//         setAnswer('');
//     };

//     const handleEditFaq = (faq) => {
//         setQuestion(faq.question);
//         setAnswer(faq.answer);
//         setCurrentId(faq.id);
//         setEditMode(true);
//     };

//     const handleDeleteFaq = (id) => {
//         Alert.alert(
//             'Delete FAQ',
//             'Are you sure you want to delete this FAQ?',
//             [
//                 { text: 'Cancel', style: 'cancel' },
//                 { text: 'Delete', onPress: () => deleteFaq(id) }
//             ],
//             { cancelable: true }
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>FAQs</Text>
            
//             <FlatList
//                 data={faqs}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.faqItem}>
//                         <Text style={styles.faqQuestion}>{item.question}</Text>
//                         <Text style={styles.faqAnswer}>{item.answer}</Text>
                        
//                         <View style={styles.faqActions}>
//                             <TouchableOpacity
//                                 style={styles.editButton}
//                                 onPress={() => handleEditFaq(item)}
//                             >
//                                 <Text style={styles.buttonText}>Edit</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity
//                                 style={styles.deleteButton}
//                                 onPress={() => handleDeleteFaq(item.id)}
//                             >
//                                 <Text style={styles.buttonText}>Delete</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 )}
//             />

//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Question"
//                     value={question}
//                     onChangeText={setQuestion}
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Answer"
//                     value={answer}
//                     onChangeText={setAnswer}
//                 />
//                 <Button
//                     title={editMode ? 'Update FAQ' : 'Add FAQ'}
//                     onPress={handleAddOrUpdateFaq}
//                 />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginVertical: 10,
//     },
//     faqItem: {
//         backgroundColor: '#f9f9f9',
//         padding: 15,
//         borderRadius: 10,
//         marginVertical: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 3,
//     },
//     faqQuestion: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     faqAnswer: {
//         fontSize: 16,
//         color: '#555',
//         marginVertical: 5,
//     },
//     faqActions: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     editButton: {
//         backgroundColor: '#4CAF50',
//         paddingVertical: 5,
//         paddingHorizontal: 10,
//         borderRadius: 5,
//     },
//     deleteButton: {
//         backgroundColor: '#F44336',
//         paddingVertical: 5,
//         paddingHorizontal: 10,
//         borderRadius: 5,
//     },
//     buttonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//     },
//     inputContainer: {
//         marginTop: 20,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ddd',
//         padding: 10,
//         borderRadius: 5,
//         marginBottom: 10,
//         fontSize: 16,
//     },
// });

// export default FaqScreen;


// screens/FAQList.js
// FAQList.js
// import React from 'react';
// import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
// import { useFAQ } from './FAQContext';

// const FAQList = () => {
//   const { faqs, deleteFAQ } = useFAQ();

//   const renderFAQ = ({ item }) => (
//     <View style={styles.faqContainer}>
//       <Text style={styles.question}>{item.question}</Text>
//       <Text style={styles.answer}>{item.answer}</Text>
//       <Button title="Delete" onPress={() => deleteFAQ(item.id)} />
//     </View>
//   );

//   return (
//     <FlatList
//       data={faqs}
//       renderItem={renderFAQ}
//       keyExtractor={(item) => item.id.toString()}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   faqContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   question: {
//     fontWeight: 'bold',
//   },
//   answer: {
//     marginVertical: 5,
//   },
// });

// export default FAQList;


import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { useFAQ } from './FAQContext';

const FAQList = () => {
  const { faqs, deleteFAQ, updateFAQ } = useFAQ();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const renderFAQ = ({ item }) => (
    <View style={styles.faqContainer}>
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer}>{item.answer}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={() => handleEdit(item)} color="#007BFF" />
        <Button title="Delete" onPress={() => deleteFAQ(item.id)} color="#FF4136" />
      </View>
    </View>
  );

  const handleEdit = (faq) => {
    setSelectedFAQ(faq);
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setModalVisible(true);
  };

  const handleUpdate = () => {
    updateFAQ(selectedFAQ.id, { ...selectedFAQ, question, answer });
    setModalVisible(false);
    setQuestion('');
    setAnswer('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={faqs}
        renderItem={renderFAQ}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit FAQ</Text>
          <TextInput
            placeholder="Question"
            value={question}
            onChangeText={setQuestion}
            style={styles.input}
          />
          <TextInput
            placeholder="Answer"
            value={answer}
            onChangeText={setAnswer}
            style={styles.input}
          />
          <View style={styles.modalButtonContainer}>
            <Button title="Update" onPress={handleUpdate} color="#007BFF" />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="#FF851B" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  faqContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
  },
  question: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  answer: {
    marginVertical: 5,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FAQList;
