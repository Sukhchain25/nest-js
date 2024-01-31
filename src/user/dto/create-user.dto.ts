import { Gender } from '../schema/user.schema';

export class CreateUserDto {
  readonly Name: string;
  readonly Email: string;
  readonly Password: string;
  readonly Phone: number;
  readonly Gender: Gender;
}
