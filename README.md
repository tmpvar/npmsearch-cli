# nps (node package search)

searches online against [npmsearch.com](http://npmsearch.com)

## install

`npm install -g nps`

## use

`nps <query>`

### Examples

* find packages by isaacs: `nps author:isaacs`
* find packages by keyword: `nps keywords:http,client`


the default boolean operation is `OR` so if you want to force all terms be included in the results you must add `AND` (e.g `dom AND jquery`)

## TODO

 * Pagination

# License

MIT