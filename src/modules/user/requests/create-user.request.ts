import { IsIn, IsNotEmpty } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";
import { UserType } from "./user.type.enum";

export class CreateUserDTO {
  @ApiProperty({ required: true, example: "Jobayer Hossain" })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ required: true, example: "0185375354" })
  @IsNotEmpty()
  readonly phoneNumber: string;

  @ApiProperty({ required: true, example: "123456" })
  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  @IsIn([UserType.Admin, UserType.Customer])
  @ApiProperty({ required: true, example: UserType.Customer })
  type: UserType;
}
