import { MetadataRoute } from "next";
import { electionConfig } from "@/config/election";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = electionConfig.siteUrl;
  const lastModified = new Date("2026-08-18");

  const routes = [
    "",
    "/checker",
    "/qualifications",
    "/election-info",
    "/barangays",
    "/voters",
    "/faq",
    "/references",
    "/contact",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/checker" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/checker" ? 0.9 : 0.8,
  }));
}
