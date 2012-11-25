define(['classExtentions'], function () {

	describe('class transformations', function () {

		function Transformer() {
			var _foo = 'FOO';
			var _protected = {

			};

			this.protected = _protected;

			this.bar = function () {
				return _foo + ' BAR';
			};
		}
		Transformer.transformable();

		describe('transformable class', function () {
			it('should be able to instantiate a transformable a class', function () {
				var transformer = new Transformer();

				expect(transformer.bar()).toEqual('FOO BAR');
			});
		});

	});

});