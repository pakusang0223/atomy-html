import LocaleCalculator from '../../components/pages/bd';
import locale from '../../lib/locales/bd';

export const metadata = { title: locale.title };

export default function Page() {
  return <LocaleCalculator />;
}
