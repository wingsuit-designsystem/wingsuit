* * *

id: 'ui_patterns'

## title: 'How to use Wingsuit with UI Patterns and Layout Builder'

This "How To" explains how to use Wingsuit with UI Patterns and Drupal Layout Builder. 

## Step 1:

Add following modules to your composer.json:

-   [components](https://www.drupal.org/project/components)
-   [ui_patterns](https://www.drupal.org/project/ui_patterns)
-   [ui_patterns_layout_builder](https://www.drupal.org/project/ui_patterns_layout_builder)
-   [ui_patterns_settings](https://www.drupal.org/project/ui_patterns_layout_settings)
-   [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion)

After that enable following modules:

-   wingsuit_companion
-   ui_patterns_layout_builder
-   ui_patterns_settings


    drush en ui_patterns_layout_builder ui_patterns_settings wingsuit_companion 

## Step 2:

Install Wingsuit under `themes/custom` and enable the wingsuit theme and set it as default.

    npx @wingsuit-designsystem/cli init

Go to the wingsuit folder and run:

    yarn build:drupal

The command generates the dist folder to `wingsuit/dist/app-drupal`. The theme takes css js and patterns from the dist folder and not from `source` folder.

You can configure the path of your dist folder. See [Configuration details](../../configurations/details/index.md) to configure the webpack part. Open "Wingsuit settings" under Configuration in drupal and adjust the path to the dist folder.

If you want to develop in drupal run:

    yarn dev:drupal

This will run start and `webpack watch`.

## Congratulations:

Now your are done now! Open `Manage Display` you will find all your patterns.
