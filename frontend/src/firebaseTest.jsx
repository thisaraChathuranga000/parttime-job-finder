import React from 'react'
import { db, storage } from './config/firebase.config';
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

function firebaseTest() {
  return (
    <div>{}</div>
  )
}

export default firebaseTest