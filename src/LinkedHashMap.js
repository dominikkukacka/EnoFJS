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
                this.private.next = next;
            }
        };

        this.constructor = function constructor(key, value, previous, next) {
            this.private.key = key;
            this.private.value = value;
            this.private.previous = previous || null;
            this.private.next = next || null;
        };
    });

    var LinkedHashMap = window.LinkedHashMap = Class(function LinkedHashMap() {
        this.private = {
            count: 0,
            first: null,
            last: null,
            hashMap: {}
        };

        this.protected = {
            addAfter: function addAfter(node, newNode) {
                var nextNode = node.getNext();
                if (nextNode !== null) {
                    nextNode.setPrevious(newNode);
                }
                node.setNext(newNode);
                newNode.setPrevious(node);
            }
        };

        this.public = {
            add: function add(key, value) {
                var newNode = new Node(key, value);
                this.private.hashMap[key] = newNode;
                if (this.private.count === 0) {
                    this.private.first = this.private.hashMap[key];
                } else {
                    this.protected.addAfter(this.private.last, newNode);
                }
                this.private.last = this.private.hashMap[key];
                this.private.count++;
            },
            getById: function getById(position) {
                var counter = 0;
                for (var key in this.private.hashMap) {
                    if (counter === position) {
                        return this.private.hashMap[key];
                    }
                    counter++;
                }
            },
            getFirst: function getFirst() {
                return this.private.first;
            },
            getLast: function getLast() {
                return this.private.last;
            }
        };

        this.constructor = function constructor() {

        };
    });
}(window));