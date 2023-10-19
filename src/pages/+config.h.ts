import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault";
import Head from "../layouts/HeadDefault";
import logoUrl from "../assets/logo.svg";
import vikeReact from "vike-react";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "Vike + Tauri + React + TS",
  // <meta name="description">
  description: "Template for creating Tauri apps using React and Vike",
  // <link rel="icon" href="${favicon}" />
  favicon: logoUrl,
  extends: vikeReact,
} satisfies Config;
