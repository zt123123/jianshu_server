"use strict";

var gulp = require("gulp"),
    tslint = require("gulp-tslint"),
    tsc = require("gulp-typescript"),
    runSequence = require("run-sequence");

gulp.task("lint", function () {
    var config = { formatter: "verbose" };
    return gulp.src([
        "src/**/**.ts"
    ])
        .pipe(tslint(config))
        .pipe(tslint.report());
});

var tstProject = tsc.createProject("tsconfig.json", { typescript: require("typescript") });

gulp.task("build", function () {
    return gulp.src([
        "src/**/*.ts"
    ])
        .pipe(tstProject())
        .on("error", function (err) {
            process.exit(1);
        })
        .js.pipe(gulp.dest("dist/"));
});

gulp.task("default", function (cb) {
    runSequence("build", cb);
});