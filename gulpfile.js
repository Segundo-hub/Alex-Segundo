const gulp = require("gulp")
const tinypng = require("gulp-tinypng-extended")

require("dotenv").config()

const { TINY_API_KEY } = process.env

const compressAssetsFiles = () =>
	gulp
		.src("./src/assets/images/*")
		.pipe(
			tinypng({
				key: TINY_API_KEY,
				sigFile: "images/.tinypng-sigs",
				log: true,
			})
		)
		.pipe(gulp.dest("./src/assets/images/"))

gulp.task("compressAssetsFiles", compressAssetsFiles)

gulp.task("watch", () => {
	gulp.watch("./src/assets/images/*", compressAssetsFiles)
})

gulp.task("default", gulp.series("compressAssetsFiles", "watch"))
