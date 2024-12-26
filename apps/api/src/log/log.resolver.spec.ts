import { Test, TestingModule } from '@nestjs/testing'

import { createMock } from '@golevelup/ts-jest'

import { Log } from '@/__generated__/log/log.model'

import { LogService } from '@/log/log.service'

import { LogResolver } from './log.resolver'

describe('LogResolver', () => {
  let resolver: LogResolver
  let logService: LogService

  beforeEach(async () => {
    logService = createMock<LogService>()

    const module: TestingModule = await Test.createTestingModule({
      providers: [LogResolver, { provide: LogService, useValue: logService }],
    }).compile()

    resolver = module.get<LogResolver>(LogResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  describe('logCount', () => {
    it('should return the count of logs', async () => {
      const count = 1
      jest.spyOn(logService, 'count').mockResolvedValue(count)

      expect(await resolver.logCount()).toBe(count)
    })
  })

  describe('createLog', () => {
    it('should create a log', async () => {
      const log: Log = {
        id: 1,
        createdAt: new Date(),
      }

      jest.spyOn(logService, 'create').mockResolvedValue(log)

      expect(await resolver.createLog()).toBe(log)
    })
  })
})
