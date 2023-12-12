export const getListOfInvoices = async () => {

    const request = new Request("http://localhost:8888/all-invoices",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    })
    
    const response = await fetch(request)
    const { data: listOfInvoices } = (await response.json()) 
    
    return { listOfInvoices }
  }