<?php
/**
 * @file
 * Template for a 3 column panel layout.
 *
 * This template provides a very simple "one column" panel display layout.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   $content['middle']: The only panel in the layout.
 */
?>

<div class="region-sitemap-nav">
  <?php print $content['sitemap-nav'];?>
</div>
<div class="nav-group-mobile">
  <?php print $content['main-menu-mobile'];?>
</div>
<div class="nav-group1-desktop">
  <?php print $content['main-menu-1'];?>
</div>
<div class="nav-group2-desktop">
  <?php print $content['main-menu-2'];?>
</div>
