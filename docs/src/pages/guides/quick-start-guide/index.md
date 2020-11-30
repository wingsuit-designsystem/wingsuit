---
id: 'quick-start-guide'
title: 'Quickstart guide'
---

## Prerequisites

- [Node `^12`](https://nodejs.org)
- [YARN `^1.22`](https://classic.yarnpkg.com/)
- [PHP `^7.0.0`](https://php.net)

Get started using the automated command line tool. This command creates a Wingsuit demo project. 
The demo page uses the atomic design principle to structure the patterns.

```shell script
npx @wingsuit-designsystem/cli init
```


With the `-k` option you can install other starter kits than Tailwind. At the moment tailwind is the most complete starter kit.
To install the (not ready) Bootstrap starter kit run: 

```shell
npx @wingsuit-designsystem/cli init -k bootrap
```


After the installation succeeds, Storybook will open and you can browse the Wingsuit demo page.

<img src="images/storybook.png">

## Drupal 
To get started with Drupal and UI Patterns use the Wingsuit Kickstarter.
```shell
composer create-project wingsuit-designsystem/wingsuit-kickstarter wingsuit-kickstarter --stability dev --no-interaction
```


## Get an overview
A good starting point is to have a look at the design system components, which you will find at `source/patterns/default`. Additional Storybook presentation templates are located at  `apps/storybook/patterns`.

A typical component includes a `pattern.wingsuit.yml`, a `twig template`,  and optionally a `css file` and/or a `behavior javascript` file. 


<div class="next-title">NEXT</div>
<div class="next">
<div class="next__content"><b>Drupal Kickstarter</b><br>with UI Patterns and Layout Builder</div>
<a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" href="../../drupal/ui_patterns">Continue</a>
</div>
<div class="next">
<div class="next__content"><b>Create a new component</b></div>
<a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" href="../create-component-guide">Continue</a>
</div>

