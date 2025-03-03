export { default as Giscus } from '@giscus/react';
import { DocsThemeConfig } from 'nextra-theme-docs';
export { Bleed, Collapse, DocsThemeConfig, Navbar, NotFoundPage, useConfig, useTheme, useThemeConfig } from 'nextra-theme-docs';
export { createCatchAllMeta } from 'nextra/catch-all';
export { Callout, Cards, Code, FileTree, Mermaid, RemoteContent, Steps, Table, Tabs, Td, Th, Tr } from 'nextra/components';
export { useData, useMounted } from 'nextra/hooks';
export { useMDXComponents } from 'nextra/mdx';
import * as react from 'react';
import { ReactElement, ComponentProps, ReactNode } from 'react';
import * as url from 'url';
import { ImageProps } from 'next/image';
import { LinkProps } from 'next/link';
import { ReactPlayerProps } from 'react-player';
export { AngularLogo as CSAStarLevelOneIcon, AngularLogo as CaretSlimIcon, AngularLogo as CloseIcon, AngularLogo as LinkedInIcon, AngularLogo as MoonIcon, AngularLogo as MoreIcon, AngularLogo as SearchIcon, AngularLogo as ShareIcon, AngularLogo as TwitterIcon, AngularLogo as YouTubeIcon } from './logos.mjs';
export { DiscordIcon, GitHubIcon, InformationCircleIcon } from 'nextra/icons';
import * as react_jsx_runtime from 'react/jsx-runtime';
export { PRODUCTS } from './products.mjs';

declare const Anchor: react.ForwardRefExoticComponent<Omit<{
    href: string | url.UrlObject;
    as?: string | url.UrlObject;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    onMouseEnter?: react.MouseEventHandler<HTMLAnchorElement>;
    onTouchStart?: react.TouchEventHandler<HTMLAnchorElement>;
    onClick?: react.MouseEventHandler<HTMLAnchorElement>;
}, "href"> & Pick<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "style" | "title" | "target" | "rel" | "className"> & {
    href: string;
    children: react.ReactNode;
    newWindow?: boolean;
    sameSite?: boolean;
} & react.RefAttributes<HTMLAnchorElement>>;

type ButtonProps = Omit<ComponentProps<'a'>, 'href' | 'ref'> & {
    variant?: 'primary' | 'secondary';
    href: string;
};
declare const Button: ({ children, className, variant, ...props }: ButtonProps) => ReactElement;

interface IVideo {
    src: string;
    placeholder: string;
}
type ILink = Omit<LinkProps, 'href'> & Pick<ComponentProps<'a'>, 'target' | 'rel' | 'title' | 'className' | 'style'> & {
    href: string;
    children: ReactNode;
    newWindow?: boolean;
    sameSite?: boolean;
};
interface IFooterExtendedProps {
    className?: string;
    sameSite?: boolean;
    resources?: ILink[];
    logo?: ILink;
}
interface IFeatureListProps {
    className?: string;
    title?: string;
    description?: string;
    items: {
        title: string;
        description: string;
        image: ImageProps;
        link?: ILink;
    }[];
    link?: ILink;
}
interface IInfoListProps {
    className?: string;
    title?: string | ReactNode;
    items: {
        title: string | ReactNode;
        description: string | ReactNode;
        link?: ILink;
    }[];
}
interface IHeroVideoProps {
    className?: string;
    title: string | ReactNode;
    description: string | ReactNode;
    flipped?: boolean;
    link?: ILink;
    video: IVideo;
    videoProps?: ReactPlayerProps;
}
interface IHeroIllustrationProps {
    className?: string;
    title: string | ReactNode;
    description: string | ReactNode;
    flipped?: boolean;
    link?: ILink;
    image: ImageProps;
}
interface IHeroGradientProps {
    className?: string;
    title: string | ReactNode;
    description: string | ReactNode;
    colors?: string[];
    version?: string | ReactNode;
    link?: ILink | ILink[];
    image?: ImageProps;
}
interface IHeroMarketplaceProps {
    className?: string;
    title: string | ReactNode;
    description: string | ReactNode;
    link: ILink;
    image?: ImageProps;
}
interface IMarketplaceItemProps {
    title: string;
    description: string | ReactNode;
    tags?: string[];
    modal?: {
        header: {
            image?: ImageProps;
            description?: string | ILink;
        };
        content: string | (() => ReactNode) | ReactNode;
    };
    update: string;
    image: ImageProps;
    link: Omit<ILink, 'children'>;
}
interface IMarketplaceItemsProps {
    items: IMarketplaceItemProps[];
}
interface IMarketplaceListProps {
    className?: string;
    title?: string;
    placeholder: string | ReactElement;
    pagination: number;
    items: IMarketplaceItemProps[];
}
interface IMarketplaceSearchProps {
    className?: string;
    title: string | ReactNode;
    placeholder: string;
    primaryList: IMarketplaceListProps;
    secondaryList?: IMarketplaceListProps;
    queryList?: IMarketplaceListProps;
    tagsFilter?: string[] | ReadonlyArray<string>;
}
interface ISchemaPageProps {
    schemaName: string;
    tags?: string[];
    editorData: Omit<IEditorProps, 'icon' | 'children'>[];
}
interface IEditorProps {
    children: ReactNode;
    title: string;
    frameworks?: string[];
    schema?: string;
    image?: string;
    operations?: string;
}

