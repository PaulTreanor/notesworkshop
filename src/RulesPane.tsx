import { useState } from 'react';
import NewRuleModal from './newRuleModal';

export default function RulesPane() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const saveRule = () => {
    console.log('saveRule');
  }

  return (
    <div className="h-2/5 border-4 border-purple-600 p-4 overflow-auto">
      <div>
        <h2 className="text-2xl font-bold mb-4">Rules</h2>
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add New Rule
        </button>
      </div>

      {isModalOpen && (
        <NewRuleModal closeModal={closeModal} saveRule={saveRule} />
      )}
    </div>
  )
}