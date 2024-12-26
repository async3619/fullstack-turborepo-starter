import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'

import { gql } from 'graphql-tag'
import request from 'supertest-graphql'

import { Log } from '@/__generated__/log/log.model'

import { PrismaService } from '@/prisma/prisma.service'

import { LogModule } from '@/log/log.module'

import { AppModule } from '@/app.module'

import { prismaService } from './setup-tests.e2e'

describe('LogResolver (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, LogModule],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaService)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await prismaService.log.deleteMany()
  })

  describe('logCount (Query)', () => {
    it('should return the count of logs', async () => {
      await request(app.getHttpServer())
        .mutate(gql`
          mutation {
            createLog {
              id
            }
          }
        `)
        .expectNoErrors()

      const response = await request<{ logCount: number }>(app.getHttpServer())
        .query(gql`
          query {
            logCount
          }
        `)
        .expectNoErrors()

      expect(response.data.logCount).toBe(1)
    })
  })

  describe('createLog (Mutation)', () => {
    it('should create a log', async () => {
      const response = await request<{ createLog: Log }>(app.getHttpServer())
        .mutate(gql`
          mutation {
            createLog {
              id
            }
          }
        `)
        .expectNoErrors()

      expect(response.data.createLog).toEqual(
        expect.objectContaining({ id: expect.any(String) }),
      )
    })
  })
})
