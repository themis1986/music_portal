import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getDocument = (collection, id) => {
  const document = ref(null);
  const error = ref(null);

  let documentRef = projectFirestore.collection(collection).doc(id);

  const unsubscribe = documentRef.onSnapshot(
    (doc) => {
      // console.log("snapshot");
      if (doc.data()) {
        document.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = "That document does not exist"
      }
    },
    (err) => {
      console.log(err.message);
      document.value = null;
      error.value = "Could not fetch document";
    }
  );

  watchEffect((onInvalidate) => {
    // unsubscribe from previous collection when watcher is stopped (component unmounted)
    onInvalidate(() => {
      // console.log("watcher disabled");
      unsubscribe();
    });
  });

  return { document, error };
};

export default getDocument;
