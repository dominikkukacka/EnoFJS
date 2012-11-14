﻿describe('animal', function () {

    var _moduleLoaded = false;

    require(['classExtentions'], function () {
        _moduleLoaded = true;
    });

    waitsFor(function () {
        return _moduleLoaded;
    });

    function Animal(name) {
        var _name = name;

        this.getName = function(){
            return _name;
        };

        this.talk = function () {
            throw new Error("Not implemented");
        };
    }
    Animal = Animal.wrap();

    function Dog() {
        this.talk = function () {
            return "WOOF I am a " + this.getName();
        };
    }
    Dog = Dog.extend(Animal);

    function Cat() {
        this.talk = function () {
            return "MIAW I am a " + this.getName();
        };
    }
    Cat = Cat.extend(Animal);

    it('should say woof i am a dog', function () {
        var dog = new Dog("Dog");

        expect(dog.talk()).toEqual("WOOF I am a Dog");
    });

    it('should say miaw i am a cat', function () {
        var cat = new Cat("Cat");

        expect(cat.talk()).toEqual("MIAW I am a Cat");
    });
});