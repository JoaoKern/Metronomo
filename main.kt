import kotlinx.browser.*
import org.w3c.dom.*



fun main() {
    cronometro()
}

@JsName("cronometro")
fun cronometro(){
    val bpm = document.getElementById("beatInput") as HTMLInputElement
    val inciar = document.getElementById("pl") as HTMLInputElement
    val parar = document.getElementById("st") as HTMLInputElement
    val mostrador = document.querySelector("h2") 

    var bpmAtual = 134
    var bpmOriginal = 0
    var isPlaying = false
    var timer = 0

    bpm.addEventListener("change", {
        if(mostrador != null){
            mostrador.innerHTML = bpm.value + " bpm"
        }
        bpmAtual = retornarTempo()
    })

    inciar.addEventListener("click", {
        if(isPlaying == true){                                           
            if(bpmAtual != bpmOriginal){ 
                window.clearInterval(timer)    
                timer = window.setInterval(tick(), (1000*60)/ bpmAtual)
                bpmOriginal = bpmAtual
            }
        }else{
            bpmOriginal = bpmAtual
            timer = window.setInterval(tick(), (1000*60)/ bpmAtual)
            isPlaying = true
        }               
    }) 
            
    parar.addEventListener("click", {
        window.clearInterval(timer)
        isPlaying = false
    })  
}

@JsName("retornarTempo")
fun retornarTempo():Int{
    val beat = document.getElementById("beatInput") as HTMLInputElement

    return beat.value.toInt()
}

@JsName("tick")
fun tick(){
    val audio = document.querySelector("audio") as HTMLMediaElement

    audio.currentTime = 0.0
    audio.play()
}





