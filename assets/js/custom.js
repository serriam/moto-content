$(".fancybox").fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 500,

    closeEffect : 'elastic',
    closeSpeed  : 500,

    closeClick : true,
        
    beforeShow: function () {
        this.title = $(this.element).attr('title');
        this.title = '<h4>' + this.title + '</h4>';
    },
    
    helpers : {
        title : { 
            type: 'inside' 
        },
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.3)'
            }
        }
    }
});

