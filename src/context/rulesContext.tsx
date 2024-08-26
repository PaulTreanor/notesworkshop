import  { createContext, useContext, useState, ReactNode } from 'react';
import type { ruleType } from '../rules/rules.type';

interface RulesContextType {
  rules: ruleType[];
  addRule: (rule: ruleType) => void;
  updateRule: (index: number, rule: ruleType) => void;
  deleteRule: (index: number) => void;
}

const RulesContext = createContext<RulesContextType | undefined>(undefined);

export function RulesProvider({ children }: { children: ReactNode }) {
  const [rules, setRules] = useState<ruleType[]>([]);

  const addRule = (rule: ruleType) => {
    setRules([...rules, rule]);
  };

  const updateRule = (index: number, rule: ruleType) => {
    const newRules = [...rules];
    newRules[index] = rule;
    setRules(newRules);
  };

  const deleteRule = (index: number) => {
    const newRules = rules.filter((_, i) => i !== index);
    setRules(newRules);
  };

  return (
    <RulesContext.Provider value={{ rules, addRule, updateRule, deleteRule }}>
      {children}
    </RulesContext.Provider>
  );
}

export function useRules() {
  const context = useContext(RulesContext);
  if (context === undefined) {
    throw new Error('useRules must be used within a RulesProvider');
  }
  return context;
}