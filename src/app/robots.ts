import { MetadataRoute } from "next";
import { electionConfig } from "@/config/election";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${electionConfig.siteUrl}/sitemap.xml`,
  };
}
