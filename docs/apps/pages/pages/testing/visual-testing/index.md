---
id: 'visual-testing'
title: 'Visual Testing'
---

Visual tests, also called visual regression tests, catch bugs in UI appearance. They work by taking screenshots of every story and comparing them commit-to-commit to identify changes.

To make Wingsuit work with visual regression tests you can configure the seed of the faker plugin with the environment `STORYBOOK_WINGSUIT_FAKER_SEED`.
The seed must be a numeric value. 

With a configured seed the faker plugin will generate the same faked values. So a visual testing tool won't detect text changes any more.

Here an example to export your patterns to chromatic with the same faker values:
```
"chromatic": "cross-env-shell STORYBOOK_WINGSUIT_FAKER_SEED=4242 \"npx chromatic --project-token TOKEN\""
```

<div class="next-title">NEXT</div>
<div class="next">
    <div class="next__content"><b>Storybook visual testing documentation</b></div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://storybook.js.org/docs/react/workflows/visual-testing#gatsby-focus-wrapper">Continue</a>
</div>
<div class="next">
    <div class="next__content"><b>Chromatic, great visual testing service made by Storybook</b></div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="http://chromatic.com/">Great!.</a>
</div>
<div class="next">
    <div class="next__content"><b>Storybook addon storyshots</b></div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://github.com/storybookjs/storybook/tree/master/addons/storyshots">Continue</a>
</div>

