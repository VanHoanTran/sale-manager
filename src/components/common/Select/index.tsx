import { useState } from 'react';
import Options from './Options';
import { useFormContext } from 'react-hook-form';
import Toggle from './Toggle';

type Props = {
  name: string;
  options: string[];
};

const Select = ({ name, options, ...rest }: Props) => {
  const { getValues, setValue } = useFormContext();
  const [showOptions, setShowOptions] = useState(false);
  const currentSelection: string = getValues(name);

  const close = () => setShowOptions(false);
  const showHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowOptions(show => !show);
  };

  const handleSingleValueSelect = (option: string) => {
    setValue(name, option);
    close();
    return;
  };

  return (
    <div className="text-md relative block flex-shrink-0 text-left font-light">
      <Toggle
        show={showOptions}
        name={name}
        showHandler={showHandler}
        {...rest}
      />
      {
        <Options
          currentValue={currentSelection}
          show={showOptions}
          selectHandler={handleSingleValueSelect}
          options={options}
          close={close}
        />
      }
    </div>
  );
};

export default Select;
