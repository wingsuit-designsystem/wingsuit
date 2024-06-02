'use client';

import React from 'react';
import { Tab, Tabs } from '@nextui-org/tabs';

export default function WingsuitTabView({
  children,
  variant,
  color,
}: {
  children: React.ReactNode;
  variant: 'solid' | 'light' | 'underlined';
  color: string;
}) {
  return (
    <Tabs variant={variant} color={color} fullWidth items={children}>
      {(item) => {
        if (item.key) {
          return (
            <Tab key={item.key} title={item.props.header}>
              {item.props.children}
            </Tab>
          );
        }
        return null;
      }}
    </Tabs>
  );
}
