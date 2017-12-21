<?php
/**
 * @file
 * Returns the HTML for the sitemap nav region.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728140
 */
?>
<?php if ($content): ?>
    <div class="region-sitemap-nav" style="display: none">
        <i class="fa fa-2x fa-times toggle_largeScreens" aria-hidden="true"></i>
        <div class="searchBox"><?php print $search_box; ?></div>
        <div class="menu-blocks"><?php print $content; ?></div>
    </div>
<?php endif; ?>
