module.exports = {
  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js)": (filenames) => [`pnpm eslint ${filenames.join(" ")}`],
};
