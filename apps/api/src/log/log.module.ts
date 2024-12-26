import { Module } from '@nestjs/common'

import { PrismaModule } from '@/prisma/prisma.module'

import { LogResolver } from '@/log/log.resolver'
import { LogService } from '@/log/log.service'

@Module({
  imports: [PrismaModule],
  providers: [LogService, LogResolver],
  exports: [LogService],
})
export class LogModule {}
