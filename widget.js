define('widget',
['classExtentions'],
function () {
	function Widget(view) {
		var _protected = {

		};

		this._constructor = function (view, settings) {
			_protected.view = view;
			_protected.settings = settings;
			loadTemplate();
		};

		function loadTemplate() {
			var _template, _data, _title, _message;
			
			_template = $('<section>');
			_title = $('<h1>').addClass('pv-tile-title').text('New Tile');
			_message = $('<div>').addClass('pv-tile-message').text('New Message');
			_template.append(_title);
			_template.append(_message);
			_protected.view.append(_template);
		}

		this._protected = _protected;
	}
	Widget = Widget.wrap();
	return Widget;
});