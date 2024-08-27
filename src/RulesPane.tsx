import { useState } from 'react';
import NewRuleModal from './NewRuleModal';
import { useRules } from './context/rulesContext';
import ConditionsPrinter from './rules/ConditionsPrinter';
import EffectsPrinter from './rules/EffectsPrinter';



export default function RulesPane() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { rules } = useRules();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-2/5 border-4 border-purple-600 p-4 overflow-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Rules</h2>
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add New Rule
        </button>
      </div>
      {rules.map((rule, index) => (
        <div key={index}>
          <h3 className="text-xl font-bold">{rule.rulesLabel}</h3>
          <h4 className="text-lg font-semibold">Conditions...</h4>
          <p>
            <ConditionsPrinter conditions={rule.conditions} />
          </p>
          <h4 className="text-lg font-semibold">Effects...</h4>
          <p>
            <EffectsPrinter effects={rule.effects} />
          </p>
        </div>
      ))}

      {isModalOpen && (
        <NewRuleModal closeModal={closeModal} />
      )}
    </div>
  )
}