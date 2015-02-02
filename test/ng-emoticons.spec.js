describe('ngEmoticons', function () {
    var $filter;

    beforeEach(function () {
        module('ngEmoticons');
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('should replace a single emoticon', function() {
        var string = ':D', result;
        result = $filter('emoticons')(string);
        expect(result).toEqual('<i class="icon icon-happy"></i>');
    });

    it('should replace multiple emoticons', function() {
        var string = ':D :-)', result;
        result = $filter('emoticons')(string);
        expect(result).toEqual('<i class="icon icon-happy"></i> <i class="icon icon-smiley"></i>');
    });

    it('should replace a single emoticon in a sentence', function() {
        var string = 'And I said :D', result;
        result = $filter('emoticons')(string);
        expect(result).toEqual('And I said <i class="icon icon-happy"></i>');
    });

    it('should not replace an emoticon in a url', function() {
        var string = 'https://example.com :D', result;
        result = $filter('emoticons')(string);
        expect(result).toEqual('https://example.com <i class="icon icon-happy"></i>');
    });

});