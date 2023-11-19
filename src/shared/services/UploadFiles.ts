/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';
import{ref,getStorage, uploadBytesResumable, getDownloadURL}from 'firebase/storage'
export default async function uploadFileToStorage(file: Express.Multer.File, postId: string): Promise<string> {
    const dateTime = giveCurrentDateTime();
  // Define la referencia de Storage
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `files/${file.originalname + '       ' + dateTime}`,
  );
  const metadata = {
    contentType: file.mimetype,
  };
  const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
  const url = await getDownloadURL(snapshot.ref);
  console.log('Uploaded a blob or file!');
  console.log(url);
  return url;
}

const giveCurrentDateTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const dateTime = date + ' ' + time;
  return dateTime;
};