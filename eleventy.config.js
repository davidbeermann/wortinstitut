export default function (eleventyConfig) {
  // Bilder und Stylesheet unverändert in die fertige Website kopieren
  eleventyConfig.addPassthroughCopy({ "media": "media" });
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  // Aktuelles Jahr für die Fußzeile
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
