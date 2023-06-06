import React from 'react';
import { useRouter } from 'next/router';
import Logo from "components/logo";
import { ThemeToggle } from "components/ThemeToggle"; // Dark or Light button

export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml" />

      {/* HTML Meta Tags */}
      <meta
        name="description"
        content="Enjoy a privacy-focused operating system that respects your data and keeps it secure. No tracking, no clutter, no compromise. Just a clean and reliable system for everyone!👍"
      />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://leos.eu.org/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="LeOS" />
      <meta
        property="og:description"
        content="Enjoy a privacy-focused operating system that respects your data and keeps it secure. No tracking, no clutter, no compromise. Just a clean and reliable system for everyone!👍"
      />
      <meta property="og:image" content="https://leos.eu.org/og_image.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="leos.eu.org" />
      <meta property="twitter:url" content="https://leos.eu.org/" />
      <meta name="twitter:title" content="LeOS" />
      <meta
        name="twitter:description"
        content="Enjoy a privacy-focused operating system that respects your data and keeps it secure. No tracking, no clutter, no compromise. Just a clean and reliable system for everyone!👍"
      />
      <meta name="twitter:image" content="https://leos.eu.org/og_image.png" />
    </>
  ),

  // Title suffix
  titleSuffix: " – LeOS",
  // Logo
  logo: Logo,
  // Project link
  project: {
    link: 'https://github.com/leos-docs/website'
  },
  // Website edit url
  docsRepositoryBase: 'https://github.com/leos-docs/website/blob/main',
  // next links
  nextLinks: true,
  //prev Links
  prevLinks: true,
  // SEO optimization and home page title removal
  useNextSeoProps() {
    const { asPath, route } = useRouter();
    return {
      canonical: `https://leos.eu.org${asPath}`,
      titleTemplate: route === "/" ? "%s" : "%s – LeOS",
    };
  },

  // website default theme mode
  // darkMode: true,

  // SearchBox
  search: {
    // "component": Flexsearch,
    loading: "Loading...",
    placeholder: "Search"
  },

  // Announcement
  // banner: {
  //   key: 'key',
  //   text: (
  //     <a href="https://nextra.site" target="_blank">
  //       🎉 Read more →
  //     </a>
  //   )
  // }
  
  // Sidebar (right) custom text
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  
  // Sidebar
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },

  // footer
  footer: {
    text: (
        <p>
          © {new Date().getFullYear()} LeOS Docs.
        </p>
    )
  },

  // NavBar
  navbar: {
    extraContent: (
        <ThemeToggle />
    ),
  },
  // chat: {
  //   link: 'https://t.me/LeOS_Support',
  //   icon: (
  //     <Telegram theme="outline" size="24" fill="#333"/>
  //   )
  // }
}

