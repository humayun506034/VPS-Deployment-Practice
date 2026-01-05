import { Module } from "@nestjs/common";

import { UserRepository } from "./auth.repository";
import { UsersController } from "./users.controller";

@Module({
    providers: [UserRepository],
    controllers: [UsersController],
})
export class UsersModule {}
