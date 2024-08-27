import { conditionsArrayType } from './rules.type'

function ConditionsPrinter({ conditions }: { conditions: conditionsArrayType }) {
  return conditions.map((condition, index) => {
    let conditionText: string;

    switch (condition.type) {
      case 'isDone':
        conditionText = `if item is ${condition.value ? 'done' : 'not done'}`;
        break;
      case 'includesStrings':
        conditionText = `if item contains "${condition.value.join(', ')}"`;
        break;
      case 'startsWith':
        conditionText = `if item starts with "${condition.value}"`;
        break;
      default:
        conditionText = 'Unknown condition';
    }

    return <li key={index}>{conditionText}</li>;
  });
}

export default ConditionsPrinter;