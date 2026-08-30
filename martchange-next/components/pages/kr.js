'use client';

import Calculator from '../Calculator';
import locale from '../../lib/locales/kr';

export default function LocaleCalculator() {
  return <Calculator locale={locale} />;
}
