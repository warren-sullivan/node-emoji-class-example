let emoji = require('node-emoji');

let array = [];
array.push(emoji.get('coffee'));
array.push(emoji.get('pizza'));
array.push(emoji.get('fist'));
array.push(emoji.get('sun_small_cloud'));
array.push(emoji.get('closed_lock_with_key'));
array.push(emoji.get('headphones'));
array.push(emoji.get('mouse2'));
array.push(emoji.get('recycle'));
array.push(emoji.get('maple_leaf'));
array.push(emoji.get('steam_locomotive'));

for(let i=0; i<array.length; i++) {
	console.log(array[i]);
}
