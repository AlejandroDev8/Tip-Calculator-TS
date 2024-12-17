import { useMemo } from "react"
import { OrderItemType } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
  order: OrderItemType[]
  tip: number
}

export const OrderTotal = ({order, tip}: OrderTotalProps) => {

  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount])

  const totalAmount = useMemo(() => subtotalAmount - tipAmount, [subtotalAmount, tipAmount])

  return (
    <>
    <div className="space-y-3">
      <h2 className="font-black text-2xl">Totales y Propinas</h2>
      <p>
        Subtotal a pagar: {''}
        <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
      </p>
      <p>
        Propina {''}
        <span className="font-bold">{formatCurrency(tipAmount)}</span>
      </p>
      <p>
        Total a pagar: {''}
        <span className="font-bold">{formatCurrency(totalAmount)}</span>
      </p>
    </div>
    <button>

    </button>
    </>
  )
}
