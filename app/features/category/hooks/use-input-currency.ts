import type { HandleUpdateInput } from '../types/component';
import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { mathEvalToTwoDecimal } from '~/utils/mexp';

export default function useCurrencyInput(inputValue: string, callback: HandleUpdateInput) {
  const [isEditing, setIsEditing] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isNegative = Number(inputValue) < 0;
  const numberInputValue = Number(inputValue);

  React.useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.select();
    }
  }, [isEditing]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const result = mathEvalToTwoDecimal(event.currentTarget.value);

      _handleUpdateInputValue(result);
    }

    if (event.key === 'Escape') {
      setIsEditing(false);
    }
  }

  function handleFocusIn() {
    setIsEditing(true);
  }

  function handleFocusOut() {
    setIsEditing(false);
  }

  // Internal use only
  function _handleUpdateInputValue(value: string) {
    if (inputRef.current) {
      inputRef.current.value = value;
    }

    callback(value);
  }

  function _handleClickOutside() {
    if (inputRef.current) {
      const result = mathEvalToTwoDecimal(inputRef.current.value);
      _handleUpdateInputValue(result);
    }
  }

  useOnClickOutside(inputRef, _handleClickOutside);

  return {
    inputRef,
    isEditing,
    isNegative,
    numberInputValue,
    handleKeyDown,
    handleFocusIn,
    handleFocusOut,
  };
}
