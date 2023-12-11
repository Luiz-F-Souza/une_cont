

import { invoices } from "@prisma/client";
import { InvoicesInterface } from "../repositories/@interface/invoices-interface";
import {Dictionary, groupBy} from 'lodash'
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";



interface ReplyType {
  invoices:  Dictionary<invoices[] | null>,
}

export class getAllInvoicesUseCase {

  constructor(private invoicesRepository: InvoicesInterface) { }

  async execute(): Promise<ReplyType> {

    const invoices = await this.invoicesRepository.getAllInvoices()

  
    const invoicesPerMonth = groupBy(invoices, (invoice) => {
        return format(invoice.createdAt, 'MMMM', {locale: ptBR})
    })
    return {
        invoices: invoicesPerMonth,
    }
  }

}