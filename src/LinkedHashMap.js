/*
 * Copyright (c) 2014. 
 *
 * @Author Andy Tang
 */
(function LinkedHashMapScope() {
    'use strict';

    var Node = Class(function Node() {
        this.private = {
            key: null,
            value: null,
            previous: null,
            next: null
        };

        this.public = {
            getKey: function getKey() {
                return this.private.key;
            },
            setKey: function setKey(key) {
                this.private.key = key;
            },
            getValue: function getValue() {
                return this.private.value;
            },
            setValue: function setValue(value) {
                this.private.value = value;
            },
            getPrevious: function getPrevious() {
                return this.private.previous;
            },
            setPrevious: function setPrevious(previous) {
                this.private.previous = previous;
            },
            getNext: function getNext() {
                return this.private.next;
            },
            setNext: function setNext(next) {
                this.private.key = next;
            }
        };

        this.constructor = function constructor(key, value, previous, next) {
            this.private.key = key;
            this.private.value = value;
            this.private.previous = previous;
            this.private.next = next;
        };
    });

    var LinkedHashMap = window.LinkedHashMap = Class(function LinkedHashMap() {
        this.private = {
            count: 0,
            hashMap: {}
        };

        this.public = {
            add: function add(value) {
                this.private.hashMap[this.private.count] = new Node(this.private.count, value);
                this.private.count++;
            },
            getByPosition: function getByPosition(position) {
                return this.private.hashMap[position];
            }
        };

        this.constructor = function constructor() {

        };
    });
}(window));