function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vTStPGK-9gddrbbximaoZCbmGB5WEus54_CGt8rK4XUe_oqsBHRUC35Q6VJMsjOFKEBTt4Td6QKzauv/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)

