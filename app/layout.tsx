import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://mclipperton.github.io/portfolio";
const sitePath = process.env.NEXT_PUBLIC_SITE_PATH ?? "";
const normalizedSiteUrl = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
const assetPath = (path: string) => `${sitePath}${path}`;
const toAbsoluteUrl = (path: string) =>
  new URL(path.replace(/^\//, ""), normalizedSiteUrl).toString();
const ogImageUrl = toAbsoluteUrl(assetPath("/og.svg"));
const iconUrl = toAbsoluteUrl(assetPath("/favicon.svg"));

export const metadata: Metadata = {
  metadataBase: new URL(normalizedSiteUrl),
  title: "Mark Clipperton | Senior Product Designer at iamproperty",
  description:
    "A portfolio website for senior product designer Mark Clipperton, featuring iamproperty experience, selected work, and design principles.",
  icons: {
    icon: iconUrl,
    shortcut: iconUrl,
  },
  openGraph: {
    title: "Mark Clipperton | Senior Product Designer at iamproperty",
    description:
      "Selected product design work, process notes, and contact details.",
    url: normalizedSiteUrl,
    siteName: "Mark Clipperton",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Mark Clipperton portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Clipperton | Senior Product Designer at iamproperty",
    description: "Selected product design work, process notes, and contact details.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
