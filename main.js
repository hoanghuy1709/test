//Counter processing
var count_fb = document.querySelector(".counter_1")
var count_tt = document.querySelector(".counter_2")
var count_ig = document.querySelector(".counter_3")


function counterUp(el, to) {
	let speed = 1700
	let from = 0
	let step = to / speed
	const counter = setInterval(function () {
		from += step
		if (from > to) {
			clearInterval(counter)
			el.innerText = to
		} else {
			el.innerText = Math.ceil(from)
		}
	}, 1)
}

counterUp(count_fb, 330)
counterUp(count_tt, 3001)
counterUp(count_ig, 129)

// show curren date
var hello = document.querySelector(".hello")
const now = new Date();
const date = document.querySelector(".date");
date.innerText = new Date().toLocaleString('vi')
const hours = now.getHours();

function show_hello(h){
    if(h>=0 && h<11){
        hello.innerText = "GOOD MORNING"
    }
    if(h>=11 && h<14){
        hello.innerText = "HAPPY LUNCH"
    }
    if(h>=14 && h<18){
        hello.innerText = "GOOD AFTERNOON"
    }
    if(h>=18 && h<22){
        hello.innerText = "GOOD EVERNING"
    }
    if(h>22){
        hello.innerText = "GOOD NIGHT"
    }
}

show_hello(hours)

