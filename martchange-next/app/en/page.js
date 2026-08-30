import LocaleCalculator from '../../components/pages/en';
import locale from '../../lib/locales/en';

export const metadata = { title: locale.title };

export default function Page() {
  return <LocaleCalculator />;
}
