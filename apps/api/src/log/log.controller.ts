import { Controller, Get, Inject, Post } from '@nestjs/common'

import { LogService } from '@/log/log.service'

@Controller('log')
export class LogController {
  constructor(@Inject(LogService) private readonly logService: LogService) {}

  @Post()
  async create() {
    return this.logService.create({})
  }

  @Get('count')
  async count() {
    return this.logService.count()
  }
}
