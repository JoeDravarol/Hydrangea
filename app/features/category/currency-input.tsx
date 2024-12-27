import type { HandleUpdateInput } from './types/component';
import { CurrencyAmountButton } from '~/components/display/currency-amount';
import { cn } from '~/utils/cn';
import CalculatorButton from './calculator-button';
import useCurrencyInput from './hooks/use-input-currency';

interface CurrentInputProps {
  inputValue: string;
  handleUpdateInput: HandleUpdateInput;
}

export default function CurrencyInput({ inputValue, handleUpdateInput }: CurrentInputProps) {
  const {
    inputRef,
    isEditing,
    numberInputValue,
    handleKeyDown,
    handleFocusIn,
    handleFocusOut,
  } = useCurrencyInput(inputValue, handleUpdateInput);

  return (
    <div
      id="ember23"
      className={cn('ynab-new-currency-input', {
        'is-focused is-editing': isEditing,
      })}
    >
      <CalculatorButton />
      <div className="input-wrapper">
        <input
          id="ember24"
          className="ember-text-field ember-view"
          type="text"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
        />
        <CurrencyAmountButton
          amount={numberInputValue}
          onClick={handleFocusIn}
        />
      </div>
    </div>
  );
}
