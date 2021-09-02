if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  function main() {
    cronometro();
  }
  function cronometro$lambda(closure$mostrador, closure$bpm, closure$bpmAtual) {
    return function (it) {
      if (closure$mostrador != null) {
        closure$mostrador.innerHTML = closure$bpm.value + ' bpm';
      }closure$bpmAtual.v = retornarTempo();
      return Unit;
    };
  }
  function cronometro$lambda_0(closure$isPlaying, closure$bpmAtual, closure$bpmOriginal, closure$timer) {
    return function (it) {
      if (closure$isPlaying.v === true) {
        if (closure$bpmAtual.v !== closure$bpmOriginal.v) {
          window.clearInterval(closure$timer.v);
          closure$timer.v = window.setInterval(tick(), 60000 / closure$bpmAtual.v | 0);
          closure$bpmOriginal.v = closure$bpmAtual.v;
        }} else {
        closure$bpmOriginal.v = closure$bpmAtual.v;
        closure$timer.v = window.setInterval(tick(), 60000 / closure$bpmAtual.v | 0);
        closure$isPlaying.v = true;
      }
      return Unit;
    };
  }
  function cronometro$lambda_1(closure$timer, closure$isPlaying) {
    return function (it) {
      window.clearInterval(closure$timer.v);
      closure$isPlaying.v = false;
      return Unit;
    };
  }
  function cronometro() {
    var tmp$, tmp$_0, tmp$_1;
    var bpm = Kotlin.isType(tmp$ = document.getElementById('beatInput'), HTMLInputElement) ? tmp$ : throwCCE();
    var inciar = Kotlin.isType(tmp$_0 = document.getElementById('pl'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var parar = Kotlin.isType(tmp$_1 = document.getElementById('st'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var mostrador = document.querySelector('h2');
    var bpmAtual = {v: 134};
    var bpmOriginal = {v: 0};
    var isPlaying = {v: false};
    var timer = {v: 0};
    bpm.addEventListener('change', cronometro$lambda(mostrador, bpm, bpmAtual));
    inciar.addEventListener('click', cronometro$lambda_0(isPlaying, bpmAtual, bpmOriginal, timer));
    parar.addEventListener('click', cronometro$lambda_1(timer, isPlaying));
  }
  function retornarTempo() {
    var tmp$;
    var beat = Kotlin.isType(tmp$ = document.getElementById('beatInput'), HTMLInputElement) ? tmp$ : throwCCE();
    return toInt(beat.value);
  }
  function tick() {
    var tmp$;
    var audio = Kotlin.isType(tmp$ = document.querySelector('audio'), HTMLMediaElement) ? tmp$ : throwCCE();
    audio.currentTime = 0.0;
    audio.play();
  }
  _.main = main;
  _.cronometro = cronometro;
  _.retornarTempo = retornarTempo;
  _.tick = tick;
  main();
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
