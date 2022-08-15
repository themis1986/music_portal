import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useDocument = (collection, id) => {
  const error = ref(null);
  const isPending = ref(false);

  let docRef = projectFirestore.collection(collection).doc(id);

  const deleteDoc = async (doc) => {
    error.value = null;
    isPending.value = true;
    try {
      const response = await docRef.delete();
      isPending.value = false;

      return response;
    } catch (err) {
      console.log(err.message);
      error.value = "Could not delete the document";
      isPending.value = false;
    }
  };

  return { error, deleteDoc, isPending };
};

export default useDocument;
