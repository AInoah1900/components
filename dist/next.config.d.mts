import { NextConfig } from 'next';
import { NextraConfig } from 'nextra';

type MdxOptions = Exclude<NextraConfig['mdxOptions'], undefined>;
declare const defaultRemarkPlugins: MdxOptions['remarkPlugins'];
declare function withGuildDocs({ nextraConfig, ...nextConfig }?: NextConfig & {
    nextraConfig?: NextraConfig;
}): NextConfig;

export { defaultRemarkPlugins, withGuildDocs };
