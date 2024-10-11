import { effectsArrayType } from "./rules.type";

function EffectsPrinter({effects}: {effects: effectsArrayType}) {
  return effects.map((effect, index) => {
    let effectText;
    switch (effect.type) {
      case 'appendTextToItem':
        effectText = `Append text: "${effect.value}"`;
        break;
      case 'makeItemBold':
        effectText = `Make item ${effect.value ? 'bold' : 'not bold'}`;
        break;
      case 'replaceWith':
        effectText = `Replace with: "${effect.value}"`;
        break;
      default:
        effectText = `Unknown effect: ${effect.type}`;
    }
    return <li key={index}>{effectText}</li>;
  });
}

export default EffectsPrinter;