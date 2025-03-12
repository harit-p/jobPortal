'use client'
import { useState } from 'react';
import { Checkbox, Combobox, ComboboxChevron, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';
import { IconSearch, IconSelector } from '@tabler/icons-react';
import { Icon } from '@tabler/icons-react';

interface MultiInputProps {
  title: string;
  icon: Icon;
  options: string[];
}

function MultiInput({ title, icon: Icon,options }: MultiInputProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [data, setData] = useState<string[]>(options);
  const [value, setValue] = useState<string[]>([]);

  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val: string) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value
    .slice(0, 1)
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));

  const filteredOptions = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} bg="mineShaft.9" active={value.includes(item)}>
        <Group className='border-none' gap="sm">
          <Checkbox 
            __size='xs' 
            color="#ffbd20"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            variant='unstyled'
            style={{ pointerEvents: 'none' }}
          />
          <span className='text-mine-shaft-300'>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <div className='bg-mine-shaft-950 !text-mine-shaft-100 border-none'>
      <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
        <Combobox.DropdownTarget>
          <PillsInput 
            variant='unstyled' 
            rightSection={<IconSelector />} 
            onClick={() => combobox.toggleDropdown()}
            leftSection={
              <div className='text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-2'>
               <Icon/>
              </div>
            }
          >
            <Pill.Group>
              {value.length > 0 ? (
                <>
                  {values}
                  {value.length > 1 && (
                    <Pill>+{value.length - 1} more</Pill>
                  )}
                </>
              ) : (
                <Input.Placeholder className='text-mine-shaft-200'>
                  {title}
                </Input.Placeholder>
              )}
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search options"
          />
          <Combobox.Options  style={{ overflowY: 'auto' }} >
            {filteredOptions}

            {!exactOptionMatch && search.trim().length > 0 && (
              <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
            )}

            {exactOptionMatch && search.trim().length > 0 && filteredOptions.length === 0 && (
              <Combobox.Empty>Nothing found</Combobox.Empty>
            )}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

export default MultiInput;