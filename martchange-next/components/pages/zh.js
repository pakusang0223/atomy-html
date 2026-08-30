'use client';

import Calculator from '../Calculator';
import locale from '../../lib/locales/zh';

export default function LocaleCalculator() {
  return <Calculator locale={locale} />;
}
