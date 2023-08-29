import { Meta } from '@storybook/addon-docs';
import { Spacing } from '@wingsuit-designsystem/storybook/docs';
export const tailwindFile = require('../../config/silo/tailwind.json');
export const spacing = tailwindFile.tailwind.theme.spacing;
export const width = tailwindFile.tailwind.theme.width;
export const height = tailwindFile.tailwind.theme.height;
export const maxWidth = tailwindFile.tailwind.theme.maxWidth;

<Meta title="Foundations/Scales"/>

# Scaling

## Tailwind `default` spacing scale
<Spacing spacing={spacing}></Spacing>

## Width scale
<Spacing spacing={width} classNamePrefix="w-"></Spacing>

## Max Width scale
<Spacing spacing={maxWidth} classNamePrefix="w-"></Spacing>

## Height scale
<Spacing spacing={height} classNamePrefix="h-" direction="vertical"></Spacing>
