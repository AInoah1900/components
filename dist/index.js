import {
  PRODUCTS
} from "./chunk-D3XILPWX.js";
import {
  SvgGuild,
  SvgTheGuild
} from "./chunk-WCC2DLJH.js";

// src/index.ts
import { default as default2 } from "@giscus/react";
import {
  Bleed,
  Collapse,
  Navbar as Navbar2,
  NotFoundPage,
  useConfig as useConfig2,
  useTheme as useTheme2,
  useThemeConfig
} from "nextra-theme-docs";
import { createCatchAllMeta } from "nextra/catch-all";
import {
  Callout,
  Cards,
  Code,
  FileTree,
  Mermaid,
  RemoteContent,
  Steps,
  Tabs as Tabs2,
  Table,
  Td,
  Th,
  Tr
} from "nextra/components";
import { useData, useMounted as useMounted2 } from "nextra/hooks";
import { useMDXComponents } from "nextra/mdx";

// src/components/anchor.tsx
import { forwardRef } from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { Fragment, jsx } from "react/jsx-runtime";
var Anchor = forwardRef(function Anchor2({ href = "", children, newWindow, sameSite, className, ...props }, forwardedRef) {
  if (sameSite) {
    const url = new URL(href);
    href = url.pathname + url.search + url.hash;
  }
  const classes2 = clsx(className, "outline-none focus-visible:ring transition");
  if (newWindow && /^https?:\/\//.test(href)) {
    return /* @__PURE__ */ jsx(
      "a",
      {
        ref: forwardedRef,
        href,
        target: "_blank",
        rel: "noreferrer",
        className: classes2,
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(NextLink, { ref: forwardedRef, href, ...props, className: classes2, legacyBehavior: false, children: /* @__PURE__ */ jsx(Fragment, { children }) });
});

// src/components/button.tsx
import clsx2 from "clsx";
import { jsx as jsx2 } from "react/jsx-runtime";
var Button = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return /* @__PURE__ */ jsx2(
    Anchor,
    {
      className: clsx2(
        "flex-none rounded-md p-3 text-center text-xs font-medium hover:shadow-lg md:px-5",
        variant === "primary" ? "bg-cyan-400 text-white hover:shadow-cyan-400/40" : "bg-white text-black hover:shadow-white/40",
        className
      ),
      ...props,
      children
    }
  );
};

// src/components/cards-colorful.tsx
import clsx3 from "clsx";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var CardsColorful = ({ cards, className }) => /* @__PURE__ */ jsx3("section", { className: clsx3("bg-white py-8 dark:bg-[#111]", className), children: /* @__PURE__ */ jsx3("div", { className: "container flex flex-wrap space-y-6 md:flex-nowrap md:space-x-8 md:space-y-0", children: cards.map((card) => /* @__PURE__ */ jsx3(
  Anchor,
  {
    className: "relative min-h-[200px] w-full rounded-3xl p-8 text-white [background:var(--color)] after:absolute after:right-0 after:top-0 after:h-full after:w-[calc(30%-1rem)] after:rounded-3xl after:bg-white/10 after:content-[''] md:h-72 md:w-1/2 md:hover:scale-105 md:hover:shadow-xl lg:after:w-[calc(50%-1rem)]",
    style: { "--color": card.color },
    ...card.link,
    children: /* @__PURE__ */ jsxs("div", { className: "w-3/4 lg:w-1/2", children: [
      /* @__PURE__ */ jsx3("h2", { className: "pb-1.5 text-xs font-semibold uppercase opacity-60", children: card.category }),
      /* @__PURE__ */ jsx3("h3", { className: "pb-2.5 text-2xl font-bold md:text-3xl", children: card.title }),
      /* @__PURE__ */ jsx3("p", { className: "text-xs font-medium opacity-60", children: card.description })
    ] })
  },
  card.title
)) }) });

// src/components/feature-list.tsx
import clsx4 from "clsx";

// src/components/image.tsx
import NextImage from "next/image";
import { jsx as jsx4 } from "react/jsx-runtime";
function Image(props) {
  return /* @__PURE__ */ jsx4(NextImage, { placeholder: "blur", ...props });
}

// src/components/feature-list.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var FeatureList = ({
  title,
  description,
  items,
  link,
  className
}) => /* @__PURE__ */ jsx5("section", { className: clsx4("bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs2("div", { className: "container py-14", children: [
  title && /* @__PURE__ */ jsxs2("div", { className: "mb-6 flex flex-col items-center", children: [
    /* @__PURE__ */ jsx5("h2", { className: "mb-1.5 mt-0 text-center text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
    description && /* @__PURE__ */ jsx5("div", { className: "mb-1.5 mt-1 text-center text-base text-gray-500 dark:text-gray-400", children: description }),
    link && /* @__PURE__ */ jsx5(
      Anchor,
      {
        ...link,
        className: clsx4("w-max text-sm text-cyan-400 hover:text-cyan-300", link.className)
      }
    )
  ] }),
  /* @__PURE__ */ jsx5("div", { className: "flex flex-wrap justify-center gap-12", children: items.map((item) => /* @__PURE__ */ jsxs2("div", { className: "flex w-56 flex-col items-center", children: [
    /* @__PURE__ */ jsx5(Image, { ...item.image, className: clsx4("w-28", item.image.className) }),
    /* @__PURE__ */ jsx5("h3", { className: "m-0 text-lg font-bold text-black dark:text-gray-50", children: item.title }),
    /* @__PURE__ */ jsx5("div", { className: "text-center text-sm text-gray-500 dark:text-gray-400", children: item.description }),
    item.link && /* @__PURE__ */ jsx5(
      Anchor,
      {
        ...item.link,
        className: clsx4(
          "mt-2 w-max text-sm text-cyan-400 hover:text-cyan-300",
          item.link.className
        )
      }
    )
  ] }, item.title)) })
] }) });

// src/components/footer.tsx
import { clsx as clsx5 } from "clsx";

// src/components/icons/caret-slim.svg
import { jsx as jsx6 } from "react/jsx-runtime";
var SvgCaretSlim = (props) => /* @__PURE__ */ jsx6("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", ...props, children: /* @__PURE__ */ jsx6("path", { d: "M4 8L12 16L20 8", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }) });

// src/components/icons/close.svg
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var SvgClose = (props) => /* @__PURE__ */ jsxs3("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", ...props, children: [
  /* @__PURE__ */ jsx7("path", { d: "M5.63607 5.35355L18.364 18.0815", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx7("path", { d: "M18.0815 5.35354L5.35358 18.0815", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
] });

// src/components/icons/moon.svg
import { jsx as jsx8 } from "react/jsx-runtime";
var SvgMoon = (props) => /* @__PURE__ */ jsx8("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "currentColor", stroke: "currentColor", ...props, children: /* @__PURE__ */ jsx8("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.75 8.3425C14.4217 11.8944 11.3866 14.5777 7.82131 14.4682C4.256 14.3586 1.39135 11.494 1.2818 7.92867C1.17225 4.36336 3.85562 1.32824 7.40748 1C5.86275 3.08984 6.07942 5.99534 7.91703 7.83295C9.75464 9.67056 12.6601 9.88723 14.75 8.3425Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }) });

