import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { PrismaInvocesRepository } from "../../repositories/prisma/invoices-repository"
import { getAllInvoicesUseCase } from "../../use-cases/getAllInvoices"

export async function getListOfInvoices(
  request: FastifyRequest,
  reply: FastifyReply
) {

  const invoicesRepository = new PrismaInvocesRepository()
  const useCase = new getAllInvoicesUseCase(invoicesRepository)

  const { invoices } = await useCase.execute()

  return reply.status(200).send({
    data: invoices,
  })
}
