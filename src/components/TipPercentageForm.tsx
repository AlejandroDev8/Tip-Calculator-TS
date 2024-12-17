import type {Dispatch, SetStateAction} from "react"
import { tipOptions } from "../data/databaseTip"

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>
}

export const TipPercentageForm = ({setTip} : TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map(tip =>(
          <div
            key={tip.id}
            className="flex gap-2"
          >
            <label htmlFor={tip.id}>{tip.label}</label>
            <input 
              type="radio"
              name="tip"
              id={tip.id}
              value={tip.value}
              onChange={e => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
