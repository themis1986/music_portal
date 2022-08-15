import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsubscribe = collectionRef.onSnapshot(
    (snap) => {
      // console.log("snapshot");

      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    // unsubscribe from previous collection when watcher is stopped (component unmounted)
    onInvalidate(() => {
      // console.log("watcher disabled");
      unsubscribe();
    });
  });

  return { documents, error };
};

export default getCollection;
