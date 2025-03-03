import { ReactElement } from 'react';

type ProductType = 'HIVE' | 'CONDUCTOR' | 'YOGA' | 'ENVELOP' | 'INSPECTOR' | 'CODEGEN' | 'MESH' | 'TOOLS' | 'MODULES' | 'ESLINT' | 'CONFIG' | 'SCALARS' | 'SOFA' | 'STITCHING' | 'ANGULAR' | 'WHATSAPP' | 'KITQL' | 'SSE' | 'WS' | 'FETS' | 'HELTIN' | 'NEXTRA';
declare const PRODUCTS: Record<ProductType, {
    name: string;
    title: string;
    href: `https://${string}`;
    logo: (props: {
        className?: string;
    }) => ReactElement;
    primaryColor: `#${string}`;
}>;

export { PRODUCTS, type ProductType };
