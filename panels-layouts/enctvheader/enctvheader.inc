<?php

/**
 * implementation of hook_panels_layouts()
 */
// Plugin definition
$plugin = array(
  'title' => t('enctvheader'),
  'category' => t('Columns: 1'),
  'icon' => 'enctvheader.png',
  'theme' => 'enctvheader',
  'css' => 'enctvheader.css',
  'regions' => array(
    'sitemap-nav' => t('sitemap-nav'),
    'main-menu-mobile' => t('main-menu-mobile'),
  	'main-menu-1' => t('main-menu-1'),
  	'main-menu-2' => t('main-menu-2')
  ),
);
