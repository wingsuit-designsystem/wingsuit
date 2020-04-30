# Server Tools

WingsuitTools adds a suite of Theme Helper functions common to Drupal.
These can be used across Server Drupal Application.

## Configuration

`Server.php` includes a set of global constants configuration specific to
a installation of Server:

* `THEME_NAME`: The Drupal theme name, default is set as Server.
* `ASSETS_PATH`: The path to the compiled assets for Drupal to consume.
* `FRONTEND_DOCS`: A direct link to Phase2's Front End Server docs.

Be aware that this configuration should be updated based on your Server.
If you change these variables of your theme, these `const` should be updated.

## Usage

If you have an additional helper function you'd like to include in your app,
simply extend the functionality of `WingsuitTools.php`:

```php
class MyCustomThemeTools extends WingsuitTools
```

This step will make sure any changes to your theme are not lost if you update
Server in the future.

Server Tools have already been added to individual `theme.inc` files, however
if you'd like to use the Tools elsewhere in PHP simply include the namespace to
the file (or your custom Tools):

```php
use Drupal\wingsuit\Tools\WingsuitTools;
```

Now whenever you wish to use a helper:

```php
WingsuitTools::yourHelperFunction()
```

Note this usage assumes you've declared a public static function and that it's
return is not tied specifically to the context of the instance. If you need a
more context specific approach, consider using public functions and declaring
your tools as an instance:

```php
$tools = new WingsuitTools
$tools->yourHelperFunction()
```
