import { effectsArrayType } from "./rules.type";

function EffectsPrinter({effects}: {effects: effectsArrayType}) {
  return effects.map((effect, index) => (
    <li key={index}>
      {effect.type === 'appendTextToItem'
        ? `Append text: "${effect.value}"`
        : `Make item ${effect.value ? 'bold' : 'not bold'}`}
    </li>
  ))
}

export default EffectsPrinter;