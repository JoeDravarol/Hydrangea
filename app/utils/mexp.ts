import Mexp from 'math-expression-evaluator';
import { formatToTwoDecimalPlaces } from './format';

const mexp = new Mexp();

export function mathEval(str: string) {
  try {
    const value = mexp.eval(str);
    const isInvalidValue
      = Number.isNaN(value) || value === Infinity || value === -Infinity;

    return isInvalidValue ? 0 : value;
  }
  catch {
    return 0;
  }
}

export function mathEvalToTwoDecimal(str: string) {
  return formatToTwoDecimalPlaces(mathEval(str));
}
