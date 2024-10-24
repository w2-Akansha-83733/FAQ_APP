
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const FAQContext = createContext();

export const useFAQ = () => {
  return useContext(FAQContext);
};

export const FAQProvider = ({ children }) => {
  const [faqs, setFaqs] = useState([]);

  // Fetch FAQs from the backend
  const fetchFAQs = async () => {
    try {
      const response = await axios.get('http://192.168.1.109:5000/faqs'); // Replace with your backend API URL
      setFaqs(response.data);
    } catch (error) {
      console.error("Error fetching FAQs: ", error);
    }
  };

  // Create FAQ
  const createFAQ = async (newFAQ) => {
    try {
      const response = await axios.post('http://192.168.1.109:5000/faqs', newFAQ);
      setFaqs([...faqs, response.data]);
    } catch (error) {
      console.error("Error creating FAQ: ", error);
    }
  };

  
  // Update FAQ
const updateFAQ = async (id, updatedFAQ) => {
  // Optional: store the previous state for rollback in case of error
  const previousFaqs = [...faqs];

  try {
    // Send PUT request to update the FAQ
    await axios.put(`http://192.168.1.109:5000/faqs/${id}`, updatedFAQ, {
      headers: {
        'Content-Type': 'application/json', // Set headers if necessary
      },
    });

    // Update the state if the request is successful
    setFaqs(faqs.map(faq => (faq.id === id ? { ...faq, ...updatedFAQ } : faq)));
  } catch (error) {
    // Rollback state if there was an error
    console.error("Error updating FAQ: ", error);
    setFaqs(previousFaqs); // Restore previous state
    alert('Failed to update FAQ. Please try again.'); // User feedback
  }
};


  // Delete FAQ
  const deleteFAQ = async (id) => {
    try {
      await axios.delete(`http://192.168.1.109:5000/faqs/${id}`);
      setFaqs(faqs.filter(faq => faq.id !== id));
    } catch (error) {
      console.error("Error deleting FAQ: ", error);
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  return (
    <FAQContext.Provider value={{ faqs, createFAQ, updateFAQ, deleteFAQ }}>
      {children}
    </FAQContext.Provider>
  );
};
