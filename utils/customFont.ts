import localFont from "next/font/local";

const YekanBakh = localFont({
  src: [
    { path: "../public/fonts/YekanBakh-Thin.woff2", weight: "100", style: "normal" },
    { path: "../public/fonts/YekanBakh-Regular.woff2", weight: "200", style: "normal" },
    { path: "../public/fonts/YekanBakh-Medium.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/YekanBakh-Light.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/YekanBakh-Heavy.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/YekanBakh-Hairline.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/YekanBakh-Fat.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/YekanBakh-Bold.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-yekanBakh",
  display: "swap",
});

const FaNum = localFont({
  src: [
    { path: "../public/fonts/Anjoman-FaNum-Bold-f965d826.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Anjoman-FaNum-Medium-6ecc7777.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-faNum",
});

export { YekanBakh, FaNum };