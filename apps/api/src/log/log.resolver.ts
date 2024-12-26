import { Inject } from '@nestjs/common'
import { Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Log } from '@/__generated__/log/log.model'

import { LogService } from '@/log/log.service'

@Resolver(() => Log)
export class LogResolver {
  constructor(@Inject(LogService) private readonly logService: LogService) {}

  @Query(() => Int)
  async logCount(): Promise<number> {
    return this.logService.count()
  }

  @Mutation(() => Log)
  async createLog(): Promise<Log> {
    return this.logService.create({})
  }
}
