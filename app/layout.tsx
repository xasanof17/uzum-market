import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Navbar, Footer } from "@/layouts";
import { fontSans } from "@/utils/fonts";
import { BASE_URL } from "@/constants";
import { abstract } from "@/meta";
import { cn } from "@/lib/utils";
import Tabs from "@/components/tabs/Tabs";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  colorScheme: "light",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `%s - Uzum`,
      default: "Uzum Market - Internet Do'kon",
    },
    description: abstract,
    keywords: ["Uzum Market"],
    generator: "Next.js",
    publisher: "Vercel",
    creator: "MilleniumTech Team",
    authors: {
      name: "Millenium Tech",
      url: "https://milleniumcompany.tech",
    },
    applicationName: "Uzum Market",
    referrer: "origin",
    icons: {
      icon: `/icon.svg`,
      shortcut: `/shortcut.svg`,
      apple: `/apple-icon.svg`,
    },
    alternates: {
      canonical: BASE_URL,
    },
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
    abstract: abstract,
    assets: `${BASE_URL}/assets`,
    metadataBase: new URL(`${BASE_URL}`),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    verification: {
      google: `${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`,
      yandex: `${process.env.NEXT_PUBLIC_YANDEX_VERIFICATION}`,
    },
    openGraph: {
      type: "website",
      countryName: "Uzbekistan",
      title: "Uzum Market",
      description: abstract,
      emails: ["xasanof17@gmail.com"],
      faxNumbers: ["+998900198505"],
      siteName: "Uzum Market",
      url: `${BASE_URL}`,
      images: [
        {
          url: `/assets/opengraph-image.jpg`,
          width: 1920,
          height: 800,
          type: "image/jpg",
        },
      ],
      locale: "uz",
    },
    category: "Shopping",
  };
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Navbar />
        <main role="main">{children}</main>
        <Tabs />
        <Footer />
      </body>
    </html>
  );
}
