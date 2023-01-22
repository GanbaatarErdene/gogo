import { realDatabase, ref, set, push, update, child } from "util/firebase";

export default function useInsertUsers(object) {
  const newItemRef = push(ref(realDatabase, `users`));
  set(newItemRef, object);

  return null;
}
