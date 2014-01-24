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
            list.add('hi', 'hello');
            expect(list.getById(0).getValue()).toEqual('hello');
        });
    });

    describe('modifying an LinkedHashMap', function modifyLinkedHashMapSpecs() {
        var list;
        beforeEach(function beforeEach() {
            list = new LinkedHashMap();
            list.add(0, 'one');
            list.add(1, 'two');
            list.add(2, 'three');
        });

        it('should be able to get the first entry of an list', function firstOfList() {
            expect(list.getFirst().getValue()).toEqual('one');
        });

        it('should be able to get the last entry of an list', function lastOfList() {
            expect(list.getLast().getValue()).toEqual('three');
        });
    });
});