type CardsColorfulProps = {
    className?: string;
    cards: {
        title: string;
        description: string;
        category: string;
        color: string;
        link: Omit<ILink, 'children'>;
    }[];
};
declare const CardsColorful: ({ cards, className }: CardsColorfulProps) => ReactElement;

declare const FeatureList: ({ title, description, items, link, className, }: IFeatureListProps) => ReactElement;

declare function Footer({ className, sameSite, resources, logo, }: IFooterExtendedProps): ReactElement;

declare const HeroGradient: ({ title, description, link, version, colors, image, className, }: IHeroGradientProps) => ReactElement;

declare const HeroIllustration: ({ title, description, link, image, flipped, className, }: IHeroIllustrationProps) => ReactElement;

declare const HeroMarketplace: ({ title, description, link, className, image, }: IHeroMarketplaceProps) => ReactElement;

declare const HeroVideo: ({ title, description, link, video, flipped, className, videoProps, }: IHeroVideoProps) => ReactElement;

declare function Image(props: ImageProps): ReactElement;

declare const InfoList: ({ title, items, className }: IInfoListProps) => ReactElement;

type Command = {
    name: string;
    cmd: 'add' | 'run' | 'install' | 'init';
    isNpx?: boolean;
    isGlobal?: boolean;
};
declare const LegacyPackageCmd: ({ packages, }: {
    packages: (string | Command)[];
}) => ReactElement;

declare const MarketplaceList: ({ title, placeholder, items, pagination, className, }: IMarketplaceListProps) => ReactElement;

declare const MarketplaceSearch: ({ title, tagsFilter, placeholder, primaryList, secondaryList, queryList, className, }: IMarketplaceSearchProps) => ReactElement;

declare const mdxComponents: {
    [tag: string]: (props: object) => ReactElement;
};

declare const NPMBadge: ({ name }: {
    name: string;
}) => ReactElement;

declare function GuildUnifiedLogo({ children, title, description, }: {
    children: DocsThemeConfig['logo'];
    title: string;
    description: string;
}): ReactElement;

declare function ThemeSwitcherButton(): react_jsx_runtime.JSX.Element;

declare const productsItems: {
    [k: string]: {
        title: any;
        href: `https://${string}`;
    };
};

declare function defineConfig({ websiteName, description, logo, ...config }: DocsThemeConfig & {
    websiteName: string;
    description: string;
}): DocsThemeConfig;

type Package = {
    readme: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    weeklyNPMDownloads: number;
};
declare const fetchPackageInfo: (packageName: string, githubReadme?: {
    repo: string;
    path: string;
}) => Promise<Package>;

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number | undefined;
    }
}

export { Anchor, Button, CardsColorful, FeatureList, Footer, GuildUnifiedLogo, HeroGradient, HeroIllustration, HeroMarketplace, HeroVideo, type IEditorProps, type IFeatureListProps, type IFooterExtendedProps, type IHeroGradientProps, type IHeroIllustrationProps, type IHeroMarketplaceProps, type IHeroVideoProps, type IInfoListProps, type ILink, type IMarketplaceItemProps, type IMarketplaceItemsProps, type IMarketplaceListProps, type IMarketplaceSearchProps, type ISchemaPageProps, Image, InfoList, LegacyPackageCmd, MarketplaceList, MarketplaceSearch, NPMBadge, ThemeSwitcherButton, defineConfig, fetchPackageInfo, mdxComponents, productsItems };
