'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { type ReactNode } from 'react';
import { ptBR } from '@/lib/translations';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider search={{ SearchDialog }} i18n={{ locale: 'pt-BR', translations: ptBR }}>
      {children}
    </RootProvider>
  );
}
