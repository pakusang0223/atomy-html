import LocaleCalculator from '../../components/pages/ja';
import locale from '../../lib/locales/ja';

export const metadata = { title: locale.title };

export default function Page() {
  return <LocaleCalculator />;
}
