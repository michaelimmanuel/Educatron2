
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getBaseUrl } from "@/lib";
const handler = NextAuth({ 
  
  pages: {
    signIn: "/test",
  },
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account, profile }) { 
      if(account && account.type === "credentials") { //(2)
        token.userId = account.providerAccountId; // this is Id that coming from authorize() callback 
      }
      return token;
    },
    async session({ session, token, user }) { 
      session.user = token.userId; //(3)
      return session;
    },
  },

  providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "text", placeholder: "test@gmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials: any, req: any) {
          const apiUrl = "http://localhost:3000/api/student/login";
          
          const data = new URLSearchParams();
          Object.keys(credentials).forEach(key => data.append(key, credentials[key]));
      
          const requestOptions = {
              method: 'POST',
              headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: data
          };
      
          try {
              const response = await fetch(apiUrl, requestOptions);
              const user = await response.json();
      
              if (response.ok && user) {
                  return user;
              }
          } catch (error) {
              console.error('Login failed:', error);
          }
      
          return null;
      }
      
      })
    ]});

export default handler;