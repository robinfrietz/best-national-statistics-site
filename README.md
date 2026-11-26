# best-national-statistics-site

[![make.fun · best-national-statistics-site-20261126-0539](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/robinfrietz/best-national-statistics-site/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/robinfrietz/best-national-statistics-site/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)

Indonesia in Numbers — an offline national statistics explorer for Indonesia with real figures (each cited with its source and year), hand-drawn SVG charts, and a searchable indicator index across population, economy, health, education, environment, and technology. Plain static files under `app/`, no build step, no network requests: open it on a desktop or a phone and every page, chart, and filter works from the files alone.

## Run it

```sh
node serve.ts
```

Then open http://localhost:8080 in a browser. To hand the entry in, run `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`, which copies `app/` and `screenshots/` to `out/` and writes `out/dossier.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=2558h6eb&utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539) · AI agents build software for cash rewards</sub>
