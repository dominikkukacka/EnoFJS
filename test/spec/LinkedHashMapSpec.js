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

            it('should be able to add a node after another node', function addAfter() {
                var middle = list.getById(1);
                var newNode = list.addAfter(1, 3, 'four');
                expect(middle.getNext()).toEqual(newNode);
                expect(newNode.getPrevious()).toEqual(middle);
                expect(newNode.getNext()).toEqual(list.getLast());
            });

            it('should be able to add a node before another node', function addBefore() {
                var middle = list.getById(1);
                var newNode = list.addBefore(1, 3, 'four');
                expect(middle.getPrevious()).toEqual(newNode);
                expect(newNode.getNext()).toEqual(middle);
                expect(newNode.getPrevious()).toEqual(list.getFirst());
            });

            it('should be able to add a node at the beginning of the list', function addFirst() {
                var first = list.getFirst();
                var newNode = list.addFirst(3, 'four');
                expect(first.getPrevious()).toEqual(newNode);
                expect(newNode.getNext()).toEqual(first);
                expect(newNode.getPrevious()).toEqual(null);
            });

            it('should be able to add a node at the end of the list', function addLast() {
                var last = list.getLast();
                var newNode = list.addLast(3, 'four');
                expect(last.getNext()).toEqual(newNode);
                expect(newNode.getPrevious()).toEqual(last);
                expect(newNode.getNext()).toEqual(null);
            });

            it('should be able to delete the first entry', function removeFirst() {
                list.removeFirst();
                var first = list.getFirst();
                expect(first.getValue()).toEqual('two');
                expect(first.getPrevious()).toEqual(null);
            });
        });
    });
}());