describe('widget class', function () {
    var Tile;

    require(['widgets/tile/app'], function(tile){
        Tile = tile;
    });

    waitsFor(function () {
        return WTileidget;
    });

    it('should be able to load the tile widget', function () {

    });
});