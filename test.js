function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1ZCLS7KCRRsVRjqAIrr_nIVSSvT9uTkpdHUrW4ZMI_qY/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)

