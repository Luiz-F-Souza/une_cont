import { FastifyReply, FastifyRequest } from "fastify"
import { PrismaInvocesRepository } from "../../repositories/prisma/invoices-repository"
import { getYearSummaryUseCase } from "../../use-cases/getYearSummary"

export async function getYearSummary(request: FastifyRequest, reply: FastifyReply) {
  const invoicesRepository = new PrismaInvocesRepository()
  const useCase = new getYearSummaryUseCase(invoicesRepository)

  const { summary } = await useCase.execute()

  return reply.status(200).send({
    data: summary,
  })
}
