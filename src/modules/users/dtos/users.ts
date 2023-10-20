import { IsNotEmpty } from 'class-validator';
import { REQUIRED_FIELD } from 'constants/validation';

export class CreateRequest {  
  @IsNotEmpty({
    message: JSON.stringify({
      type: REQUIRED_FIELD,
      field: 'email',
    }),
  })
  email: string;

  @IsNotEmpty({
    message: JSON.stringify({
      type: REQUIRED_FIELD,
      field: 'password',
    }),
  })
  password: string; 
}

export class UpdateRequest {
  @IsNotEmpty({
    message: JSON.stringify({
      type: REQUIRED_FIELD,
      field: 'name',
    }),
  })
  name: string;
}
