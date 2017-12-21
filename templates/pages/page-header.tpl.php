<?php
$pathToTheme = $base_path . $directory . '/images-source/';
$brandedBackground = "";
$advertizerSite = "";
if ($brandedBackground) {
  $pathToBackground = $pathToTheme . $brandedBackground;
}
 ?>
<?php print render($page['sitemap_nav']); ?>

<div id="page-wrapper"><div id="page"
  <?php if ($brandedBackground): ?>
  style="
    background-color: transparent;
    background-image: url(<?php echo $pathToBackground ?>);
    background-position: top center;
    background-size: auto;
    background-repeat: no-repeat;
  "
  <?php endif; ?>
>
  <?php if ($brandedBackground): ?>
  <a class="advertizerSiteLink" target="_blank" href="<?php if ($advertizerSite) { echo $advertizerSite; } ?>" style="display: block; height: 15em; width: 100%"></a>
  <?php endif; ?>

  <div id="header"><div class=" clearfix">
  <?php if ($site_name || $site_slogan): ?>
    <div id="name-and-slogan">
      <?php if ($site_name): ?>
        <?php if ($title): ?>
          <div id="site-name"><strong>
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
          </strong></div>
        <?php else: /* Use h1 when the content title is empty */ ?>
          <h1 id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
          </h1>
        <?php endif; ?>
      <?php endif; ?>

      <?php if ($site_slogan): ?>
        <div id="site-slogan"><?php print $site_slogan; ?></div>
      <?php endif; ?>
    </div> <!-- /#name-and-slogan -->
  <?php endif; ?>

  <?php if ($main_menu || $secondary_menu): ?>
    <div id="navigation">
      <div class=" nav-group">
        <div class="brandAndToggleDiv">
          <?php if ($logo): ?>
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo" class="logo">
              <img src="<?php echo file_create_url(path_to_theme().'/images-source/logo_stv.png') ?>" alt="<?php print t('Home'); ?>" />
            </a>
          <?php endif; ?>
          <!-- <div class="site-slogan">Belarus news in English</div> -->
          <i class="fa fa-2x fa-bars toggle" aria-hidden="true"></i>
        </div>
        <div class="nav-menu-div">

          <div class="mainAndSecondaryMenuWrapper">
            <?php if ($logo): ?>
              <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"  id="logo_largeScreens" class="logo_largeScreens">
                <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
              </a>
            <?php endif; ?>

            <?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array('main-menu links', 'clearfix'))/*, 'heading' => t('Main menu')*/)); ?>

          </div>

          <div class="secondary_menu_wrapper">
            <?php print theme('links__system_secondary_menu', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary-menu', 'class' => array('login-menu links', 'clearfix'))/*, 'heading' => t('Secondary menu')*/)); ?>
            <a href="http://ctv.by" title="<?php print t('CTV.by Russian version'); ?>" rel="home" id="logo_ruslang" class="logo_lang">
              <img src="<?php echo file_create_url(path_to_theme().'/images-source/rus_flag.png') ?>" alt="<?php print t('CTV.by Russian version'); ?>" />
            </a>
            <a class="login-menu-hider-link" <?php if (user_is_anonymous()): ?> href="<?php $base_url ?>/user" <?php endif; ?>><i class="fa fa-2x fa-user login-menu-hider" aria-hidden="true"></i></a>
            <i class="fa fa-2x fa-bars toggle_largeScreens" aria-hidden="true"></i>
          </div>

        </div>
      </div>

      <div class=" nav-group2">
        <div class="nav-menu-div">
          <?php print theme(
          'links__system_main_menu_2',
          array(
            'links' => $main_menu_2,
            'attributes' => array(
              'id' => 'main-menu-2',
              'class' => array(
                'main-menu-2 links',
                'clearfix'
              )
            ),
              'heading' => array(
                'text' => t('Trending'),
                'level' => 'h4',
                'class' => 'hot-topics-heading'
              )
           )
         ); ?>
        </div>
      </div>
    </div> <!-- /.section, /#navigation -->
  <?php endif; ?>

  <?php print render($page['header']); ?>

</div></div> <!-- /.section, /#header -->
