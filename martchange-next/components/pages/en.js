'use client';

import Calculator from '../Calculator';
import locale from '../../lib/locales/en';

export default function LocaleCalculator() {
  return <Calculator locale={locale} />;
}
