import path from 'node:path'

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { PrismaModule } from '@/prisma/prisma.module'

import { LogModule } from '@/log/log.module'

import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:
        process.env.NODE_ENV === 'production'
          ? false
          : path.join(process.cwd(), '..', '..', 'schema.gql'),
    }),
    PrismaModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
