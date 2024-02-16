import { useMultiplestepForm } from '@/contexts/multi-step-provider'

import { cn } from '@/lib/utils'

const menuItems = [
  { label: 'Step 1', value: 0 },
  { label: 'Step 2', value: 1 },
  { label: 'Step 3', value: 2 },
  { label: 'Step 4', value: 3 },
]

export function MenuStep() {
  const { currentStepIndex } = useMultiplestepForm()

  return (
    <ul className="flex gap-4 text-lg font-medium sm:text-2xl md:flex-col">
      {menuItems.map((item) => (
        <li
          key={item.value}
          className={cn(currentStepIndex === item.value ? 'text-white' : 'text-white/40')}
        >
          {item.label}
        </li>
      ))}
    </ul>
  )
}
