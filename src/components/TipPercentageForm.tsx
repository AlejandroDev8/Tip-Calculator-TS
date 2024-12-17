import { tipOptions } from "../data/databaseTip"

export const TipPercentageForm = () => {
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
            />
          </div>
        ))}
      </form>
    </div>
  )
}
