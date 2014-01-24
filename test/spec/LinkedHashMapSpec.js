/*
 * Copyright (c) 2014. 
 *
 * @Author Andy Tang
 */
'use strict';

describe('LinkedHashMap', function LinkedHashMapSpec() {

    describe('initalizing an LinkedHashMap', function initializingLinkedHashMap() {
        it('should be able to add an entry to the list', function addToEmpty() {
            var list = new LinkedHashMap();
            list.add('hello');
            expect(list.getByPosition(0).getValue()).toEqual('hello');
        });
    });

    describe('modifying an LinkedHashMap', function modifyLinkedHashMapSpecs() {
        var list;
        beforeEach(function beforeEach() {
            list = new LinkedHashMap();
            list.add('one');
            list.add('two');
            list.add('three');
        });

        it('should be able to get the first entry of an list', function firstOfList() {
            expect(list.getFirst().getValue()).toEqual('one');
        });
    });
});