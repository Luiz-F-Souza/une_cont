import { BodyBluredOverlay } from "@/components/BodyBluredOverlay"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { twMerge } from "tailwind-merge"

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const FiltersModal = ({ isOpen, handleClose }: Props) => {
  return (
    <>
      <div
        className={twMerge(
          `fixed z-10 top-0 bottom-0 -right-full 
          w-1/2 md:w-[30%] 
          transition-all 
          bg-white shadow-sm p-4
          flex flex-col gap-4
          `,
          isOpen && "right-0"
        )}
      >
        <div className=" grid grid-cols-2 mb-6">
          <h3 className="font-semibold text-lg">FILTROS</h3>
          <IoIosCloseCircleOutline className="w-8 h-8 hover:cursor-pointer ml-auto " />
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Por ano</p>
          <select className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md">
            <option value="all">Todos</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
          </select>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Mês de emissão</p>
          <select className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md">
            <option value="all">Todos</option>
            <option value="dez">Dezembro</option>
            <option value="nov">Novembro</option>
          </select>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Mês da cobrança</p>
          <select className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md">
            <option value="all">Todos</option>
            <option value="dez">Dezembro</option>
            <option value="nov">Novembro</option>
          </select>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Mês do pagamento</p>
          <select className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md">
            <option value="all">Todos</option>
            <option value="dez">Dezembro</option>
            <option value="nov">Novembro</option>
          </select>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p>Status da nota</p>
          <select className="p-2 text-sm text-gray-600 bg-gray-100 border-1 rounded-md">
            <option value="Emitida">Emitida</option>
            <option value="Cobrança realizada">Cobrança realizada</option>
            <option value="Pagamento em atraso">Pagamento em atraso</option>
            <option value="Pagamento realizado">Pagamento realizado</option>
          </select>
        </div>

        <button
          className="
            bg-brand-orange-500 hover:bg-brand-orange-200 
            w-full rounded-md 
            py-2  mt-auto 
            font-bold 
            "
        >
          CONFIRMAR
        </button>
      </div>

      {isOpen && <BodyBluredOverlay handleClose={handleClose} />}
    </>
  )
}
