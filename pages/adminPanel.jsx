import { getSession, useSession, signOut } from "next-auth/react";

export default function adminPanel({ props }) {
  const { data: session } = useSession();
  console.log("adminPanel session---------->", session);
  function handleSignOut() {
    signOut();
  }
  return (
    <div>
      Бүртгэлтэй хэрэглэгчид нэвтрэх хуудас
      <div>{session.user.email}</div>
      <div>{session.user.lastName}</div>
      <div>{session.user.firstName}</div>
      <div>{session.user.password}</div>
      <button onClick={handleSignOut}>Sign Out</button>;
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log("getServerSideProps session-------------->", session);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
