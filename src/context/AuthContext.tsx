import React, { createContext, ReactNode, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

import firebase from '../../fire';

interface AuthProviderProps {
  children: ReactNode;
}

export interface UserProps {
  displayName: string;
  photoURL: string;
  email: string;
  uid: string;
}

interface AuthContextData {
  user: object;
  signIn: () => void;
}

export const authContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  
  async function signIn () {
    const provider = new firebase.auth.GithubAuthProvider();

    try {
      const response = await firebase.auth().signInWithPopup(provider);

      setUser(response.user.providerData[0]);

      Cookies.set('user', JSON.stringify(response.user.providerData[0]));

      window.location.href = '/dashboard';
    } catch (error) { 
      new Notification('Não foi possível fazer o acesso.', {
        body: `Verifique as credenciais.`
      })

      setUser({} as UserProps);
    }
  }

  return (
    <authContext.Provider value={{ user, signIn }}>
      {children}
    </authContext.Provider>
  )
}