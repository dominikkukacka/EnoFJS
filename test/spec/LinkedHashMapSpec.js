/*
 * Copyright (c) 2014. 
 *
 * @Author Andy Tang
 */
'use strict';

describe('LinkedHashMap', function LinkedHashMapSpec() {

    describe('initalizing an LinkedHashMap', function () {
        it('should be able to add an entry to the list', function () {
            var list = new LinkedHashMap();
            list.add('hello');
            expect(list.getByPosition(0).getValue()).toEqual('hello');
        });
    });
});