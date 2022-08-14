import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) {
      throw newError("Could not complete the sigup");
    }
    await response.user.updateProfile({ displayName });
    error.value = null;
    // console.log(response.user);

    return response;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
