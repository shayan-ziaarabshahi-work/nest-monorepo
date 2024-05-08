import { Module } from '@nestjs/common';
import { DbModule } from '@app/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserDocument, UserSchema } from './models/user.schema';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    DbModule,
    DbModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}