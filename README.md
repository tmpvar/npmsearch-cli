# npmsearch-cli (node package search)

searches online against [npmsearch.com](http://npmsearch.com)

## install

`npm install -g npmsearch-cli`

## use

`npmsearch <query>`

### Examples

* find packages by isaacs: `npmsearch author:isaacs`
* find packages by keyword: `npmsearch author:substack AND keywords:browserify`


the default boolean operation is `OR` so if you want to force all terms be included in the results you must add `AND` (e.g `dom AND jquery`)

## TODO

 * Pagination

# License

[MIT](LICENSE.txt)
