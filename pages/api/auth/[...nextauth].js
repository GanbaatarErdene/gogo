import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/Credentials";
import {
  realDatabase,
  ref,
  set,
  push,
  update,
  child,
  get,
  onValue,
} from "util/firebase";
import _ from "lodash";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        // const dbRef = ref(realDatabase, "users");
        const dbRef = ref(realDatabase);
        // onValue(dbRef, (snapshot) => {
        //   const data = snapshot.val();
        //   const userKey = _.findKey(data, function (el) {
        //     return el.email === credentials.email;
        //   });
        //   console.log("data.userKey------>", _.get(data, userKey));
        //   setUserData(_.get(data, userKey));
        // });
        const userData = await get(child(dbRef, `users`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              const userKey = _.findKey(data, function (el) {
                return el.email === credentials.email;
              });
              const result = _.get(data, userKey);
              return result;
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
        console.log("userData---------->", userData);
        if (!userData) {
          throw new Error("No user Found with Email Please Sign Up...!");
        }

        if (
          credentials.password !== userData.password ||
          userData.email !== credentials.email
        ) {
          throw new Error("Username or Password doesn't match");
        }
        return userData;
      },
      session: {
        strategy: "jwt",
      },
    }),
  ],
});
