import NewRulesForm from './NewRulesForm';

type newRuleModalProps = {
  closeModal: () => void
}

export default function NewRuleModal({ closeModal }: newRuleModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-4/5 h-4/5 flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Add New Rule</h3>
            <div className="flex-grow">
              <NewRulesForm closeModal={closeModal}/>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-3 px-6 rounded mr-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
  )
}
