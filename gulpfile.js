const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['server-ts/*.json', 'server-js/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('server-tsconfig.json');

gulp.task('compile', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('server-js'));
});

gulp.task('watch', ['compile'], () => {
  gulp.watch('server-ts/**/*.ts', ['compile']);
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('server-js'));
});

gulp.task('default', ['watch', 'assets']);
