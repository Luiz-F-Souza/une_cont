"use client"

import { BodyBluredOverlay } from "@/components/BodyBluredOverlay"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { twMerge } from "tailwind-merge"
import { useRouter, useSearchParams } from "next/navigation"

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const FiltersModal = ({ isOpen, handleClose }: Props) => {
  const navigation = useRouter()
  const searchParams = useSearchParams()

  const searchParamsAsString = searchParams.toString()
  const hasAnyQuery = searchParamsAsString.length > 0

  const handlePushQuery = (key: string, value: string) => {
    if (hasAnyQuery) {
      const hasCurrentKeyRegistered = searchParams.has(key)
      if (hasCurrentKeyRegistered) {
        let regex = new RegExp(`(${key}=)[^&]*`)

        const newSearch = searchParamsAsString.replace(regex, `${key}=${value}`)

        navigation.replace(`?${newSearch}`)

        return
      }

      navigation.replace(`?${searchParams}&${key}=${value}`)
      return
    }

    navigation.replace(`?${key}=${value}`)
  }

  const clearQuerys = () => {
    navigation.replace("?")
  }

  return (
    <>
      <div
        className={twMerge(
          `fixed z-50 top-0 bottom-0 -right-full 
          w-full sm:w-2/3
          max-w-lg
          transition-all 
          bg-white shadow-sm p-4
          flex flex-col gap-4
          `,
          isOpen && "right-0"
        )}
      >
        <div className=" grid grid-cols-2 mb-6">
          <h3 className="font-semibold text-lg">FILTROS</h3>
          <IoIosCloseCircleOutline
            className="w-8 h-8 hover:cursor-pointer ml-auto "
            onClick={handleClose}
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Por ano</p>
          <select
            className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md"
            onChange={(e) => {
              handlePushQuery("ano", e.currentTarget.value)
            }}
            value={searchParams.get("ano") ?? "0"}
          >
            <option value="0">Todos</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
          </select>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Mês de emissão</p>
          <select
            className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md"
            onChange={(e) => {
              handlePushQuery("emissao", e.currentTarget.value)
            }}
            value={searchParams.get("emissao") ?? "0"}
          >
            <option value="0">Todos</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Mês da cobrança</p>
          <select
            className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md"
            onChange={(e) => {
              handlePushQuery("cobrado", e.currentTarget.value)
            }}
            value={searchParams.get("cobrado") ?? "0"}
          >
            <option value="0">Todos</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Mês do pagamento</p>
          <select
            className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md"
            onChange={(e) => {
              handlePushQuery("pago-em", e.currentTarget.value)
            }}
            value={searchParams.get("pago-em") ?? "0"}
          >
            <option value="0">Todos</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Status da nota</p>
          <select
            className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md"
            onChange={(e) => {
              handlePushQuery("status", e.currentTarget.value)
            }}
            value={searchParams.get("status") ?? "0"}
          >
            <option value="0">Todos</option>
            <option value="1">Emitida</option>
            <option value="2">Cobrança realizada</option>
            <option value="3">Pagamento em atraso</option>
            <option value="4">Pagamento realizado</option>
          </select>
        </div>
        <button
          className="
            bg-slate-100
            hover:bg-slate-200
            w-full rounded-md 
            py-2  mt-auto 
            font-bold 
            "
          onClick={clearQuerys}
        >
          LIMPAR
        </button>
        <button
          className="
            bg-brand-orange-500 hover:bg-brand-orange-200 
            w-full rounded-md 
            py-2   
            font-bold 
            "
          onClick={handleClose}
        >
          CONFIRMAR
        </button>
      </div>

      {isOpen && <BodyBluredOverlay handleClose={handleClose} />}
    </>
  )
}
