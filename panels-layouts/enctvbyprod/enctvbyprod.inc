<?php

/**
 * implementation of hook_panels_layouts()
 */
// Plugin definition
$plugin = array(
  'title' => t('enctvbyprod'),
  'category' => t('Columns: 1'),
  'icon' => 'enctvbyprod.png',
  'theme' => 'enctvbyprod',
  'css' => 'enctvbyprod.css',
  'regions' => array(
    'header' => t('header'),
  	'region-fp-five-main-items' => t('region-fp-five-main-items'),
  	'region-fp-three-submain-sections' => t('region-fp-three-submain-sections'),
  	'region-fp-media' => t('region-fp-media'),
  	'fp-other-content-1' => t('fp-other-content-1'),
  	'fp-other-content-2' => t('fp-other-content-2'),
  	'footer' => t('footer')
  ),
);
