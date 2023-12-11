import { FastifyInstance } from "fastify";
import { getListOfInvoices } from "./controllers/getListOfInvoices";
import { getYearSummary } from "./controllers/getYearSummary";





export async function appRoutes (app: FastifyInstance) {

  app.get('/all-invoices',getListOfInvoices)
  app.get('/year-summary', getYearSummary)

}