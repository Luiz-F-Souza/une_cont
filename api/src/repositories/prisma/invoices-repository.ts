import { invoices } from "@prisma/client";
import { InvoicesInterface } from "../@interface/invoices-interface";
import { prisma } from "../../lib/prisma";



export class PrismaInvocesRepository implements InvoicesInterface {
    async getInvoicesYearSummary(): Promise<{} | null> {
        return {}
    }
    
    async getAllInvoices(): Promise<invoices[] | null>{


        const invoices = await prisma.invoices.findMany({
            orderBy: {createdAt: 'desc'}
        })
        return invoices
    }
}