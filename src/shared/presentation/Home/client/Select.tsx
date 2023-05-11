'use client';

import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';

export const SelectFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger
        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        aria-label="filtro por períodos"
      >
        <Select.Value placeholder="Período" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content
        position="popper"
        className="z-[1] rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      >
        <Select.Viewport className="rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800">
          <Select.Group>
            <Select.Item
              value="last-day"
              className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <Select.ItemText>Último dia</Select.ItemText>
              <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="last-week"
              className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <Select.ItemText>Últimos 7 dias</Select.ItemText>
              <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="last-month"
              className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <Select.ItemText>Últimos 30 dias</Select.ItemText>
              <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="last-year"
              className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <Select.ItemText>Último ano</Select.ItemText>
              <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  );
};
