
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){

	const startDate = new Date('2020-08-15T22:45:00');
	// Ngày hiện tại
	const currentDate = new Date();
	
	// Tính chênh lệch thời gian tính bằng mili giây
	const diffTime = currentDate - startDate;
	
	// Chuyển đổi chênh lệch thời gian ra các đơn vị tương ứng
	const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
	
	// Kết quả theo định dạng yêu cầu
	var result = "<span class=\"digit\">" + days + "</span> ngày <span class=\"digit\">" + hours + "</span> giờ <span class=\"digit\">" + minutes + "</span> phút <span class=\"digit\">" + seconds + "</span> giây"; 
	$("#clock").html(result);


	var result = "<span class=\"digit\">" + days + "</span> ngày <span class=\"digit\">" + hours + "</span> giờ <span class=\"digit\">" + minutes + "</span> phút <span class=\"digit\">" + seconds + "</span> giây"; 
	$("#clock").html(result);
}
