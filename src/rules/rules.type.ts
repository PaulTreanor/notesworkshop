
// *** Condition Types ***
type includsStringConditionType = {
  type: 'includesStrings',
  value: string[]
}

type startsWithConditionType = {
  type: 'startsWith',
  value: string
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

type replaceWithEffectType = {
  type: 'replaceWith',
  value: string
}

// *** Conditions Array Type ***

type conditionsArrayType = (includsStringConditionType | isDoneConditionType | startsWithConditionType)[]

// *** Effects Array Type ***

type effectsArrayType = (appendTextToItemEffectType | makeItemBoldEffectType | replaceWithEffectType)[]

// *** Rule Type ***

type ruleType = {
  rulesLabel: string,
  conditions: conditionsArrayType,
  effects: effectsArrayType
}

export type { ruleType, conditionsArrayType, effectsArrayType };