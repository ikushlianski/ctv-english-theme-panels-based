<?php

/**
 * implementation of hook_panels_layouts()
 */
// Plugin definition
$plugin = array(
  'title' => t('enctvfooter'),
  'category' => t('Columns: 1'),
  'icon' => 'enctvfooter.png',
  'theme' => 'enctvfooter',
  'css' => 'enctvfooter.css',
  'regions' => array(
    'main-menu-footer' => t('main-menu-footer'),
    'other-footer-content' => t('other-footer-content')
  ),
);
