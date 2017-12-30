<?php

/**
 * implementation of hook_panels_layouts()
 */
// Plugin definition
$plugin = array(
  'title' => t('enctvstandard'),
  'category' => t('Columns: 1'),
  'icon' => 'enctvstandard.png',
  'theme' => 'enctvstandard',
  'css' => 'enctvstandard.css',
  'regions' => array(
    'header' => t('header'),
  	'center' => t('center'),
  	'footer' => t('footer')
  ),
);
