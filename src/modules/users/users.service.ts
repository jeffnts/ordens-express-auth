import { Injectable } from '@nestjs/common';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { CreateRequest, UpdateRequest } from './dtos';
import { firebaseApp } from 'libs';
@Injectable()
export class UsersService {
    async create(request: CreateRequest) {
        const { email, password } = request;
    
        const auth = getAuth(firebaseApp);
    
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
    
        return user?.uid
    }
}
