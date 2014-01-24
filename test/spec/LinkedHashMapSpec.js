/*
 * Copyright (c) 2014. 
 *
 * @Author Andy Tang
 */
(function LinkedHashMapSpecScope(undefined) {
    'use strict';

    describe('LinkedHashMap', function LinkedHashMapSpec() {

        describe('initalizing an LinkedHashMap', function initializingLinkedHashMap() {
            it('should be able to add an entry to the list', function addToEmpty() {
                var list = new LinkedHashMap();
                list.add('hi', 'hello');
                expect(list.getById(0).getValue()).toEqual('hello');
                expect(list.getById(0).getNext()).toEqual(null);
                expect(list.getById(0).getPrevious()).toEqual(null);
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
                var first = list.getFirst();
                expect(first.getValue()).toEqual('one');
                expect(first.getNext()).toEqual(list.getById(1));
                expect(first.getPrevious()).toEqual(null);
            });

            it('should be able to get the last entry of an list', function lastOfList() {
                var last = list.getLast();
                expect(last.getValue()).toEqual('three');
                expect(last.getNext()).toEqual(null);
                expect(last.getPrevious()).toEqual(list.getById(1));
            });
        });
    });
}());