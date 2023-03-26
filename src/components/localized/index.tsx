import English from '@i18n/en-US.json';
import Portuguese from '@i18n/pt-BR.json';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';

type Props = PropsWithChildren<{}>;

const DEFAULT_LOCALE = 'pt-BR';

export default function Localized({ children }: Props) {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(navigator.language);
  }, []);

  const messages = useMemo(() => {
    switch (locale) {
      case 'en-US':
        return English;
      case 'pt-BR':
      default:
        return Portuguese;
    }
  }, [locale]);

  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
}
