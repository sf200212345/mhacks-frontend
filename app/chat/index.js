import { Link } from "expo-router";
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function ChatPage() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sent: true }]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 18, color: 'white'}}>Chat with Brio</Text>
          </View>
          <TouchableOpacity onPress={() => {/* handle cart action */}} style={styles.headerButton}>
            <Image source={require("../../assets/cart.png")} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
        
        {/* Messages */}
        <ScrollView style={styles.messagesContainer}>
          {messages.map((message, index) => (
            <View key={index} style={[styles.messageBubble, message.sent ? styles.sentBubble : styles.receivedBubble]}>
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          ))}
        </ScrollView>
        
        {/* Input Area */}
        <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => {/* handle "+" action */}} style={styles.plusButton}>
          <Text style={styles.plusButtonText}><Image source={require("../../assets/plus.png")} style={styles.headerIcon} /></Text>
        </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="I want ..."
            placeholderTextColor="#AAA" // Placeholder text color
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}><Image source={require("../../assets/send.png")}/></Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082',
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#5D3FD3',
  },
  backButton: {
    fontSize: 20,
    color: '#FFFFFF',
    paddingRight: 20,
  },
  headerTitle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center', // Ensures the title is centered vertically
    alignItems: 'center',  // Ensures the title is centered horizontally
  },
  messagesContainer: {
    flex: 1,
  },
  messageBubble: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    maxWidth: '80%',
  },
  sentBubble: {
    backgroundColor: '#6979F8',
    alignSelf: 'flex-end',
  },
  receivedBubble: {
    backgroundColor: '#483D8B',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 25,
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
  },
  plusButton: {
    // Styles for the "+" button
    backgroundColor: '#6A5ACD', // Example background color, adjust as necessary
    borderRadius: 20,
    padding: 10,
    marginRight: 10, // Add some margin to the right of the "+" button
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#6A5ACD',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});