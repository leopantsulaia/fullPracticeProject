import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "src/utils/firebase";

export default function useChats(user) {
  const [snapshot] = useCollection(
    user
      ? query(
          collection(db, `users/${user.uid}/chats`),
          orderBy("timestamp", "desc")
        )
      : null
  );

  const chats = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return chats;
}
