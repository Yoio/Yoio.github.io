$(document).ready(function(){
    decode();

            function alignContent() {
                var windowHeight = $(window).height(),
                    fullScreenSections = document.querySelectorAll("section.fullscreen");

                for (var i = 0; i < fullScreenSections.length; i++) {
                    fullScreenSections[i].style.height = windowHeight + "px";
                }
                $('.content-resizer').each(function () {
                    var contentHeight = $(this).height();
                    $(this).css('top', (windowHeight / 2) - (contentHeight / 2));
                });
            }
            alignContent();
                        $(window).bind("resize", function () {
                alignContent();
            });
});
    function decode()
    {        
       $.each($("pre code"),function (i,n) {
        var js_source =$(n).html().replace(/^\s+/, '');
        var tabsize = 4;
        tabchar = ' ';
        if (tabsize == 1)
          tabchar = '\t';
        var fjs = js_beautify(js_source, tabsize, tabchar);
        fjs = fjs.replace(/& lt;/g,'&lt;');
        fjs = fjs.replace(/& gt;/g,'&gt;');


            $(n).html(fjs);           
        });
        
    }






