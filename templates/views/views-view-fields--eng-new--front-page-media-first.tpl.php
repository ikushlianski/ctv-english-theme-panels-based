<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>

<?php
  $language = $row->_field_data['nid']['entity']->language;
  $imgUri = $row->_field_data['nid']['entity']->field_image[$language][0]['uri'];
  $nid = $row->_field_data['nid']['entity']->nid;
  $alias = drupal_get_path_alias('node/'. $nid);
  $tid = $row->_field_data['nid']['entity']->field_category[$language][0]['tid'];
  $taxonomyAlias = drupal_get_path_alias('taxonomy/term/'. $tid);
  $taxonomyName = taxonomy_term_load($tid)->name;
?>
<a class="itemLink" href="<?php echo $alias ?>">
  <div class="itemWrapper" style="background-image: url(<?php if($imgUri) {echo file_create_url($imgUri);} ?>)">
  </div>
</a>
    <h2 class="itemTitle">
      <a class="fp_categoryLink" href="<?php echo $taxonomyAlias ?>">
        <span class="fp_categoryLinkText"><?php echo $taxonomyName ?></span>
      </a>
      <span class="itemTitleText"><?php echo $row->_field_data['nid']['entity']->title ?></span>
    </h2>
    <?php // echo '<pre>'; var_dump($row); echo '</pre>'; ?>
