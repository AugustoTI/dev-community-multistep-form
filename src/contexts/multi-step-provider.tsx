import * as React from 'react'

interface MultiStepContextData {
  currentStepIndex: number
  steps: number
  isFirstStep: boolean
  isLastStep: boolean
  goTo(step: number): void
  nextStep(): void
  previousStep(): void
}

const MultiStepContext = React.createContext({} as MultiStepContextData)

interface MultiStepProviderProps {
  children: React.ReactNode
  steps: number
}

export function MultiStepProvider({ children, steps }: MultiStepProviderProps) {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0)

  function nextStep() {
    if (currentStepIndex < steps - 1) {
      setCurrentStepIndex((i) => i + 1)
    }
  }

  function previousStep() {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((i) => i - 1)
    }
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return (
    <MultiStepContext.Provider
      value={{
        currentStepIndex,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps - 1,
        steps,
        goTo,
        nextStep,
        previousStep,
      }}
    >
      {children}
    </MultiStepContext.Provider>
  )
}

export const useMultiplestepForm = () => React.useContext(MultiStepContext)
