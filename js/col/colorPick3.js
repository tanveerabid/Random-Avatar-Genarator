
(function( $ ) {

    $.fn.colorPick3 = function(config) {

        return this.each(function() {
            new $.colorPick3(this, config || {});
        });

    };

    $.colorPick3 = function (element, options) {
        options = options || {};
        this.options = $.extend({}, $.fn.colorPick3.defaults, options);
        if(options.str) {
            this.options.str = $.extend({}, $.fn.colorPick3.defaults.str, options.str);
        }
        $.fn.colorPick3.defaults = this.options;
        this.color   = this.options.initialColor.toUpperCase();
        this.element = $(element);

        var dataInitialColor = this.element.data('initialcolor');
        if (dataInitialColor) {
            this.color = dataInitialColor;
            this.appendToStorage(this.color);
        }

        var uniquePalette = [];
        $.each($.fn.colorPick3.defaults.palette.map(function(x){ return x.toUpperCase() }), function(i, el){
            if($.inArray(el, uniquePalette) === -1) uniquePalette.push(el);
        });

        this.palette = uniquePalette;

        return this.element.hasClass(this.options.pickrclass) ? this : this.init();
    };

    $.fn.colorPick3.defaults = {
        'initialColor': '#3498db',
        'paletteLabel': 'Default palette:',
        'allowRecent': true,
        'recentMax': 10,
        'allowCustomColor': true,
        'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1", "#bdc3c7", "#95a5a6", "#7f8c8d"],
        'onColorSelected': function() {
            this.element.css({'backgroundColor': this.color, 'color': this.color});
        }
    };

    $.colorPick3.prototype = {

        init : function(){

            var self = this;
            var o = this.options;

            $.proxy($.fn.colorPick3.defaults.onColorSelected, this)();

            this.element.click(function(event) {
                if (event.target != event.currentTarget){
			        return;
				}

                var offset = $(self.element).offset();

                event.preventDefault();
                self.show(self.element, event.pageX - offset.left, event.pageY - offset.top);

                $('.customColorHash').val(self.color);

                $('.colorPick3Button').click(function(event) {
					self.color = $(event.target).attr('hexValue');
					self.appendToStorage($(event.target).attr('hexValue'));
					self.hide();
					$.proxy(self.options.onColorSelected, self)();
					return false;
            	});
                $('.customColorHash').click(function(event) {
                    return false;
                }).keyup(function (event) {
                    var hash = $(this).val();
                    if (hash.indexOf('#') !== 0) {
                        hash = "#"+hash;
                    }
                    if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hash)) {
                        self.color = hash;
                        self.appendToStorage(hash);
                        $.proxy(self.options.onColorSelected, self)();
                        $(this).removeClass('error');
                    } else {
                        $(this).addClass('error');
                    }
                });

                return false;
            }).blur(function() {
                self.element.val(self.color);
                $.proxy(self.options.onColorSelected, self)();
                self.hide();
                return false;
            });

            $(document).on('click', function(event) {
                if ($.contains(self.element[0], event.target)){
                    return;
                }
                self.hide();
                return true;
            });

            return this;
        },

        appendToStorage: function(color) {
	        if ($.fn.colorPick3.defaults.allowRecent === true) {
                var el = document.querySelectorAll('.svgOne .haircolor');

                for (var i = 0; i < el.length; i++) {
                    var currentEl = el[i];
                    currentEl.style.fill = this.color;
                        }
	        	var storedColors = JSON.parse(localStorage.getItem("haircolor"));
				if (storedColors == null) {
		     	    storedColors = [];
	        	}
				if ($.inArray(color, storedColors) == -1) {
		    	    storedColors.unshift(color);
					storedColors = storedColors.slice(0, $.fn.colorPick3.defaults.recentMax)
					localStorage.setItem("haircolor", JSON.stringify(storedColors));
	        	}
	        }
        },

        show: function(element, left, top) {

            $(".colorPick3Wrapper").remove();

            $(element).prepend('<div class="colorPick3Wrapper"><div id="colorPick3" style="display:none;top:' + top + 'px;left:' + left + 'px"><span>'+$.fn.colorPick3.defaults.paletteLabel+'</span></div></div>');

	        jQuery.each(this.palette, function (index, item) {
				$("#colorPick3").append('<div class="colorPick3Button" hexValue="' + item + '" style="background:' + item + '"></div>');
			});
            if ($.fn.colorPick3.defaults.allowCustomColor === true) {
                $("#colorPick3").append('<input type="text" style="margin-top:5px" class="customColorHash" />');
            }
			if ($.fn.colorPick3.defaults.allowRecent === true) {
				$("#colorPick3").append('<span style="margin-top:5px">Recent:</span>');
				if (JSON.parse(localStorage.getItem("colorPick3RecentItems")) == null || JSON.parse(localStorage.getItem("colorPick3RecentItems")) == []) {
					$("#colorPick3").append('<div class="colorPick3Button colorPick3Dummy"></div>');
				} else {
					jQuery.each(JSON.parse(localStorage.getItem("colorPick3RecentItems")), function (index, item) {
		        		$("#colorPick3").append('<div class="colorPick3Button" hexValue="' + item + '" style="background:' + item + '"></div>');
                        if (index == $.fn.colorPick3.defaults.recentMax-1) {
                            return false;
                        }
					});
				}
			}
	        $("#colorPick3").fadeIn(200);
        },

	    hide: function() {
		    $( ".colorPick3Wrapper" ).fadeOut(200, function() {
                $(".colorPick3Wrapper").remove();
			    return this;
			});
        },

    };

}( jQuery ));
