import { Module } from "@nestjs/common";
import { EncryptionService } from "services/Encription.service";


@Module({
  providers: [EncryptionService],
  exports: [EncryptionService]
})

export class EncryptionModule {}