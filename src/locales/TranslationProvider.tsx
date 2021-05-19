import { ChildrenProps } from '@/types/components/ChildrenProps';
import { useRouter } from 'next/router';

import pt from './pt';
import en from './en';
import { LocaleContext } from './translationContext';

export default function TranslationProvider({ children }: ChildrenProps) {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === 'en' ? en : pt;

  return (
    <>
      <LocaleContext.Provider value={{ translation }}>
        {children}
      </LocaleContext.Provider>
    </>
  );
}
