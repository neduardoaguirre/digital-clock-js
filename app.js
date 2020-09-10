setInterval(() =>{
    let reloj = document.querySelector('.reloj')
    let fecha = document.querySelector('.fecha')

    let tiempoActual = new Date()

    let hora = tiempoActual.getHours()
        if(hora<10){hora = `0${hora}`}
    let min = tiempoActual.getMinutes()
        if(min<10){min = `0${min}`}
    let seg = tiempoActual.getSeconds()
        if(seg<10){seg = `0${seg}`}
    let dia = tiempoActual.getDate()
		if(dia<10){dia = `0${dia}`}
	let mes = tiempoActual.getMonth()+1
		if(mes<10){mes = `0${mes}`}
	let year = tiempoActual.getFullYear()

    reloj.innerHTML= `${hora}<span class="parpadea">:</span>${min}<span class="parpadea">:</span>${seg}`
    fecha.innerHTML= `${dia}/${mes}/${year}`

}, 1000)
