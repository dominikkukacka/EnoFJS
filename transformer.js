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
			this.transformsInto = function (Form) {
				var _form, _method;

				_form = new Form();

				mergePublics(_form);
			};
		}

		OriginalClass.transformsTo = function (Form) {

		};

		function implementTransformable() {
			OriginalClass.prototype = new Transformable();
		}
		
		function mergePublics(form) {
			for (_method in form) {
				this[_method] = form[_method];
			}
		}

		function mergeProtected() {

		}

		implementTransformable();
	}

	function createTransformForm(){

	}

});