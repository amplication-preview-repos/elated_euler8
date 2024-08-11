import { Module } from "@nestjs/common";
import { BankAccountModule } from "./bankAccount/bankAccount.module";
import { TransactionModule } from "./transaction/transaction.module";
import { CreditCardModule } from "./creditCard/creditCard.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { LoggerModule } from "./logger/logger.module";

@Module({
  controllers: [],
  imports: [
    LoggerModule,
    BankAccountModule,
    TransactionModule,
    CreditCardModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
