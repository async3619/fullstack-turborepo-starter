import { execSync } from 'node:child_process'
import path from 'node:path'

import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql'
import { Client } from 'pg'

import { PrismaService } from '@/prisma/prisma.service'

let postgresContainer: StartedPostgreSqlContainer
let postgresClient: Client
let prismaService: PrismaService

beforeAll(async () => {
  postgresContainer = await new PostgreSqlContainer().start()

  postgresClient = new Client({
    host: postgresContainer.getHost(),
    port: postgresContainer.getPort(),
    database: postgresContainer.getDatabase(),
    user: postgresContainer.getUsername(),
    password: postgresContainer.getPassword(),
  })

  await postgresClient.connect()

  const databaseUrl = `postgresql://${postgresClient.user}:${postgresClient.password}@${postgresClient.host}:${postgresClient.port}/${postgresClient.database}`

  // Execute Prisma migrations
  execSync('./node_modules/.bin/prisma migrate dev', {
    env: { ...process.env, DATABASE_URL: databaseUrl },
    // eslint-disable-next-line unicorn/prefer-module
    cwd: path.join(__dirname, '..'),
  })

  prismaService = new PrismaService({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
  })
})

afterAll(async () => {
  await postgresClient.end()
  await postgresContainer.stop()
})

jest.setTimeout(60_000)
export { postgresClient, prismaService }
