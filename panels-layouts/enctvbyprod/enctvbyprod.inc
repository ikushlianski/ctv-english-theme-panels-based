<?php

/**
 * implementation of hook_panels_layouts()
 */
// Plugin definition
$plugin = array(
  'title' => t('engctvbyprod'),
  'category' => t('Columns: 1'),
  'icon' => 'engctvbyprod.png',
  'theme' => 'engctvbyprod',
  'css' => 'engctvbyprod.css',
  'regions' => array(
  	'header' => t('header'),
  	'first' => t('first'),
  	'second' => t('second'),
  	'third' => t('third'),
  	'fourth' => t('fourth'),
  	'fifth' => t('fifth'),
  	'footer' => t('footer')
  ),
);
