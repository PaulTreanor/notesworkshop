
// *** Condition Types ***
type includsStringConditionType = {
  type: 'includesStrings',
  value: string[]
}

type isDoneConditionType = {
  type: 'isDone',
  value: boolean
}

// type startsWithConditionType = {
//   type: 'startsWith',
//   value: string
// }

// *** Effect Types ***

type appendTextToItemEffectType = {
  type: 'appendTextToItem',
  value: string
}

type makeItemBoldEffectType = {
  type: 'makeItemBold',
  value: boolean
}

// *** Conditions Array Type ***

type conditionsArrayType = (includsStringConditionType | isDoneConditionType)[]

// *** Effects Array Type ***

type effectsArrayType = (appendTextToItemEffectType | makeItemBoldEffectType)[]

// *** Rule Type ***

type ruleType = {
  rulesLabel: string,
  conditions: conditionsArrayType,
  effects: effectsArrayType
}

export type { ruleType };