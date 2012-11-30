define('transformer', function () {

	Function.prototype.transformable = function () {
		createTransformable(this);
	};
	
	function createTransformable(OriginalClass) {
		var _protected = OriginalClass.prototype._protected;

		function getProtected() {
			return _protected;
		}

		function Transformable() {
			this.transformsInto = function () {

			};
		}

		OriginalClass.transformsTo = function (Form) {

		};

		function implementTransformable() {
			OriginalClass.prototype = new Transformable();
		}

		implementTransformable();
	}

	function createTransformForm(){

	}

});