import { Injectable } from '@nestjs/common';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from 'libs';
import { LoginRequest } from './auth.type';

@Injectable()
export class AuthService {
  async login(request: LoginRequest) {
    const { email, password } = request;

    const auth = getAuth(firebaseApp);

    const result = (await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )) as any;

    const token = result?._tokenResponse?.idToken;

    return token;
  }
}
