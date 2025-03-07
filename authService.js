import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import { sendEmailVerification } from "firebase/auth";

const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const sendVerificationEmail = async (user) => {
  try {
    await sendEmailVerification(user);
  } catch (error) {}
};

export { registerUser, sendVerificationEmail };
