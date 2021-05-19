import { createContext, useContext } from 'react';
import { localeContextProps } from '@/types/components/LocaleContextProps';
import pt from './pt';

export const LocaleContext = createContext<localeContextProps>({ translation: pt });

export function translationContext() {
  return useContext(LocaleContext);
}