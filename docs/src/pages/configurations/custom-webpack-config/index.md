---
id: 'custom-webpack-config'
title: 'Custom webpack configuration'
---

## Overview
Wingsuit uses webpack bundles to make webpack configs reusable for differnt apps. The goal is to deliver a community driven set of webpack configurations.
A webpack bundle is basicly a class which returns a webpack config object. 

Each bundle is registerd at wingsuit core. 
 