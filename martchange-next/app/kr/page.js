import LocaleCalculator from '../../components/pages/kr';
import locale from '../../lib/locales/kr';

export const metadata = { title: locale.title };

export default function Page() {
  return <LocaleCalculator />;
}
