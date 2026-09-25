import Image from "@11ty/eleventy-img";

const pathPrefix = "/wortinstitut/";

export default function (eleventyConfig) {
  // Bilder und Stylesheet unverändert in die fertige Website kopieren
  eleventyConfig.addPassthroughCopy({ "media": "media" });
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  // Aktuelles Jahr für die Fußzeile
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  // Buchcover: verkleinert und als WebP/PNG ausgeben
  eleventyConfig.addAsyncShortcode("cover", async function (src, alt) {
    if (!src) return "";

    let metadata = await Image(src, {
      widths: [176, 352],
      formats: ["webp", "png"],
      outputDir: "./_site/media/cover/",
      urlPath: `${pathPrefix}media/cover/`,
    });

    return Image.generateHTML(metadata, {
      alt,
      sizes: "(max-width: 640px) 68px, 88px",
      class: "pub-cover",
      loading: "lazy",
      decoding: "async",
    });
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site",
    },
    pathPrefix,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
