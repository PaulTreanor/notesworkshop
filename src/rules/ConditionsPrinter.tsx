import { conditionsArrayType } from './rules.type'

function ConditionsPrinter({ conditions }: { conditions: conditionsArrayType }) {
  return conditions.map((condition, index) => (
    <li key={index}>
      {condition.type === 'isDone'
        ? `if item is ${condition.value ? 'done' : 'not done'}`
        : `if item contains "${condition.value.join(', ')}"`}
    </li>
  ))
}

export default ConditionsPrinter;