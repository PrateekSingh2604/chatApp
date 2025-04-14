import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { db, auth } from './firebase'
import { collection, addDoc, onSnapshot, orderBy, query } from 'firebase/firestore'

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc => {
        const data = doc.data();
  
        return {
          _id: doc.id,
          text: data.text || '',
          createdAt: data.createdAt?.toDate() || new Date(),
          user: {
            _id: data.user?._id,
            name: data.user?.name,
            avatar: data.user?.avatar || null, // optional
          },
        };
      }));
    });
  
    return unsubscribe;
  }, []);
  


  const onSend = useCallback(async (messages = []) => {
    const { createdAt, text, user } = messages[0];
    await addDoc(collection(db, 'chats'), {
      text,
      createdAt,
      user,
    })
  }, [])


  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: auth.currentUser.uid,
        name: auth.currentUser.email,
      }}
    />
  )
}
