import { Module } from '@nestjs/common'

import { PrismaModule } from '@/prisma/prisma.module'

import { LogController } from '@/log/log.controller'
import { LogService } from '@/log/log.service'

@Module({
  imports: [PrismaModule],
  providers: [LogService],
  exports: [LogService],
  controllers: [LogController],
})
export class LogModule {}