// src/components/icons/more.svg
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var SvgMore = (props) => /* @__PURE__ */ jsxs4("svg", { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", ...props, children: [
  /* @__PURE__ */ jsx9("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx9("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx9("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25C8.25 14.6642 8.58579 15 9 15Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
] });

// src/components/icons/search.svg
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var SvgSearch = (props) => /* @__PURE__ */ jsxs5("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", ...props, children: [
  /* @__PURE__ */ jsx10("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx10("path", { d: "M21 21L16.65 16.65", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
] });

// src/components/icons/share.svg
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var SvgShare = (props) => /* @__PURE__ */ jsxs6("svg", { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", ...props, children: [
  /* @__PURE__ */ jsx11("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.5 6C14.7426 6 15.75 4.99264 15.75 3.75C15.75 2.50736 14.7426 1.5 13.5 1.5C12.2574 1.5 11.25 2.50736 11.25 3.75C11.25 4.99264 12.2574 6 13.5 6Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx11("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.5 11.25C5.74264 11.25 6.75 10.2426 6.75 9C6.75 7.75736 5.74264 6.75 4.5 6.75C3.25736 6.75 2.25 7.75736 2.25 9C2.25 10.2426 3.25736 11.25 4.5 11.25Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx11("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.5 16.5C14.7426 16.5 15.75 15.4926 15.75 14.25C15.75 13.0074 14.7426 12 13.5 12C12.2574 12 11.25 13.0074 11.25 14.25C11.25 15.4926 12.2574 16.5 13.5 16.5Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx11("path", { d: "M6.44336 10.1325L11.5659 13.1175", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx11("path", { d: "M11.5584 4.88251L6.44336 7.86751", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
] });

// src/components/icons/twitter.svg
import { jsx as jsx12 } from "react/jsx-runtime";
var SvgTwitter = (props) => /* @__PURE__ */ jsx12("svg", { viewBox: "0 0 1200 1227", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx12("path", { d: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" }) });

// src/components/icons/linkedin.svg
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var SvgLinkedin = (props) => /* @__PURE__ */ jsxs7("svg", { viewBox: "0 0 20 20", fill: "currentColor", ...props, children: [
  /* @__PURE__ */ jsx13("path", { d: "M13.3337 6.66675C14.6597 6.66675 15.9315 7.19353 16.8692 8.13121C17.8069 9.0689 18.3337 10.3407 18.3337 11.6667V17.5001H15.0003V11.6667C15.0003 11.2247 14.8247 10.8008 14.5122 10.4882C14.1996 10.1757 13.7757 10.0001 13.3337 10.0001C12.8916 10.0001 12.4677 10.1757 12.1551 10.4882C11.8426 10.8008 11.667 11.2247 11.667 11.6667V17.5001H8.33366V11.6667C8.33366 10.3407 8.86044 9.0689 9.79813 8.13121C10.7358 7.19353 12.0076 6.66675 13.3337 6.66675ZM1.66699 7.50008H5.00033V17.5001H1.66699V7.50008Z" }),
  /* @__PURE__ */ jsx13("path", { d: "M3.33366 5.00008C4.25413 5.00008 5.00033 4.25389 5.00033 3.33341C5.00033 2.41294 4.25413 1.66675 3.33366 1.66675C2.41318 1.66675 1.66699 2.41294 1.66699 3.33341C1.66699 4.25389 2.41318 5.00008 3.33366 5.00008Z" })
] });

// src/components/icons/youtube.svg
import { jsx as jsx14 } from "react/jsx-runtime";
var SvgYoutube = (props) => /* @__PURE__ */ jsx14("svg", { viewBox: "0 0 20 20", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx14("path", { d: "M9.99967 2.66675C7.20901 2.66675 3.58691 3.36597 3.58691 3.36597L3.5778 3.37638C2.30678 3.57966 1.33301 4.67183 1.33301 6.00008V10.0001V10.0014V14.0001V14.0014C1.33425 14.6357 1.56159 15.2489 1.97421 15.7307C2.38683 16.2125 2.95769 16.5315 3.58431 16.6303L3.58691 16.6342C3.58691 16.6342 7.20901 17.3347 9.99967 17.3347C12.7903 17.3347 16.4124 16.6342 16.4124 16.6342L16.4137 16.6329C17.041 16.5343 17.6126 16.2151 18.0255 15.7327C18.4384 15.2503 18.6657 14.6364 18.6663 14.0014V14.0001V10.0014V10.0001V6.00008C18.6654 5.3655 18.4382 4.75205 18.0256 4.26995C17.6129 3.78786 17.0419 3.46872 16.415 3.36987L16.4124 3.36597C16.4124 3.36597 12.7903 2.66675 9.99967 2.66675ZM7.99967 6.93237L13.333 10.0001L7.99967 13.0678V6.93237Z" }) });

// src/components/icons/csa-star-level-one.svg
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
var SvgCsaStarLevelOne = (props) => /* @__PURE__ */ jsxs8("svg", { fill: "#00559a", viewBox: "0 0 137.2 137.2", ...props, children: [
  /* @__PURE__ */ jsx15("title", { children: "Cloud Security Alliance Star Level One Badge" }),
  /* @__PURE__ */ jsx15("circle", { cx: 68.95, cy: 68.63, r: 55.63, fill: "#fff" }),
  /* @__PURE__ */ jsx15("path", { d: "M68.6 0a68.6 68.6 0 1 0 68.6 68.6A68.68 68.68 0 0 0 68.6 0Zm0 120.6a52 52 0 1 1 52-52 52.05 52.05 0 0 1-52 52Z" }),
  /* @__PURE__ */ jsx15("path", { d: "m114 51.36.24-1.48v-.24a4 4 0 0 1-.21.38l-.88 1.4-.39-1.4a2.27 2.27 0 0 1-.09-.38v.24l-.24 1.48h-.28l.36-2.22h.33l.36 1.33c0 .13.08.31.1.4 0-.09.15-.27.22-.4l.81-1.33h.32l-.37 2.22Zm-2.67-2-.33 2h-.3l.33-2h-.72v-.23h1.73v.23ZM76.54 55.5v-.08ZM29.55 60.08a6.94 6.94 0 0 0 2.25 1.33 28.85 28.85 0 0 0 3.3 1c.71.17 1.29.33 1.75.48a6.69 6.69 0 0 1 1.07.47 1.42 1.42 0 0 1 .53.49.88.88 0 0 1 .09.56 1.35 1.35 0 0 1-.76 1.1 6 6 0 0 1-2.29.31 7.09 7.09 0 0 1-1.59-.19 10.7 10.7 0 0 1-1.67-.5 15.73 15.73 0 0 1-1.56-.7 9.8 9.8 0 0 1-1.28-.8l-3.61 4.76a14.31 14.31 0 0 0 3.88 1.89 15.75 15.75 0 0 0 5 .76 16 16 0 0 0 3.68-.4 9.77 9.77 0 0 0 3-1.25 7.38 7.38 0 0 0 2.19-2.19 8.08 8.08 0 0 0 1.14-3.2 6.61 6.61 0 0 0-.1-2.66 4.05 4.05 0 0 0-1.16-1.93 5.75 5.75 0 0 0-1-.74H28.54a4.1 4.1 0 0 0 1.01 1.41ZM34.38 55a1.44 1.44 0 0 1 .58-1 3.28 3.28 0 0 1 1.87-.38 8.7 8.7 0 0 1 3.08.53 9.28 9.28 0 0 1 1.93 1c.33.22.75.57.75.57l.46-.57L46.24 51a12 12 0 0 0-3.56-1.88 15.72 15.72 0 0 0-4.81-.65 12.35 12.35 0 0 0-3.63.5 9.44 9.44 0 0 0-2.92 1.41 7.5 7.5 0 0 0-2.05 2.19 7.36 7.36 0 0 0-1 2.64h6.08ZM51.95 71h6.07l1.7-12.06h-6.07L51.95 71zM60.36 54.39h6.13l.74-5.29H48.9l-.74 5.29h6.13l-.16 1.11h6.07l.16-1.11zM76.57 55.42v.08H82l-1.42-6.4h-6.15l-3.22 6.4h5.33ZM88.55 71h6l1-7.38H98l2.52 7.38h6.8l-3.21-8.35a8.35 8.35 0 0 0 3.22-2.38 6.88 6.88 0 0 0 .82-1.33h-17.9ZM96.88 54h3.68a2.38 2.38 0 0 1 2 .66 1.77 1.77 0 0 1 .36.8H109a6.75 6.75 0 0 0-.22-2.57 4.56 4.56 0 0 0-1.42-2.2 6.25 6.25 0 0 0-2.53-1.24 14 14 0 0 0-3.44-.39h-9.76l-.9 6.4h6ZM82.74 59H69.47L63.4 71h6.51l1.73-3.81h6.57l.65 3.81h6.57Zm-5.32 2.92.38 3.29-2.37-2-3.13 2L74 62l-2.42-1.94h3.29l.47-1.06H77l.18 1h3.3ZM76.58 56.41l-1.24 2.58H77l-.42-2.58z" }),
  /* @__PURE__ */ jsx15("path", { d: "M11.16 60.63a3.54 3.54 0 0 0 1.05-1.94c.15-.8-.12-1.44-.86-1.57s-1.17.62-1.58 1.46-1 1.78-2.24 1.56A1.94 1.94 0 0 1 6 57.61a4 4 0 0 1 .85-1.87l.94.17a3.75 3.75 0 0 0-1 1.86c-.13.76.11 1.35.8 1.48.85.15 1.13-.62 1.51-1.41s1-1.84 2.32-1.61A2 2 0 0 1 13 58.85a4.23 4.23 0 0 1-.89 1.95ZM8.18 52.18l-.63 2.23-.79-.22 1.49-5.33.79.22-.62 2.23L14.28 53l-.24.87ZM9.23 46.22l.31-.81 7.46-.18-.35.91h-2.08l-1.11 2.9L15 50.5l-.33.86Zm3.62 2.28.89-2.32h-3.37q.68.6 1.38 1.26ZM11.25 41.39l.86-1.66a3.94 3.94 0 0 1 1.2-1.56 1.76 1.76 0 0 1 1.87-.1 1.85 1.85 0 0 1 1 1.54 2.11 2.11 0 0 1-.11.83l3.72-.55-.51 1-3.6.5-.54 1 2.63 1.36-.42.81Zm3.8-.37a2.18 2.18 0 0 0 .35-1.35 1 1 0 0 0-.57-.76 1.09 1.09 0 0 0-1.14.05 3 3 0 0 0-.88 1.2l-.42.8 2.12 1.1ZM15.92 33.22l.52-.74 5 3.54 1.9-2.65.67.47-2.43 3.4ZM19.37 28.57l2.61-3 .62.53-2 2.34 1.58 1.37 1.77-2 .6.51-1.77 2 1.8 1.55 2.07-2.39.62.53-2.67 3.07ZM22.75 24.67l.7-.67 3.73 1.81c.58.27 1.15.55 1.76.86-.27-.62-.52-1.22-.78-1.83L26.6 21l.68-.64 2.82 6.84-.67.64ZM28.44 19.48 31.59 17l.51.65-2.44 1.88 1.28 1.67 2.14-1.66.48.63-2.14 1.65 1.45 1.88 2.51-1.93.5.65L32.66 25ZM33.12 16l.77-.49 3.26 5.14 2.75-1.75.44.69-3.52 2.23ZM43.29 10.32a3.48 3.48 0 0 1 4.64 1.86 3.51 3.51 0 1 1-4.64-1.86Zm2.5 5.75a2.6 2.6 0 0 0 1.31-3.52 2.61 2.61 0 1 0-4.78 2.07 2.61 2.61 0 0 0 3.47 1.45ZM50.33 15l-1.89-6.63.83-.23L53.1 11q.8.6 1.59 1.23c-.18-.57-.38-1.24-.56-1.89L53.2 7l.8-.22 1.89 6.65-.82.24-3.84-2.91c-.52-.39-1.06-.81-1.58-1.22l.56 1.89 1 3.34ZM56.24 6.35l3.93-.66.14.81-3 .51.34 2.07 2.67-.44.13.78-2.66.44.39 2.35 3.12-.52.14.8-4 .68ZM62.17 8.24a.62.62 0 1 1 .68.56.62.62 0 0 1-.68-.56Zm.9 3a.62.62 0 0 1 .68.56.62.62 0 0 1-1.24.12.62.62 0 0 1 .56-.71ZM67.49 10.63a3.67 3.67 0 0 0 2.08.74c.82 0 1.4-.35 1.42-1.11s-.8-1-1.7-1.32-1.91-.71-1.89-2 .92-1.91 2.27-1.89a3.9 3.9 0 0 1 2 .55v1a3.7 3.7 0 0 0-2-.67c-.77 0-1.32.31-1.33 1 0 .86.79 1 1.62 1.27 1 .3 2 .71 2 2s-.95 2-2.34 2a4.43 4.43 0 0 1-2.07-.58ZM73.71 5.35l4 .43-.09.82-3.07-.34-.23 2.09 2.69.3-.09.78-2.68-.29L74 11.5l3.15.35-.09.81-4.06-.44ZM79.51 6.08l.89.18-1.22 6 3.2.65-.16.81-4.09-.84ZM85.17 7.33l3.91 1.18-.23.79-3-.92-.64 2.14 2.68.81-.23.75-2.68-.8-.98 2.93-.83-.21ZM89.37 11.91l2.12.83-.28.71-2.12-.82ZM95.88 11.32l.78.38-.44 7.46-.88-.42.15-2.07-2.8-1.36-1.55 1.39-.83-.4Zm-2.56 3.41 2.23 1.09.12-1.54c0-.59.09-1.23.15-1.82l-1.36 1.27ZM97.43 18.28a3.75 3.75 0 0 0 1.4 1.72c.7.43 1.39.42 1.79-.22s-.14-1.31-.77-2-1.27-1.59-.6-2.66a1.93 1.93 0 0 1 2.91-.45 3.85 3.85 0 0 1 1.41 1.48l-.5.81a3.69 3.69 0 0 0-1.36-1.6c-.66-.41-1.3-.41-1.67.19s.15 1.27.73 1.92 1.34 1.64.64 2.75a2 2 0 0 1-3 .48 4.19 4.19 0 0 1-1.48-1.56ZM102 21.21a3.62 3.62 0 0 0 1.26 1.79c.65.5 1.34.55 1.8-.05s0-1.31-.58-2.07-1.12-1.7-.35-2.7a1.94 1.94 0 0 1 2.94-.18 3.93 3.93 0 0 1 1.26 1.62l-.57.75a3.74 3.74 0 0 0-1.21-1.72c-.61-.47-1.25-.53-1.68 0s0 1.28.56 2 1.17 1.75.37 2.8a2 2 0 0 1-3 .19 4.27 4.27 0 0 1-1.38-1.64ZM110.16 20.66l2.93 2.69-.55.61-2.27-2.09-1.42 1.55 2 1.82-.54.59-2-1.83-1.61 1.75 2.3 2.14-.56.6-3-2.75ZM110.21 28.21a3.65 3.65 0 0 0 .87 2c.55.61 1.22.79 1.78.28s.23-1.29-.19-2.14-.78-1.88.15-2.72a2 2 0 0 1 2.93.36 3.85 3.85 0 0 1 1 1.82l-.71.64a3.65 3.65 0 0 0-.87-1.91c-.52-.58-1.13-.76-1.65-.28s-.21 1.26.18 2c.46.94.82 1.94-.15 2.83a2 2 0 0 1-3-.37 4.43 4.43 0 0 1-1-1.91ZM113.81 32.29a3.64 3.64 0 0 0 .68 2.09c.49.66 1.14.9 1.74.45s.35-1.27 0-2.15-.61-1.94.4-2.69a1.93 1.93 0 0 1 2.88.63 3.93 3.93 0 0 1 .78 1.9l-.77.57a3.69 3.69 0 0 0-.68-2c-.47-.62-1.06-.85-1.63-.43s-.32 1.24 0 2.06c.37 1 .64 2-.41 2.79a2 2 0 0 1-3-.65 4.12 4.12 0 0 1-.8-2ZM120.33 37.06c.23-.5.47-1 .72-1.49-.35.22-.8.49-1.29.77l-3.37 2-.44-.76 6-3.46.43.76-1.81 3.88 4.27.37.43.75-6 3.46-.46-.79 3.38-1.94c.48-.29.94-.54 1.3-.74-.55 0-1.1-.07-1.64-.12l-2.63-.23ZM126.18 41.89l1.58 3.67-.76.32-1.22-2.83-1.93.83 1.07 2.48-.73.31-1.06-2.48-2.19.94 1.25 2.87-.75.33-1.61-3.75ZM121.85 49.38l6.6-2 .25.82-2.82 3.88c-.39.54-.79 1.08-1.2 1.61.57-.18 1.23-.4 1.87-.59l3.32-1 .26.84-6.61 2-.25-.82 2.83-3.88c.38-.54.79-1.08 1.19-1.61-.57.19-1.24.4-1.87.59l-3.33 1ZM130.13 57l-.41-2.28.81-.14 1 5.45-.8.15-.42-2.28-6 1.08-.16-.9ZM6.73 79a3.62 3.62 0 0 0-.28 2.19c.16.81.64 1.3 1.38 1.15s.86-1 .93-1.94.29-2 1.52-2.26 2.07.49 2.33 1.81a3.82 3.82 0 0 1-.11 2l-.93.19a3.8 3.8 0 0 0 .23-2.09c-.16-.76-.59-1.22-1.28-1.08s-.83 1-.89 1.85c-.09 1-.28 2.09-1.57 2.35a2 2 0 0 1-2.42-1.86 4.14 4.14 0 0 1 .12-2.15ZM13.22 83.21 14.36 87l-.78.24-.88-3-2 .6.78 2.59-.76.23-.77-2.59-2.28.68.91 3-.79.23-1.16-3.9ZM16 91a4.15 4.15 0 0 1 .29 2l-.92.38a3.35 3.35 0 0 0-.15-2.06 2.63 2.63 0 0 0-3.54-1.44 2.64 2.64 0 0 0-1.46 3.58A3.09 3.09 0 0 0 11.65 95l-.93.39a3.92 3.92 0 0 1-1.26-1.68A3.47 3.47 0 0 1 11.35 89 3.49 3.49 0 0 1 16 91ZM13.92 95.55l3.19-1.77.44.79-3.11 1.72a3.8 3.8 0 0 0-1.44 1.1 1.68 1.68 0 0 0 .06 1.83 1.67 1.67 0 0 0 1.51 1 3.66 3.66 0 0 0 1.65-.62l3.15-1.73.42.77-3.1 1.71a4.26 4.26 0 0 1-2.31.75 2.7 2.7 0 0 1-2.07-1.52 2.65 2.65 0 0 1-.18-2.55 4.17 4.17 0 0 1 1.79-1.48ZM20.5 99.7l1.08 1.53a3.83 3.83 0 0 1 .83 1.77 1.74 1.74 0 0 1-.76 1.71 1.83 1.83 0 0 1-1.84.21 2 2 0 0 1-.69-.48L17.91 108l-.64-.89 1.2-3.43-.67-1-2.42 1.71-.52-.74Zm-1.42 3.55a2.14 2.14 0 0 0 1 .92 1 1 0 0 0 .94-.16 1.07 1.07 0 0 0 .48-1 3 3 0 0 0-.67-1.34l-.52-.74-2 1.38ZM24.08 104.57l.58.7-5.34 4.38-.57-.7ZM26.17 108.22l-1.6-1.69.6-.56L29 110l-.59.57-1.6-1.69-4.42 4.19-.62-.66ZM28.65 114.72l.43-4.61.8.69-.2 2c-.06.52-.11 1-.18 1.58l1.54-.42 2-.52.77.66-4.46 1.15-2 2.38-.69-.59ZM36.83 117.19l-1.95-1.26.45-.69 4.66 3-.44.69-1.95-1.26-3.31 5.12-.76-.49ZM40.67 118.61l1.67.85a3.81 3.81 0 0 1 1.56 1.18 1.72 1.72 0 0 1 .1 1.86 1.8 1.8 0 0 1-1.52 1 2.18 2.18 0 0 1-.84-.1l.6 3.72-1-.5-.54-3.6-1.05-.53-1.34 2.64-.81-.41Zm.4 3.8a2.09 2.09 0 0 0 1.35.33 1 1 0 0 0 .76-.58 1.07 1.07 0 0 0-.06-1.13 3 3 0 0 0-1.22-.87l-.79-.41-1.11 2.13ZM44.64 124.66l1.28-3.43.85.32-1.24 3.34a3.94 3.94 0 0 0-.38 1.76A1.69 1.69 0 0 0 46.4 128a1.66 1.66 0 0 0 1.81-.21 3.69 3.69 0 0 0 .85-1.54l1.26-3.37.83.3-1.25 3.33a4.21 4.21 0 0 1-1.26 2.07 3 3 0 0 1-4.37-1.58 4.23 4.23 0 0 1 .37-2.34ZM50.81 128.78a3.53 3.53 0 0 0 1.84 1.22c.8.21 1.45 0 1.64-.74s-.52-1.26-1.29-1.69-1.69-1.14-1.37-2.36a1.93 1.93 0 0 1 2.64-1.3 3.75 3.75 0 0 1 1.79 1l-.24.92a3.57 3.57 0 0 0-1.82-1.12c-.75-.2-1.36 0-1.54.67-.22.83.52 1.17 1.28 1.61s1.75 1.17 1.42 2.44a2 2 0 0 1-2.73 1.36 4.29 4.29 0 0 1-1.88-1ZM59 125.85l-2.29-.36.13-.81 5.48.87-.13.81-2.32-.36-1 6-.89-.14ZM67.44 125.82h.87l2.74 7h-1l-.74-1.94-3.11-.05-.81 1.91h-.93Zm-.88 4.18H69l-.54-1.44c-.22-.55-.43-1.15-.64-1.72-.22.56-.46 1.14-.71 1.73ZM72.09 131.24a3.53 3.53 0 0 0 2.14.52c.82-.07 1.37-.49 1.3-1.24s-.9-1-1.83-1.14-2-.51-2.08-1.76.72-2 2.06-2.12a3.9 3.9 0 0 1 2 .34l.08 1a3.7 3.7 0 0 0-2-.46c-.77.07-1.28.45-1.22 1.15.08.86.89.93 1.75 1.09 1 .2 2 .51 2.16 1.82s-.75 2.08-2.13 2.2a4.26 4.26 0 0 1-2.12-.36ZM77.76 130.68a3.62 3.62 0 0 0 2.18.32c.81-.15 1.32-.61 1.18-1.36s-1-.88-1.92-1-2-.32-2.23-1.56.53-2 1.86-2.29a3.83 3.83 0 0 1 2 .15l.17.94a3.63 3.63 0 0 0-2.08-.27c-.77.13-1.24.56-1.12 1.25.16.85 1 .85 1.84.93 1 .1 2.08.32 2.32 1.62s-.56 2.13-1.92 2.38a4.23 4.23 0 0 1-2.14-.17ZM83 127.84l-1-3.51.87-.25 1 3.41a4 4 0 0 0 .76 1.64 1.72 1.72 0 0 0 1.81.34 1.67 1.67 0 0 0 1.32-1.25 3.73 3.73 0 0 0-.24-1.75l-1-3.45.84-.25 1 3.41a4.28 4.28 0 0 1 .23 2.41 3.06 3.06 0 0 1-4.47 1.31 4.2 4.2 0 0 1-1.12-2.06ZM88.5 122.32l1.73-.72a3.9 3.9 0 0 1 1.91-.42 1.74 1.74 0 0 1 1.5 1.12 1.83 1.83 0 0 1-.19 1.84 2.41 2.41 0 0 1-.62.57l3.21 2-1 .42-3.09-1.91-1.08.45 1.13 2.68-.84.35Zm3.16 2.16a2.18 2.18 0 0 0 1.13-.81 1 1 0 0 0 0-1 1 1 0 0 0-.89-.69 3.09 3.09 0 0 0-1.46.36l-.83.34.92 2.2ZM95.85 119l.76-.42 5.84 4.66-.86.47-1.6-1.31-2.72 1.5.24 2.07-.81.44Zm1.31 4 2.17-1.2-1.18-1c-.46-.38-1-.79-1.4-1.18.09.6.17 1.22.24 1.85ZM103.62 122.42l-4-5.61.7-.5 4.58 1.43c.64.19 1.28.4 1.91.61-.35-.48-.77-1-1.16-1.59l-2-2.82.72-.51 4 5.61-.7.5-4.59-1.42c-.63-.2-1.27-.4-1.91-.62.36.48.78 1 1.17 1.59l2 2.82ZM107.64 110.32a4 4 0 0 1 1.76-.95l.67.73a3.34 3.34 0 0 0-1.87.84 2.72 2.72 0 1 0 3.71 4 3 3 0 0 0 1-1.85l.68.74a3.88 3.88 0 0 1-1.15 1.76 3.55 3.55 0 1 1-4.8-5.24ZM109.92 108.24l2.67-3 .61.55-2.06 2.29 1.56 1.4 1.8-2 .59.53-1.8 2 1.77 1.59 2.11-2.35.61.54-2.72 3ZM120 99.76l1.65 2.1 2.18-.42-.6.9-1.14.22a2.37 2.37 0 0 1-.38 2.22 2 2 0 0 1-3.71-1.15v-.26h-.3a2 2 0 0 1-1.58-.22 1.77 1.77 0 0 1 2-2.92 1.83 1.83 0 0 1 .74 1.63v.47l1.89-.36-1.24-1.55Zm-2.34 2.87.42-.08V102a1.13 1.13 0 0 0-.44-1 .84.84 0 0 0-1.21.29.83.83 0 0 0 .2 1.2 1.29 1.29 0 0 0 .99.14Zm3.57.13-2.43.47v.42a1.21 1.21 0 0 0 2.32.69 1.47 1.47 0 0 0 .07-1.58ZM119.35 95.18l.8-1.69a3.83 3.83 0 0 1 1.14-1.59 1.74 1.74 0 0 1 1.86-.17 1.83 1.83 0 0 1 1.09 1.49 2.17 2.17 0 0 1-.08.84l3.7-.69-.47 1-3.58.63-.5 1.07 2.69 1.25-.39.82Zm3.79-.5a2.19 2.19 0 0 0 .29-1.36 1 1 0 0 0-.6-.74 1.05 1.05 0 0 0-1.13.09 3.06 3.06 0 0 0-.84 1.24l-.38.81 2.15 1ZM121.83 89.68l.32-.85 6.44 2.5-.32.85ZM127.85 89.29a3.65 3.65 0 0 0 1.3-1.78c.24-.78.06-1.45-.66-1.68s-1.24.47-1.75 1.26-1.22 1.63-2.42 1.25a1.94 1.94 0 0 1-1.18-2.7 3.86 3.86 0 0 1 1.08-1.74l.92.28a3.62 3.62 0 0 0-1.21 1.73c-.23.73-.07 1.35.6 1.56s1.2-.47 1.67-1.2 1.25-1.7 2.51-1.3a2 2 0 0 1 1.22 2.79 4.24 4.24 0 0 1-1.13 1.83ZM124.17 82.53l.19-.89 3.06.64-2.42-3.61.23-1.1 2.5 3.69 4.27-2.54-.24 1.16-4.15 2.43 3.49.73-.19.88Z", fill: "#fff" }),
  /* @__PURE__ */ jsx15("path", { d: "M26.34 76.14h1.49v10h5.38v1.35h-6.87ZM35.1 76.14h6.58v1.35h-5.09V81h4.46v1.3h-4.46v3.92h5.23v1.35H35.1ZM42.73 76.14h1.6l2.43 6.39 1.11 3c.38-1 .76-2 1.15-3.07l2.44-6.34H53l-4.36 11.41h-1.52ZM54.53 76.14h6.57v1.35H56V81h4.45v1.3H56v3.92h5.23v1.35h-6.7ZM63.35 76.14h1.5v10h5.38v1.35h-6.88ZM81.22 76a5.87 5.87 0 1 1-5.79 5.87A5.72 5.72 0 0 1 81.22 76Zm0 10.35a4.49 4.49 0 1 0-4.29-4.48 4.3 4.3 0 0 0 4.29 4.45ZM89.07 87.53V76.14h1.42l4.77 6.33c.66.86 1.32 1.76 2 2.66v-8.99h1.45v11.39h-1.46l-4.76-6.32c-.66-.87-1.32-1.76-2-2.66v8.96ZM101.38 76.14H108v1.35h-5.08V81h4.45v1.3h-4.45v3.92h5.22v1.35h-6.71Z" })
] });

// src/components/icons/index.ts
import { InformationCircleIcon, GitHubIcon, DiscordIcon } from "nextra/icons";

// src/components/footer.tsx
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
var COMPANY = [
  {
    children: "关于我们",
    title: "了解更多关于我们的信息",
    href: "https://jiujuaner.com/about-us"
  },
  {
    children: "新闻资讯",
    title: "阅读我们的博客",
    href: "https://jiujuaner.com/blog"
  },
  // {
  //   children: "欢迎订阅",
  //   // title: "订阅我们的新闻",
  //   // href: "https://jiujuaner.com/newsletter"
  // }
];
var COMMUNITY = [
  {
    icon: SvgTwitter,
    title: "Visit our Twitter",
    // href: "https://twitter.com/TheGuildDev"
  },
  {
    icon: SvgLinkedin,
    title: "Visit our LinkedIn",
    // href: "https://linkedin.com/company/the-guild-software"
  },
  {
    icon: DiscordIcon,
    title: "Reach us on Discord",
    // href: "https://discord.com/invite/xud7bH9"
  },
  {
    icon: GitHubIcon,
    title: "Check our GitHub account",
    // href: "https://github.com/the-guild-org"
  },
  {
    icon: SvgYoutube,
    title: "Watch Our Videos",
    // href: "https://youtube.com/watch?v=d_GBgH-L5c4&list=PLhCf3AUOg4PgQoY_A6xWDQ70yaNtPYtZd"
  }
];
var products = [
  PRODUCTS.HIVE,
  PRODUCTS.MESH,
  // PRODUCTS.YOGA,
  // PRODUCTS.CODEGEN,
  // PRODUCTS.NEXTRA,
  // { ...PRODUCTS.SOFA, name: "GraphQL to REST" }
].map(({ name, href, title }) => ({
  children: name,
  href,
  title
}));
var classes = {
  title: clsx5("mb-2.5 text-lg font-medium text-gray-900 dark:text-gray-100"),
  anchor: clsx5("text-gray-500 hover:text-black dark:text-[#b4b5be] hover:dark:text-gray-100")
};
var renderLinks = (list) => /* @__PURE__ */ jsx16("ul", { className: "m-0 mb-8 list-none p-0 last:mb-0", children: list.map((link) => /* @__PURE__ */ jsx16("li", { className: "mb-3 last:mb-0", children: /* @__PURE__ */ jsx16(Anchor, { className: clsx5(classes.anchor, "inline-block text-sm"), ...link }) }, link.href)) });
function Footer({
  className,
  sameSite,
  resources = [],
  logo
}) {
  return /* @__PURE__ */ jsx16(
    "footer",
    {
      className: clsx5(
        "bg-[#fafafa] py-[60px] text-base dark:bg-[#0f1114] md:py-[140px]",
        className
      ),
      children: [
/* @__PURE__ */ jsx16("div", { className: "container max-w-[90rem]", children: /* @__PURE__ */ jsxs9("div", { className: "relative flex justify-between gap-10 max-md:flex-col", children: [
        /* @__PURE__ */ jsxs9(
          Anchor,
          {
            className: "flex items-center gap-2 self-start",
            href: "https://jiujuaner.com",
            sameSite,
            ...logo,
            children: [
              /* @__PURE__ */ jsx16(SvgGuild, { className: "h-9 w-auto" }),
              /* @__PURE__ */ jsx16(SvgTheGuild, { className: "h-7 w-auto",height: "55px" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs9("div", { children: [
          /* @__PURE__ */ jsx16("h3", { className: classes.title, children: "产品生态" }),
          /* @__PURE__ */ jsx16("div", { className: "flex gap-6", children: renderLinks(products) })
        ] }),
        /* @__PURE__ */ jsxs9("div", { children: [
          /* @__PURE__ */ jsx16("h3", { className: classes.title, children: "服务案例" }),
          renderLinks([
            {
              children: "服务案例",
              title: "服务案例",
              href: "https://jiujuaner.com/service"
            },
            ...resources
          ])
        ] }),
        /* @__PURE__ */ jsxs9("div", { children: [
          /* @__PURE__ */ jsx16("h3", { className: classes.title, children: "公司相关" }),
          renderLinks(COMPANY)
        ] }),
        // /* @__PURE__ */ jsx16("div", { className: "flex gap-5 text-[#b4b5be]", children: COMMUNITY.map(({ icon: Icon, ...iconProps }) => /* @__PURE__ */ jsx16(Anchor, { className: classes.anchor, ...iconProps, children: /* @__PURE__ */ jsx16(Icon, { className: "h-5 w-auto" }) }, iconProps.title)) }),
        // /* @__PURE__ */ jsx16(SvgCsaStarLevelOne, { className: "absolute right-0 ml-auto h-[4.5rem] w-auto md:bottom-0" })
        
      ] }
    ),  
  }),

  /* @__PURE__ */ jsx16("div", {
    className: "text-center mt-8 text-sm text-gray-500",
    children: /* @__PURE__ */ jsxs9("div", {
      children: [
        /* @__PURE__ */ jsx16("p", {
          children: "Copyright © 2025 - 2026 重庆华飞数智互联网科技有限责任公司 版权所有　电话：18996366862　邮箱：jiujuanoffice@163.com"
        }),
        /* @__PURE__ */ jsxs9("p", {
          children: ["地址：重庆市渝中区七星岗街道中山一路85号4层1-5-421　　ICP备案：渝ICP备2025052425号-1　　", /* @__PURE__ */ jsx16("a", {href: "https://beian.mps.gov.cn/#/query/webSearch?code=50010302505359", rel: "noreferrer", target: "_blank", style: {display: "inline-flex", alignItems: "center"}, children: [/* @__PURE__ */ jsx16("img", {src: "/static/china-police.png", alt: "公安备案图标", style: {height: "14px", marginRight: "5px"}}), "渝公网安备50010302505359号"]})]
        })
      ]
    })
  })

      ]

    }
  );
}

// src/components/hero-gradient.tsx
import { isValidElement } from "react";
import clsx6 from "clsx";
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
var Shadow = ({ className }) => {
  return /* @__PURE__ */ jsx17(
    "span",
    {
      className: clsx6(
        "absolute size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
        className
      )
    }
  );
};
var HeroGradient = ({
  title,
  description,
  link,
  version,
  colors = [],
  image,
  className
}) => {
  return /* @__PURE__ */ jsx17("section", { className: clsx6("bg-white dark:bg-[#111] md:py-14", className), children: /* @__PURE__ */ jsxs10(
    "div",
    {
      className: clsx6(
        "container relative z-0 flex max-w-[90rem] items-center gap-6 px-6 md:px-14",
        image ? "py-6" : "py-14"
      ),
      children: [
        /* @__PURE__ */ jsxs10(
          "div",
          {
            className: "absolute inset-0 z-[-1] overflow-hidden bg-black dark:bg-[#111] md:mx-6 md:rounded-3xl",
            style: { "--colorA": colors[0], "--colorB": colors[1] },
            children: [
              /* @__PURE__ */ jsx17(Shadow, { className: "-left-10 -top-24 [background:var(--colorA)]" }),
              /* @__PURE__ */ jsx17(Shadow, { className: "-top-5 hidden [background:var(--colorA)] md:right-[-28rem] md:block" }),
              /* @__PURE__ */ jsx17(Shadow, { className: "bottom-[-31rem] right-[-22rem] [background:var(--colorB)]" }),
              /* @__PURE__ */ jsx17(Shadow, { className: "-left-12 bottom-[-37rem] hidden [background:var(--colorB)] md:block" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs10("div", { className: clsx6("grow md:pl-6"), children: [
          /* @__PURE__ */ jsx17("h1", { className: "max-w-lg text-2xl font-bold text-white md:text-3xl", children: title }),
          /* @__PURE__ */ jsx17("p", { className: "mb-4 mt-2.5 max-w-md text-base text-white opacity-70 md:text-lg", children: description }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-x-3 text-xs md:mt-9", children: [
            link && toArray(link).map((link2) => /* @__PURE__ */ jsx17(
              Button,
              {
                variant: "secondary",
                ...link2,
                className: clsx6("!px-8", link2.className)
              },
              link2.href
            )),
            version && isValidElement(version) ? version : /* @__PURE__ */ jsx17("span", { className: "text-gray-50 opacity-60", children: version })
          ] })
        ] }),
        image && /* @__PURE__ */ jsx17(
          Image,
          {
            ...image,
            className: clsx6(
              "hidden w-full max-w-sm select-none sm:max-w-md md:block",
              image.className
            )
          }
        )
      ]
    }
  ) });
};
function toArray(input) {
  return Array.isArray(input) ? input : [input];
}

// src/components/hero-illustration.tsx
import clsx7 from "clsx";
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
var HeroIllustration = ({
  title,
  description,
  link,
  image,
  flipped,
  className
}) => /* @__PURE__ */ jsx18("section", { className: clsx7("bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs11(
  "div",
  {
    className: clsx7(
      "container flex flex-wrap items-center gap-8 py-8 md:flex-nowrap md:justify-around",
      flipped && "md:flex-row-reverse"
    ),
    children: [
      /* @__PURE__ */ jsx18(Image, { ...image, className: clsx7("w-full max-w-md md:w-2/5", image.className) }),
      /* @__PURE__ */ jsxs11("div", { className: "flex flex-col items-start gap-3", children: [
        /* @__PURE__ */ jsx18("h2", { className: "max-w-sm text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
        /* @__PURE__ */ jsx18("p", { className: "max-w-md text-base text-gray-500 dark:text-gray-400", children: description }),
        link && /* @__PURE__ */ jsx18(Button, { ...link })
      ] })
    ]
  }
) });

// src/components/hero-marketplace.tsx
import clsx8 from "clsx";
import CubeBL from "./marketplace-cube-bl-42X7Y3KO.png";
import CubeBR from "./marketplace-cube-br-Y5MZRDIL.png";
import CubeTL from "./marketplace-cube-tl-PEJKW6RX.png";
import CubeTR from "./marketplace-cube-tr-O5XQ6Q4N.png";
import IllustrationDesktop from "./marketplace-desktop-7XUR54PR.png";
import IllustrationMobile from "./marketplace-mobile-DI462WKF.png";
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
var Shadow2 = ({ className }) => {
  return /* @__PURE__ */ jsx19(
    "span",
    {
      className: clsx8(
        "absolute size-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl",
        className
      )
    }
  );
};
var Cube = ({ className, src }) => {
  return /* @__PURE__ */ jsx19(
    Image,
    {
      className: clsx8("absolute -translate-x-1/2 -translate-y-1/2", className),
      src,
      alt: "Cube"
    }
  );
};
var HeroMarketplace = ({
  title,
  description,
  link,
  className,
  image
}) => /* @__PURE__ */ jsx19("section", { className: clsx8("overflow-hidden bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs12("div", { className: "relative", children: [
  /* @__PURE__ */ jsxs12(
    "div",
    {
      className: "absolute inset-0 overflow-hidden bg-black dark:bg-[#111]",
      style: { "--colorA": "#ff34ae", "--colorB": "#1cc8ee" },
      children: [
        /* @__PURE__ */ jsx19(Shadow2, { className: "left-[-30px] top-[-175px] [background:var(--colorA)] md:left-[-60px] md:top-[-150px]" }),
        /* @__PURE__ */ jsx19(Shadow2, { className: "bottom-[-800px] right-[-700px] hidden [background:var(--colorA)] md:block" }),
        /* @__PURE__ */ jsx19(Shadow2, { className: "bottom-[-600px] left-[-30px] [background:var(--colorB)] md:bottom-[-700px] md:left-5" })
      ]
    }
  ),
  /* @__PURE__ */ jsxs12("div", { children: [
    /* @__PURE__ */ jsx19(Cube, { src: CubeTL, className: "-top-2.5 left-6 md:left-10 md:top-6" }),
    /* @__PURE__ */ jsx19(Cube, { src: CubeTR, className: "-bottom-60 -right-52 top-auto md:bottom-auto md:top-20" }),
    /* @__PURE__ */ jsx19(Cube, { src: CubeBR, className: "-bottom-32 -right-20 hidden md:block" }),
    /* @__PURE__ */ jsx19(Cube, { src: CubeBL, className: "-bottom-40 left-10 hidden md:block" })
  ] }),
  /* @__PURE__ */ jsxs12("div", { className: "container mb-28 mt-16 flex max-w-[90rem] flex-wrap items-center pb-1 pt-20 md:mb-20 md:mt-7 md:flex-nowrap md:pt-0", children: [
    /* @__PURE__ */ jsxs12(
      "picture",
      {
        className: "z-[1] order-last -mb-20 -ml-8 mt-5 w-full max-w-md md:order-first md:-mb-24 md:-ml-12 md:mt-0 md:w-auto md:max-w-none lg:-ml-14 lg:w-2/3",
        ...image,
        children: [
          /* @__PURE__ */ jsx19("source", { media: "(min-width:768px)", srcSet: IllustrationDesktop }),
          /* @__PURE__ */ jsx19(Image, { className: "mx-auto w-auto", src: IllustrationMobile, alt: "Products List" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs12("div", { className: "relative z-[1]", children: [
      /* @__PURE__ */ jsx19("h2", { className: "mb-2.5 max-w-lg text-2xl font-bold text-white dark:text-gray-50 md:text-3xl", children: title }),
      /* @__PURE__ */ jsx19("p", { className: "max-w-lg text-base text-gray-300 opacity-70", children: description }),
      link && /* @__PURE__ */ jsx19("div", { className: "relative z-[1] mt-4 hidden items-center text-xs md:mt-9 md:flex", children: /* @__PURE__ */ jsx19(Button, { ...link }) })
    ] })
  ] })
] }) });

// src/components/hero-video.tsx
import { useRouter } from "next/router";
import clsx9 from "clsx";
import { useMounted } from "nextra/hooks";
import ReactPlayer from "react-player/lazy";
import { jsx as jsx20, jsxs as jsxs13 } from "react/jsx-runtime";
var HeroVideo = ({
  title,
  description,
  link,
  video,
  flipped,
  className,
  videoProps
}) => {
  const { basePath } = useRouter();
  const mounted = useMounted();
  return /* @__PURE__ */ jsx20("section", { className: clsx9("bg-gray-100 dark:bg-neutral-800", className), children: /* @__PURE__ */ jsxs13(
    "div",
    {
      className: clsx9(
        "container flex flex-wrap py-8 md:flex-nowrap md:items-center md:justify-center",
        flipped && "md:flex-row-reverse"
      ),
      children: [
        /* @__PURE__ */ jsxs13("div", { className: "mb-16 mt-8 md:my-0", children: [
          /* @__PURE__ */ jsx20("h2", { className: "m-0 max-w-sm text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
          /* @__PURE__ */ jsx20("p", { className: "mb-3 mt-1 max-w-md text-base text-gray-500 dark:text-gray-400", children: description }),
          link && /* @__PURE__ */ jsx20(
            Anchor,
            {
              ...link,
              className: clsx9(
                "mt-auto w-max text-sm text-cyan-400 hover:text-cyan-300",
                link.className
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx20(
          "div",
          {
            className: clsx9(
              "h-72 w-full overflow-hidden rounded-xl bg-white shadow-xl sm:h-96 md:h-72 md:w-3/5 lg:h-96",
              flipped ? "md:mr-8" : "md:ml-8"
            ),
            children: mounted && /* @__PURE__ */ jsx20(
              ReactPlayer,
              {
                url: video.src,
                light: video.placeholder.startsWith("/") ? basePath + video.placeholder : video.placeholder,
                controls: true,
                height: "100%",
                width: "100%",
                config: {
                  youtube: {
                    playerVars: {
                      autoplay: 1
                    }
                  }
                },
                ...videoProps
              }
            )
          }
        )
      ]
    }
  ) });
};

// src/components/info-list.tsx
import clsx10 from "clsx";
import { jsx as jsx21, jsxs as jsxs14 } from "react/jsx-runtime";
var InfoList = ({ title, items, className }) => /* @__PURE__ */ jsx21("section", { className: clsx10("bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs14("div", { className: "container max-w-[90rem] py-12", children: [
  title && /* @__PURE__ */ jsx21("h2", { className: "mb-4 mt-0 text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
  /* @__PURE__ */ jsx21("div", { className: "flex flex-wrap", children: items.map((item, index) => /* @__PURE__ */ jsxs14(
    "section",
    {
      className: "mb-9 box-border flex w-full max-w-lg flex-col pr-10 last:mb-0 md:w-1/2 lg:mb-0 lg:w-1/3",
      children: [
        /* @__PURE__ */ jsx21("h3", { className: "m-0 text-base font-semibold text-black dark:text-gray-50", children: item.title }),
        /* @__PURE__ */ jsx21("p", { className: "mb-4 mt-2 grow text-sm text-gray-500 dark:text-gray-400", children: item.description }),
        item.link && /* @__PURE__ */ jsx21(
          Anchor,
          {
            className: "mt-auto w-max text-sm text-cyan-400 hover:text-cyan-300",
            ...item.link
          }
        )
      ]
    },
    `info-${index}`
  )) })
] }) });

// src/components/legacy-package-cmd.tsx
import { useMemo } from "react";
import { Pre, Tabs } from "nextra/components";
import { jsx as jsx22 } from "react/jsx-runtime";
var PACKAGE_MANAGERS = ["yarn", "npm", "pnpm"];
var Add = {
  yarn: "yarn add",
  npm: "npm install",
  pnpm: "pnpm add"
};
var Run = {
  yarn: "yarn",
  npm: "npm run",
  pnpm: "pnpm"
};
var Install = {
  yarn: "yarn",
  npm: "npm install",
  pnpm: "pnpm install"
};
var Init = {
  yarn: "yarn init --yes",
  npm: "npm init --yes",
  pnpm: "pnpm init"
};
var Global = {
  yarn: "yarn global add",
  npm: "npm install --global",
  pnpm: "pnpm add --global"
};
var LegacyPackageCmd = ({
  packages
}) => {
  const commands = useMemo(
    () => PACKAGE_MANAGERS.map(
      (pkgManager) => packages.map((pkg) => typeof pkg === "string" ? { name: pkg, cmd: "add" } : pkg).map((pkg) => {
        switch (pkg.cmd) {
          case "run":
            return `${pkgManager === "npm" && pkg.isNpx ? "npx" : Run[pkgManager]} ${pkg.name}`;
          case "install":
            return `${Install[pkgManager]}${pkg.name ? ` ${pkg.name}` : ""}`;
          case "init":
            return Init[pkgManager];
          default:
            return `${pkg.isGlobal ? Global[pkgManager] : Add[pkgManager]} ${pkg.name}`;
        }
      }).join("\n")
    ),
    [packages]
  );
  return /* @__PURE__ */ jsx22(Tabs, { items: PACKAGE_MANAGERS, children: PACKAGE_MANAGERS.map((pkgManager, index) => /* @__PURE__ */ jsx22(Tabs.Tab, { children: /* @__PURE__ */ jsx22(Pre, { "data-filename": "Terminal", "data-copy": "", "data-language": "sh", "data-theme": "default", children: /* @__PURE__ */ jsx22("code", { children: /* @__PURE__ */ jsx22("span", { className: "line", children: commands[index] }) }) }) }, pkgManager)) });
};

// src/components/marketplace-list.tsx
import { useEffect, useMemo as useMemo2, useState } from "react";
import clsx12 from "clsx";
import ReactPaginate from "react-paginate";

// src/components/tag.tsx
import clsx11 from "clsx";
import { jsx as jsx23 } from "react/jsx-runtime";
var Tag = ({
  children,
  selected,
  onClick
}) => {
  return /* @__PURE__ */ jsx23(
    "button",
    {
      className: clsx11(
        "mb-2 mr-2 inline cursor-pointer rounded-md border-0 px-2 py-1 text-xs outline-none",
        selected ? "bg-gray-400 text-gray-700" : "bg-gray-200 text-gray-500"
      ),
      onClick,
      children
    }
  );
};
var TagsContainer = ({ children }) => {
  return /* @__PURE__ */ jsx23("div", { className: "flex flex-wrap py-2", children });
};

// src/components/marketplace-list.tsx
import { Fragment as Fragment2, jsx as jsx24, jsxs as jsxs15 } from "react/jsx-runtime";
var formatDate = (value) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const date = new Date(value);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
var TableBody = ({ items = [] }) => /* @__PURE__ */ jsx24("tbody", { children: items.map((item) => /* @__PURE__ */ jsxs15(
  "tr",
  {
    className: "border-0 border-b border-solid border-gray-300 text-xs font-medium text-gray-500 last:border-0 dark:border-gray-800 dark:text-gray-400",
    children: [
      /* @__PURE__ */ jsx24("td", { className: "w-14 py-4 pr-2 align-top md:w-20", children: item.image && /* @__PURE__ */ jsx24(Image, { ...item.image }) }),
      /* @__PURE__ */ jsx24("td", { className: "px-2 py-4", children: /* @__PURE__ */ jsxs15(
        Anchor,
        {
          ...item.link,
          className: clsx12(
            "text-gray-500 duration-150 ease-in-out hover:opacity-75 dark:text-gray-400",
            item.link.className
          ),
          children: [
            /* @__PURE__ */ jsx24("h3", { className: "m-0 line-clamp-2 text-base font-bold text-black dark:text-white md:text-lg", children: item.title }),
            /* @__PURE__ */ jsx24("div", { className: "line-clamp-3", children: item.description }),
            item.tags && item.tags.length > 0 && /* @__PURE__ */ jsx24(TagsContainer, { children: item.tags.map((tagName) => /* @__PURE__ */ jsx24(Tag, { children: tagName }, tagName)) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx24("td", { className: "hidden px-2 py-4 md:table-cell", children: formatDate(item.update) }),
      /* @__PURE__ */ jsx24("td", { className: "py-4 pl-2", children: /* @__PURE__ */ jsx24(
        Anchor,
        {
          ...item.link,
          className: clsx12(
            "inline-block rounded-lg bg-gray-200 p-1.5 text-gray-800 hover:invert dark:bg-gray-700 dark:text-white md:p-2.5",
            item.link.className
          ),
          children: /* @__PURE__ */ jsx24(SvgCaretSlim, { className: "size-5 -rotate-90" })
        }
      ) })
    ]
  },
  item.title
)) });
var MarketplaceList = ({
  title,
  placeholder,
  items,
  pagination,
  className
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = pagination || 5;
  const pageCount = items ? Math.ceil(items.length / pageSize) : 1;
  useEffect(() => {
    setCurrentPage(0);
  }, [items]);
  const pages = useMemo2(() => {
    const itemsCopy = [...items];
    const pagesData = [];
    while (itemsCopy.length > 0) {
      pagesData.push(itemsCopy.splice(0, pageSize));
    }
    return pagesData;
  }, [items, pageSize]);
  return /* @__PURE__ */ jsxs15("section", { className: clsx12("w-full bg-white dark:bg-[#111]", className), children: [
    title && /* @__PURE__ */ jsx24("h2", { className: "mb-4 mt-0 text-xl font-bold text-black dark:text-gray-50 md:text-2xl", children: title }),
    pages[currentPage]?.length ? /* @__PURE__ */ jsxs15(Fragment2, { children: [
      /* @__PURE__ */ jsxs15("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ jsx24("thead", { className: "whitespace-nowrap px-2 text-left text-xs font-semibold uppercase text-gray-300 dark:text-gray-600", children: /* @__PURE__ */ jsxs15("tr", { className: "border-0", children: [
          /* @__PURE__ */ jsx24("th", { className: "px-2" }),
          /* @__PURE__ */ jsx24("th", { className: "px-2", children: "Name" }),
          /* @__PURE__ */ jsx24("th", { className: "hidden px-2 md:table-cell", children: "Last Update" }),
          /* @__PURE__ */ jsx24("th", { className: "px-2" })
        ] }) }),
        /* @__PURE__ */ jsx24(TableBody, { items: pages[currentPage] })
      ] }),
      pageCount > 1 && /* @__PURE__ */ jsx24(
        ReactPaginate,
        {
          pageCount,
          forcePage: currentPage,
          pageRangeDisplayed: 3,
          marginPagesDisplayed: 1,
          onPageChange: (page) => setCurrentPage(page.selected),
          containerClassName: "flex justify-center gap-x-2",
          previousClassName: "hidden",
          nextClassName: "hidden",
          pageLinkClassName: "\n                text-sm\n                bg-gray-200\n                dark:text-gray-300\n                dark:bg-gray-700\n                rounded-lg\n                select-none\n                hover:opacity-70\n                transition\n                px-3.5\n                py-2\n              ",
          activeLinkClassName: "invert"
        }
      )
    ] }) : /* @__PURE__ */ jsx24("div", { className: "flex h-24 w-full items-center justify-center rounded-lg bg-gray-100 text-black dark:bg-gray-700 dark:text-gray-300", children: placeholder })
  ] });
};

// src/components/marketplace-search.tsx
import { isValidElement as isValidElement2, useCallback, useMemo as useMemo3, useState as useState2 } from "react";
import clsx13 from "clsx";
import fuzzy from "fuzzy";
import { Fragment as Fragment3, jsx as jsx25, jsxs as jsxs16 } from "react/jsx-runtime";
var renderQueryPlaceholder = (placeholder, query) => {
  if (!query || isValidElement2(placeholder)) {
    return placeholder;
  }
  const subStrings = placeholder.split("{query}");
  return /* @__PURE__ */ jsxs16(Fragment3, { children: [
    subStrings[0],
    " ",
    /* @__PURE__ */ jsxs16("strong", { children: [
      '"',
      query,
      '"'
    ] }),
    " ",
    subStrings[1]
  ] });
};
var MarketplaceSearch = ({
  title,
  tagsFilter,
  placeholder,
  primaryList,
  secondaryList,
  queryList,
  className
}) => {
  const [query, setQuery] = useState2("");
  const handleChange = useCallback((e) => {
    setQuery(e.currentTarget.value);
  }, []);
  const handleTagClick = (tagName) => {
    if (query.includes(`#${tagName}`)) {
      setQuery(query.replace(`#${tagName}`, "").trim());
    } else {
      setQuery((prev) => `${prev} #${tagName}`);
    }
  };
  const items = useMemo3(() => {
    if (query && queryList) {
      const tags = query.split(/\s+/).filter((e) => e.startsWith("#")).map((e) => e.replace("#", ""));
      let filteredItems = queryList.items;
      if (tags.length > 0) {
        filteredItems = queryList.items.filter((item) => tags.every((e) => item.tags?.includes(e)));
      }
      const matchedResults = fuzzy.filter(
        // Removes tags and all special characters from the query string for better fuzzy matching
        // query
        query.replace(/#\w+/gi, "").replace(/[^\w\s]/gi, "").trim(),
        // Mapping the queryList items into a list of strings including the titles
        filteredItems.map((e) => e.title)
      ).map((e) => e.original.toLowerCase());
      return queryList.items.filter((e) => matchedResults.includes(e.title.toLowerCase()));
    }
  }, [query, queryList]);
  return /* @__PURE__ */ jsx25("section", { className: clsx13("bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs16("div", { className: "container max-w-[90rem] py-12", children: [
    /* @__PURE__ */ jsx25("h2", { className: "mb-4 mt-0 text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
    tagsFilter && /* @__PURE__ */ jsx25(TagsContainer, { children: tagsFilter.map((tagName) => /* @__PURE__ */ jsx25(
      Tag,
      {
        selected: query.includes(`#${tagName}`),
        onClick: () => handleTagClick(tagName),
        children: tagName
      },
      tagName
    )) }),
    /* @__PURE__ */ jsxs16("div", { className: "flex border-0 border-b border-solid border-gray-300 pb-3 dark:border-gray-800", children: [
      /* @__PURE__ */ jsx25(SvgSearch, { className: "text-gray-500 dark:text-white" }),
      /* @__PURE__ */ jsx25(
        "input",
        {
          value: query,
          type: "search",
          placeholder,
          onChange: handleChange,
          className: "ml-1.5 mt-0.5 w-full border-0 bg-white text-sm font-medium text-black outline-none dark:bg-[#111] dark:text-gray-50"
        }
      ),
      /* @__PURE__ */ jsx25(
        "button",
        {
          onClick: () => setQuery(""),
          className: "text-gray-300 hover:text-gray-700 dark:hover:text-white",
          children: /* @__PURE__ */ jsx25(SvgClose, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsx25("div", { className: "flex flex-wrap gap-10 py-6 lg:flex-nowrap", children: items && queryList ? /* @__PURE__ */ jsx25(
      MarketplaceList,
      {
        title: queryList.title,
        items,
        placeholder: renderQueryPlaceholder(queryList.placeholder, query),
        pagination: queryList.pagination
      }
    ) : /* @__PURE__ */ jsxs16(Fragment3, { children: [
      /* @__PURE__ */ jsx25(MarketplaceList, { ...primaryList }),
      secondaryList && /* @__PURE__ */ jsx25(MarketplaceList, { ...secondaryList })
    ] }) })
  ] }) });
};

// src/components/mdx-components.tsx
import { useRouter as useRouter2 } from "next/router";
import clsx14 from "clsx";
import { jsx as jsx26, jsxs as jsxs17 } from "react/jsx-runtime";
var mdxComponents = {
  source({ src, type, ...props }) {
    if (!src) {
      throw new Error("Must provide `src` prop");
    }
    let ext = src.replace(/.*\./, "");
    if (ext === "mov") {
      ext = "quicktime";
    }
    return /* @__PURE__ */ jsx26("source", { ...props, src, type: type || `video/${ext}` });
  },
  video: ({ className, children, ...props }) => /* @__PURE__ */ jsxs17("video", { className: clsx14("mt-6 w-full", className), autoPlay: true, loop: true, muted: true, ...props, children: [
    children,
    "Your browser does not support HTML video."
  ] }),
  iframe: ({ className, ...props }) => /* @__PURE__ */ jsx26(
    "iframe",
    {
      className: clsx14("mt-6 aspect-video w-full", className),
      title: "YouTube Video Player",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      ...props
    }
  ),
  img({ src = "", alt, ...props }) {
    const { basePath } = useRouter2();
    if (!src.startsWith("http")) {
      console.warn("Image", src, "doesn't use NextImage");
    }
    return /* @__PURE__ */ jsx26("img", { ...props, src: src.startsWith("/") ? basePath + src : src, alt });
  }
};

// src/components/npm-badge.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var NPMBadge = ({ name }) => {
  const encodedPackage = encodeURIComponent(name);
  return /* @__PURE__ */ jsx27(Anchor, { href: `https://npmjs.com/package/${encodedPackage}`, newWindow: true, children: /* @__PURE__ */ jsx27(
    "img",
    {
      src: `https://badge.fury.io/js/${encodedPackage}.svg`,
      alt: "npm version",
      className: "h-6"
    }
  ) });
};

// src/components/guild-navbar.tsx
import clsx15 from "clsx";
import { Fragment as Fragment4, jsx as jsx28, jsxs as jsxs18 } from "react/jsx-runtime";
// GuildUnifiedLogo 初始化
function GuildUnifiedLogo({
  children,
  title,
  description
}) {
  return /* @__PURE__ */ jsxs18(Fragment4, { children: [
    /* @__PURE__ */ jsxs18(
      Anchor,
      {
        title: "华飞科技",
        className: clsx15(
          "flex items-center gap-x-1.5 transition-opacity hover:opacity-75",
          children && "max-md:hidden"
        ),
        href: "https://jiujuaner.com",
        children: [
          /* @__PURE__ */ jsx28(SvgGuild, { className: "h-9 w-auto" }),
          /* @__PURE__ */ jsx28(SvgTheGuild, { className: "w-11" })
          // /* @__PURE__ */ jsx28(SvgTheGuild, { className: "w-11" })
        ]
      }
    ),
    children && /* @__PURE__ */ jsxs18(Fragment4, { children: [
      /* @__PURE__ */ jsx28(
        "svg",
        {
          height: "22",
          viewBox: "0 0 10 22",
          stroke: "currentColor",
          className: "mx-6 shrink-0 max-md:hidden",
          children: /* @__PURE__ */ jsx28("path", { d: "M8.6001 0.833313L0.600097 20.8333" })
        }
      ),
      /* @__PURE__ */ jsxs18(
        Anchor,
        {
          title,
          className: "flex shrink-0 items-center gap-x-1.5 hover:opacity-75",
          href: "/",
          children: [
            typeof children === "function" ? children({}) : children,
            /* @__PURE__ */ jsxs18("div", { children: [
              /* @__PURE__ */ jsx28("h1", { className: "text-sm font-bold leading-tight", children: title }),
              /* @__PURE__ */ jsx28("h2", { className: "text-xs max-lg:hidden", children: description })
            ] })
          ]
        }
      )
    ] })
  ] });
}

// src/components/theme-switcher.tsx
import { useTheme } from "nextra-theme-docs";
import { jsx as jsx29 } from "react/jsx-runtime";
function ThemeSwitcherButton() {
  const { resolvedTheme, setTheme } = useTheme();
  return /* @__PURE__ */ jsx29(
    "button",
    {
      onClick: () => setTheme(resolvedTheme === "light" ? "dark" : "light"),
      className: "self-center rounded-sm p-2 outline-none focus-visible:ring",
      children: /* @__PURE__ */ jsx29(SvgMoon, { className: "fill-transparent stroke-gray-500 dark:fill-gray-100 dark:stroke-gray-100" })
    }
  );
}

// src/components/company-menu.tsx
import { jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
var productsItems = Object.fromEntries(
  Object.values(PRODUCTS).map((product) => [
    product.name,
    {
      title: /* @__PURE__ */ jsxs19("span", { className: "flex items-center gap-2", title: product.title, children: [
        /* @__PURE__ */ jsx30(product.logo, { className: "size-7 shrink-0" }),
        product.name
      ] }),
      href: product.href
    }
  ])
);
function addGuildCompanyMenu(items) {
  return [
    {
      type: "menu",
      title: "Company",
      items: {
        about: {
          title: "About",
          href: "https://jiujuaner.com/about-us",
          newWindow: true
        },
        blog: {
          title: "Blog",
          href: "https://jiujuaner.com/blog",
          newWindow: true
        },
        contact: {
          title: "Contact",
          href: "https://jiujuaner.com/#get-in-touch",
          newWindow: true
        }
      },
      name: "company",
      route: "#"
    },
    {
      type: "menu",
      title: "Products",
      items: productsItems,
      name: "products",
      route: "#"
    },
    ...items
  ];
}

// src/define-config.tsx
import { useRouter as useRouter3 } from "next/router";
import { Navbar, useConfig } from "nextra-theme-docs";
import { Fragment as Fragment5, jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
function defineConfig({
  websiteName,
  description,
  logo,
  ...config
}) {
  if (!config.docsRepositoryBase) {
    throw new Error('Missing required "docsRepositoryBase" property');
  }
  const url = new URL(config.docsRepositoryBase);
  const [, org, repoName] = url.pathname.split("/");
  const siteUrl = process.env.SITE_URL;
  return {
    editLink: {
      content: "Edit this page on GitHub"
    },
    feedback: {
      content: "Question? Give us feedback \u2192",
      labels: "kind/docs"
    },
    footer: {
      component: /* @__PURE__ */ jsx31(Footer, {})
    },
    sidebar: {
      defaultMenuCollapseLevel: 1,
      toggleButton: true
    },
    project: {
      link: `${url.origin}/${org}/${repoName}`
      // GitHub link in the navbar
    },
    head: function useHead() {
      const { frontMatter, title: pageTitle } = useConfig();
      const { asPath } = useRouter3();
      const {
        description: description2 = `${websiteName} Documentation`,
        type = "website",
        canonical = siteUrl && `${siteUrl}${// we disallow trailing slashes
        // TODO: dont do this if `trailingSlashes: true`
        asPath === "/" ? (
          // homepage
          ""
        ) : asPath.startsWith("/?") ? (
          // homepage with search params (remove just slash)
          asPath.slice(1)
        ) : (
          // other pages
          asPath
        )}`,
        image = `https://jiujuaner.com/static/download_huafei.png`
      } = frontMatter;
      const title = `${pageTitle} (${websiteName})`;
      return /* @__PURE__ */ jsxs20(Fragment5, { children: [
        /* @__PURE__ */ jsx31("title", { children: title }),
        /* @__PURE__ */ jsx31("meta", { property: "og:title", content: title }),
        description2 && [
          /* @__PURE__ */ jsx31("meta", { name: "description", content: description2 }, 0),
          /* @__PURE__ */ jsx31("meta", { property: "og:description", content: description2 }, 1)
        ],
        canonical && [
          /* @__PURE__ */ jsx31("link", { rel: "canonical", href: canonical }, 3),
          /* @__PURE__ */ jsx31("meta", { property: "og:url", content: canonical }, 4)
        ],
        /* @__PURE__ */ jsx31("meta", { name: "twitter:card", content: "summary_large_image" }),
        /* @__PURE__ */ jsx31("meta", { name: "twitter:site", content: "https://jiujuaner.com" }),
        /* @__PURE__ */ jsx31("meta", { name: "twitter:creator", content: "@TheGuildDev" }),
        /* @__PURE__ */ jsx31("meta", { property: "og:type", content: type }),
        /* @__PURE__ */ jsx31("meta", { property: "og:site_name", content: websiteName }),
        /* @__PURE__ */ jsx31("meta", { property: "og:image", content: image }),
        /* @__PURE__ */ jsx31("meta", { property: "og:image:alt", content: pageTitle }),
        /* @__PURE__ */ jsx31("meta", { content: websiteName, name: "apple-mobile-web-app-title" }),
        /* @__PURE__ */ jsx31("meta", { content: websiteName, name: "application-name" }),
        /* @__PURE__ */ jsx31("meta", { name: "robots", content: "index,follow" })
      ] });
    },
    logoLink: false,
    logo: /* @__PURE__ */ jsx31(GuildUnifiedLogo, { description, title: websiteName, children: logo }),
    navbar: {
      extraContent: /* @__PURE__ */ jsx31(ThemeSwitcherButton, {}),
      ...logo && { component: (props) => /* @__PURE__ */ jsx31(Navbar, { items: addGuildCompanyMenu(props.items) }) }
    },
    ...config,
    components: {
      ...mdxComponents,
      ...config.components
    }
  };
}

// src/npm.ts
import semver from "semver";
var cache = {};
function withoutStartingSlash(v) {
  if (v === "/") return v;
  if (v.startsWith("/")) return v.slice(1, v.length);
  return v;
}
function withoutTrailingSlash(v) {
  if (v === "/") return v;
  if (v.endsWith("/")) return v.slice(0, v.length - 1);
  return v;
}
function withStartingSlash(v) {
  if (v.startsWith("/")) return v;
  return `/${v}`;
}
async function tryRemoteReadme(repo, path) {
  const fetchPath = `https://raw.githubusercontent.com/${withoutStartingSlash(
    withoutTrailingSlash(repo)
  )}/HEAD${withStartingSlash(path)}`;
  try {
    const response = await fetch(fetchPath, {
      method: "GET"
    });
    if (response.status === 404) {
      console.error(`ERROR | ${fetchPath} Not Found`);
    }
    return await response.text();
  } catch (err) {
    console.error(
      `[@theguild/components] ERROR | Error while trying to get README from GitHub ${fetchPath}`
    );
    console.error(err);
    return null;
  }
}
var NO_NPM_README_PLACEHOLDER = "ERROR: No README data found!";
var fetchPackageInfo = async (packageName, githubReadme) => {
  const cacheKey = githubReadme ? `${githubReadme.repo}${githubReadme.path}` : packageName;
  const cachedData = cache[cacheKey];
  if (cachedData) {
    return cachedData;
  }
  const encodedName = encodeURIComponent(packageName);
  console.debug(`Loading NPM package info: ${packageName}`);
  const [packageInfo, { downloads }] = await Promise.all([
    fetch(`https://registry.npmjs.org/${encodedName}`).then((response) => response.json()),
    fetch(`https://api.npmjs.org/downloads/point/last-week/${encodedName}`).then(
      (response) => response.json()
    )
  ]);
  const { readme, time, description } = packageInfo;
  const latestVersion = packageInfo["dist-tags"].latest;
  const readmeContent = githubReadme && await tryRemoteReadme(githubReadme.repo, githubReadme.path);
  cache[cacheKey] = {
    readme: readmeContent || readme !== NO_NPM_README_PLACEHOLDER && readme || // for some reason top level "readme" can be empty string, so we get the latest version readme
    Object.values(packageInfo.versions).reverse().find((curr) => {
      const isReadmeExist = curr.readme && curr.readme !== NO_NPM_README_PLACEHOLDER;
      if (isReadmeExist) {
        return semver.lte(curr.version, latestVersion);
      }
    })?.readme || "",
    createdAt: time.created,
    updatedAt: time.modified,
    description,
    weeklyNPMDownloads: downloads
  };
  return cache[cacheKey];
};
export {
  Anchor,
  Bleed,
  Button,
  SvgCsaStarLevelOne as CSAStarLevelOneIcon,
  Callout,
  Cards,
  CardsColorful,
  SvgCaretSlim as CaretSlimIcon,
  SvgClose as CloseIcon,
  Code,
  Collapse,
  DiscordIcon,
  FeatureList,
  FileTree,
  Footer,
  default2 as Giscus,
  GitHubIcon,
  GuildUnifiedLogo,
  HeroGradient,
  HeroIllustration,
  HeroMarketplace,
  HeroVideo,
  Image,
  InfoList,
  InformationCircleIcon,
  LegacyPackageCmd,
  SvgLinkedin as LinkedInIcon,
  MarketplaceList,
  MarketplaceSearch,
  Mermaid,
  SvgMoon as MoonIcon,
  SvgMore as MoreIcon,
  NPMBadge,
  Navbar2 as Navbar,
  NotFoundPage,
  PRODUCTS,
  RemoteContent,
  SvgSearch as SearchIcon,
  SvgShare as ShareIcon,
  Steps,
  Table,
  Tabs2 as Tabs,
  Td,
  Th,
  ThemeSwitcherButton,
  Tr,
  SvgTwitter as TwitterIcon,
  SvgYoutube as YouTubeIcon,
  createCatchAllMeta,
  defineConfig,
  fetchPackageInfo,
  mdxComponents,
  productsItems,
  useConfig2 as useConfig,
  useData,
  useMDXComponents,
  useMounted2 as useMounted,
  useTheme2 as useTheme,
  useThemeConfig
};
