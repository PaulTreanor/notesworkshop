import { useState } from 'react';
import type { ruleType } from './rules/rules.type'
import { useRules } from './context/rulesContext';
import ConditionsPrinter from './rules/ConditionsPrinter';
import EffectsPrinter from './rules/EffectsPrinter';

const initialRule: ruleType = {
  rulesLabel: '',
  conditions: [],
  effects: []
}

// Fix these types at some point

type effectsArrayType = Array<
  | { type: 'appendTextToItem'; value: string }
  | { type: 'makeItemBold'; value: boolean }
  | { type: 'replaceWith'; value: string }
  >;

type conditionsArrayType = Array<
  | { type: 'isDone'; value: boolean }
  | { type: 'includesStrings'; value: string[] }
  | { type: 'startsWith'; value: string }
  >;


function RulesLabelFormSection({ rule, setRule }: { rule: ruleType, setRule: (rule: ruleType) => void }) {
  return (
    <div className="mb-4">
      <label htmlFor="ruleLabel" className="block text-lg font-medium text-gray-700">
        Rule Label
      </label>
      <input
        type="text"
        id="ruleLabel"
        name="ruleLabel"
        size={30}
        value={rule.rulesLabel}
        onChange={(e) => setRule({ ...rule, rulesLabel: e.target.value })}
        className="border-2 border-gray-300 rounded-md p-1"
      />
    </div>
  )
}

export default function NewRulesForm({ closeModal }: { closeModal: () => void }) {
  const { addRule } = useRules();

  const [rule, setRule] = useState<ruleType>(initialRule);
  const [conditionType, setConditionType] = useState<string>('');
  const [conditionValue, setConditionValue] = useState<string>('');
  const [effectType, setEffectType] = useState<string>('');
  const [effectValue, setEffectValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRule(rule);
    setRule(initialRule);
    setConditionType('');
    setConditionValue('');
    setEffectType('');
    setEffectValue('');
    closeModal();
  };

  const handleAddCondition = () => {
    let newCondition: conditionsArrayType[number];
    if (conditionType === 'isDone') {
      newCondition = { type: 'isDone', value: true };
    } else if (conditionType === 'isDone-not') {
      newCondition = { type: 'isDone', value: false };
    } else if (conditionType === 'includesStrings') {
      newCondition = { type: 'includesStrings', value: [conditionValue] };
    } else if (conditionType === 'startsWith') {
      newCondition = { type: 'startsWith', value: conditionValue };
    } else {
      return; // Invalid condition type
    }
    setRule({ ...rule, conditions: [...rule.conditions, newCondition] });
    setConditionType('');
    setConditionValue('');
  };

  const handleAddEffect = () => {
    let newEffect: effectsArrayType[number];
    if (effectType === 'appendTextToItem') {
      newEffect = { type: 'appendTextToItem', value: effectValue };
    } else if (effectType === 'makeItemBold') {
      newEffect = { type: 'makeItemBold', value: effectValue === 'true' };
    } else if (effectType === 'replaceWith') {
      newEffect = { type: 'replaceWith', value: effectValue };
    } else {
      return; // Invalid effect type
    }
    setRule({ ...rule, effects: [...rule.effects, newEffect] });
    setEffectType('');
    setEffectValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <RulesLabelFormSection rule={rule} setRule={setRule} />
        <div className="mb-4">
          <label htmlFor="conditions" className="block text-lg font-medium text-gray-700">
            Conditions
          </label>
          {/* Display added conditions */}
          <ul className="mt-2">
            <ConditionsPrinter conditions={rule.conditions} />
          </ul>
          <div className="flex items-center space-x-2">
            <span>If item</span>
            <select
              value={conditionType}
              onChange={(e) => setConditionType(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-1"
            >
              <option value="">Select condition</option>
              <option value="isDone">is done</option>
              <option value="isDone-not">is not done</option>
              <option value="includesStrings">contains text</option>
              <option value="startsWith">starts with</option>
            </select>
            {(conditionType === 'includesStrings' || conditionType === 'startsWith') && (
              <input
                type="text"
                value={conditionValue}
                onChange={(e) => setConditionValue(e.target.value)}
                placeholder={conditionType === 'includesStrings' ? "enter, comma, separated, text" : "enter starting text"}
                className="border-2 border-gray-300 rounded-md p-1"
              />
            )}
            <button type="button" onClick={handleAddCondition} className="bg-blue-500 text-white px-2 py-1 rounded">
              Add Condition
            </button>
          </div>
        </div>          

        {/* EFFECTS */}
        <div className="mb-4">
          <label htmlFor="effects" className="block text-lg font-medium text-gray-700">
            Effects
          </label>
          {/* Display added effects */}
          <ul className="mt-2">
            <EffectsPrinter effects={rule.effects} />
          </ul>
          <div className="flex items-center space-x-2">
            <select
              value={effectType}
              onChange={(e) => setEffectType(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-1"
            >
              <option value="">Select effect</option>
              <option value="appendTextToItem">Append text</option>
              <option value="makeItemBold">Make item bold</option>
              <option value="replaceWith">Replace with</option>
            </select>
            {(effectType === 'appendTextToItem' || effectType === 'replaceWith') && (
              <input
                type="text"
                value={effectValue}
                onChange={(e) => setEffectValue(e.target.value)}
                placeholder={effectType === 'appendTextToItem' ? "Enter text to append" : "Enter replacement text"}
                className="border-2 border-gray-300 rounded-md p-1"
              />
            )}
            {effectType === 'makeItemBold' && (
              <select
                value={effectValue}
                onChange={(e) => setEffectValue(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-1"
              >
                <option value="true">Bold</option>
                <option value="false">Not bold</option>
              </select>
            )}
            <button type="button" onClick={handleAddEffect} className="bg-blue-500 text-white px-2 py-1 rounded">
              Add Effect
            </button>
          </div>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">
          Save Rule 
        </button>
      </form>
    </div>
  )
}
