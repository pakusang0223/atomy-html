import LocaleCalculator from '../../components/pages/zh';
import locale from '../../lib/locales/zh';

export const metadata = { title: locale.title };

export default function Page() {
  return <LocaleCalculator />;
}
