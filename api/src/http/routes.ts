import { FastifyInstance } from "fastify";
import { getListOfInvoices } from "./controllers/getListOfInvoices";





export async function appRoutes (app: FastifyInstance) {

  app.get('/all-invoices',getListOfInvoices)

}