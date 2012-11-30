define(['transformer'], function () {

	describe('class transformations', function () {

		function Transformer() {
			var _foo = 'FOO';
			var _protected = {
				vehicle : 'car',
				doAction: function () {
					throw new Error("Do Action is not implemented");
				}
			};

			Transformer.prototype.protected = _protected;

			this.getVehicle = function () {
				return _protected.vehicle;
			};

			this.bar = function () {
				return _foo + ' BAR';
			};
		}
		Transformer.transformable();

		function Optimus() {
			var _protected = {

			};

			this.protected = _protected;

			this.getVehicle = function () {
				return _protected.vehicle;
			};
		}
		Transformer.transformsTo(Optimus);

		describe('transformable class', function () {
			it('should be able to instantiate a transformable a class', function () {
				var transformer = new Transformer();

				expect(transformer.bar()).toEqual('FOO BAR');
			});

			it('should not have the _protected in the public anymore', function () {
				var transformer = new Transformer();

				expect(transformer._protected).toEqual(undefined);
			});

			it('should still have the protected variables accesable through other functions', function () {
				var transformer = new Transformer();

				expect(transformer.getVehicle()).toEqual('car');
			});

		});

		describe('transforming into a class', function () {
			it('should be able to transform into an different class', function () {
				var transformer = new Transformer();
				transformer.transformsInto(Optimus);

				expect(transformer.getVehicle()).toEqual('Truck');
			});
		});

	});

});