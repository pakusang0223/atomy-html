'use client';

import Calculator from '../Calculator';
import locale from '../../lib/locales/bd';

export default function LocaleCalculator() {
  return <Calculator locale={locale} />;
}
