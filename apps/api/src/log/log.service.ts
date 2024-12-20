import { Inject, Injectable } from '@nestjs/common'

import { Prisma } from '@prisma/client'

import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class LogService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(data: Prisma.LogCreateInput) {
    return this.prismaService.log.create({ data })
  }

  async count() {
    return this.prismaService.log.count()
  }
}
