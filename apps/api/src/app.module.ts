import { Module } from '@nestjs/common'

import { PrismaModule } from '@/prisma/prisma.module'

import { LogModule } from '@/log/log.module'

import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'

@Module({
  imports: [PrismaModule, LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
