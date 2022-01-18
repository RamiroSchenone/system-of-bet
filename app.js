console.log('app lista');

const initialBet = $('#initialBet');
const bet = $('#bet');
const num = $('#num');
const result = $('#result');
const btnPlay = $('#btnPlay');
const dado1 = $('#d1');
const dado2 = $('#d2');
const sdd = $('#sdd');
const record = $('#record');
const balance = $('#balance');
var wallet = 0;

$(document).ready(() => {

    var valInitialBet = initialBet.val();
    var valNum = num.val();

    btnPlay.on('click', () => {

        var valInitialBet = initialBet.val();
        var valNum = num.val();

        if (valNum < 1 || valNum > 12) {
            alert("Solo se pueden ingresar numeros del 1 al 12. Vuelva a intentarlo.")
        } else {
            var numRandom = Math.random() * (6 - 1) + 1;
            numRandom = numRandom * 1;
            numRandom = Math.round(numRandom);

            var numRandom2 = Math.random() * (6 - 1) + 1;
            numRandom2 = numRandom2 * 1;
            numRandom2 = Math.round(numRandom2);

            var resultRandom = numRandom + numRandom2;

            dado1.html(numRandom);
            dado2.html(numRandom2);
            sdd.html(resultRandom);

            if (valNum == numRandom || valNum == numRandom2 || valNum == resultRandom) {

                result.html('Ganadora');

                var win = 0;

                if (valNum == numRandom && valNum == numRandom2 || resultRandom == valNum) {
                    win = valInitialBet * 3;

                    wallet = wallet + win;

                    bet.html(win);
                    record.append(`<li>Apuesta ${valNum} por $ ${valInitialBet} | Dado 1 = ${numRandom} ; Dado 2 = ${numRandom2} | Gana: $ ${win}</li>`);
                    balance.html(wallet);

                }
                else if (valNum == numRandom || valNum == numRandom2) {
                    win = valInitialBet * 2;

                    wallet = wallet + win;

                    bet.html(win);
                    record.append(`<li>Apuesta ${valNum} por $ ${valInitialBet} | Dado 1 = ${numRandom} ; Dado 2 = ${numRandom2} | Gana: $ ${win}</li>`);
                    balance.html(wallet);

                }

            } else {

                result.html('Perdedora');

                valInitialBet = valInitialBet;

                wallet = wallet - valInitialBet;
                bet.html('0');
                balance.html(wallet);

                record.append(`<li>Apuesta ${valNum} por $ ${valInitialBet} | Dado 1 = ${numRandom} ; Dado 2 = ${numRandom2} | Pierde: $ ${valInitialBet}</li>`);


            }

        }


    })

});

function fnEnable() {

    var val = 0;

    if (initialBet.val() == "") {
        val++;
    }
    if (num.val() == "") {
        val++;
    }

    if (val == 0) {
        btnPlay.attr('disabled', false);
    } else {
        btnPlay.attr('disabled', true);
    }
}

document.getElementById("initialBet").addEventListener('keyup', fnEnable);
document.getElementById("num").addEventListener('keyup', fnEnable);

