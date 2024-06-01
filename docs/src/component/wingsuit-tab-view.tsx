'use client';

import {TabPanel, TabView} from 'primereact/tabview';
import React from 'react';

export default function WingsuitTabView({
                                       children,
                                     }: {
  children: React.ReactNode;
}) {

  return (
    <TabView>
      {children}
    </TabView>
  );
}
