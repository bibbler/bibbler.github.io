function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1ZCLS7KCRRsVRjqAIrr_nIVSSvT9uTkpdHUrW4ZMI_qY/pubhtml',
 callback: showInfo
 simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);
 
for (var i = 0; i < data.length; i++) {
$(‘.post’).append(
‘<div class=”article”>’ +
‘<div class=”text”>’ +
‘<h1>’ + data[i].date + ‘</h1>’+
data[i].url +
‘</div>‘
‘</div>’);
 
 }
 }

window.addEventListener(‘DOMContentLoaded’, init)

