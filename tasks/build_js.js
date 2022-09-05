const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");

module.exports = function build_js() {
  return src(["src/components/**/*.js", "src/js/01_main.js"])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())

    .pipe(concat("main.min.js"))
    .pipe(dest("build/js/"));
};
