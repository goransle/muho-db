var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
* PostImage Model
* ==================
*/

var PostImage = new keystone.List('PostImage', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

PostImage.add({
	title: { type: String, required: true },
	image: { type: Types.LocalFile,
		dest: './public/images/post',
		prefix: '/images/post',
		format: function(item, file){
			return '<img src="' + file.href + '" style="max-width: 300px;max-height:300px"><br/>' +"&lt;img src='" + file.href + "'&gt";
		}},
		content: {
			brief: { type: Types.Html, wysiwyg: true, height: 150 },
		},
		categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
	});

	PostImage.register();
