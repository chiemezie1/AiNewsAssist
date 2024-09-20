// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db();

        const user = await db.collection("users").findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email");
        }

        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        return { email: user.email, name: user.name };
      },
    }),

    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const client = await clientPromise;
        const db = client.db();

        const existingUser = await db.collection("users").findOne({ email: user.email });
        if (!existingUser) {
          await db.collection("users").insertOne({
            email: user.email,
            name: profile.name,
            image: profile.picture,
            provider: account.provider,
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.email = token.email; 
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
