import CalculatorIcon from './calculator-icon';

export default function CalculatorButton() {
  return (
    <button
      tabIndex={-1}
      className="button-calculator"
      aria-hidden="true"
      type="button"
    >
      <CalculatorIcon />
    </button>
  );
}
