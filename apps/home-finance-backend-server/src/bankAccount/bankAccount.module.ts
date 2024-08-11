import { Module } from "@nestjs/common";
import { BankAccountModuleBase } from "./base/bankAccount.module.base";
import { BankAccountService } from "./bankAccount.service";
import { BankAccountController } from "./bankAccount.controller";

@Module({
  imports: [BankAccountModuleBase],
  controllers: [BankAccountController],
  providers: [BankAccountService],
  exports: [BankAccountService],
})
export class BankAccountModule {}
