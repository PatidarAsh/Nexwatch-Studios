import NextAuth from "next-auth/next";
require("dotenv").config();
import GithubProvider from "next-auth/providers/github";


const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv1.309f0973a39d2004",
      clientSecret: "8dcb1bb157e3599833c5b69eadbd5f42743e736b"
      // clientId: process.env.GITHUB_CLIENT,
      // clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
  secret: "default_secret_key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
