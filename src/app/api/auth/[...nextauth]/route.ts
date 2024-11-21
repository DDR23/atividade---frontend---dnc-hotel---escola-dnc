import { API_BASE_URL } from '@/utils/apiBaseUrl';
import axios from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies } from 'next/headers';

interface PostReqProps {
  USER_NAME: string;
  USER_PASSWORD: string;
}

interface PostResProps {
  access_token: string;
}

interface PayloadProps {
  sub: string;
  name: string;
  iat: number;
  exp: number;
}

interface GetResProps {
  id: string;
  USER_NAME: string;
  USER_ROLE: string;
  USER_AUTHORIZED: boolean;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        USER_NAME: { label: 'Username', type: 'text' },
        USER_PASSWORD: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error('Credencias não fornecidas.');

        const { data: { access_token } } = await axios.post<PostResProps>(`${API_BASE_URL}/auth/login`, {
          USER_NAME: credentials.USER_NAME,
          USER_PASSWORD: credentials.USER_PASSWORD,
        } as PostReqProps);

        (await cookies()).set('access_token', access_token);

        const payload: PayloadProps = JSON.parse(Buffer.from(access_token.split('.')[1], 'base64').toString());

        const { data: user } = await axios.get<GetResProps>(`${API_BASE_URL}/users/${payload.sub}`)

        return { ...user, access_token };
      },
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      //  TODO - o get de usuario deve descer pra cá. pra que a cada sessao criada ou recriada um novo get seja feito.
      session.user = token.user as any;
      return session;
    },
  },
  pages: { signIn: '/' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
