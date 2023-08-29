import { Meta } from '@storybook/addon-docs';
import LinkTo from '@storybook/addon-links/react';

<Meta title="Foundations/Layout"/>

# Layout

Describe your mobile-first, extremely flexible flexbox layout system to build all sorts of layouts. It consists of three components: <LinkTo story="container" kind="organisms-container"><b>container</b></LinkTo>, <LinkTo story="grid" kind="organisms-grid"><b>grid</b></LinkTo> and <LinkTo story="one-column" kind="organisms-section"><b>section</b></LinkTo>

  ## How it works

  ```twig dark
    {% embed "@organisms/container/container.twig" with {width: 'default', 'padding_x': 'default', padding_top: 'default'} only %}
      {% block content %}
      {% set cells = [
              'Cell 1',
              'Cell 2'
            ] %}
            {% include "@organisms/grid/grid.twig" with {
              attributes: create_attribute(),
              cells: cells,
              columns: 2,
              columns_width: 'equal',
              gutter: 'default'
            } only %}
    {% endblock %}
  {% endembed %}
  ```

  ## This example above creates a two column grid inside a container.
  Breaking it down, here’s how it works:
  * The container adds a maximum width [width].
  * The container adds padding [padding_x] to browser borders.
  * The container adds padding [padding_top] to the parent container.
  * The grid has two columns [columns].
  * The columns are 50%:50% [columns_width].
  * There is a default spacing between the cells [gutter].

  ## Section

  ```twig dark
  {% embed "@organisms/section/section.twig" with { columns: 2, headline: 'Section title', width: 'default', 'padding_x': 'default', padding_top: 'default'} %}
    {% block column_1 %}
      First column
    {% endblock %}
    {% block column_2 %}
      Second column
    {% endblock %}
  {% endembed %}
  ```

  A section is a combination of a container and a grid to simplify the usage. The section has the same settings as grid and container.
  You can also use this pattern as a section in Drupal Layout Builder.
