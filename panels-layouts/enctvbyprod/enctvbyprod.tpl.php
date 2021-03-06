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

        <div id="front-page-content-promoted" class="column">

          <div class="section">
            <div class="region region-fp-five-main-items">
            <?php print $content['region-fp-five-main-items'];?>
            </div>
          </div>

          <div class="section">
            <div class="region region-fp-three-submain-sections">
            <?php print $content['region-fp-three-submain-sections'];?>
            </div>
          </div>

          <div class="section">
            <div class="region region-fp-media">
            <?php print $content['region-fp-media'];?>
            </div>
          </div>

        </div>

        <div id="fp-other-content-wrapper">
          <div id="fp-other-content-1" class="clearfix">
          <?php print $content['fp-other-content-1'];?>
          </div>
          <div id="fp-other-content-2" class="clearfix">
          <?php print $content['fp-other-content-2'];?>
          </div>
        </div>

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
