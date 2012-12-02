define(['widgets/tile/app'],
function (Tile) {
	describe('widget class', function () {
		it('should be able to load the tile widget', function () {
			var _tile, _targetDiv, _title, _message;

			_targetDiv = $('<div>');
			_title = 'New Tile';
			_message = 'New Message';
			_tile = new Tile(_targetDiv, _title, _message);

			expect(_targetDiv.find('.pv-tile-title').text()).toEqual(_title);
			expect(_targetDiv.find('.pv-tile-message').text()).toEqual(_message);
		});
	});
});