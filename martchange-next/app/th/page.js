import LocaleCalculator from '../../components/pages/th';
import locale from '../../lib/locales/th';

export const metadata = { title: locale.title };

export default function Page() {
  return <LocaleCalculator />;
}
