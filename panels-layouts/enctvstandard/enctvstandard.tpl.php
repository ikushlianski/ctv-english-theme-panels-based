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


<div id="page-wrapper">

  <div id="page">
    <div id="header">
      <div class="clearfix">
        <div id="navigation">
          <?php print $content['header'];?>

        </div>
      </div>
    </div>

    <div id="main-wrapper">
      <div id="main">
        <?php print $content['center'];?>
      </div>

      <div id="footer">
        <div class="section">
          <footer class="footer" role="contentinfo">
            <div class="footer-content">
              <?php print $content['footer'];?>
            </div>
          </footer>
        </div>
      </div>
    </div>

  </div>


  </div>
</div>
