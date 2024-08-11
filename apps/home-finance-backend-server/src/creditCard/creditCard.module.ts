import { Module } from "@nestjs/common";
import { CreditCardModuleBase } from "./base/creditCard.module.base";
import { CreditCardService } from "./creditCard.service";
import { CreditCardController } from "./creditCard.controller";

@Module({
  imports: [CreditCardModuleBase],
  controllers: [CreditCardController],
  providers: [CreditCardService],
  exports: [CreditCardService],
})
export class CreditCardModule {}
