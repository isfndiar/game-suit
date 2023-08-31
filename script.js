let say = true;
while (say) {
// player memilih duluan
let player = prompt('Pilih salah satu: \n batu kertas gunting')



// computer memilih random dengan math.random
let computer = Math.random()
if (computer < 0.34) {
    computer = 'batu';
} else if (computer >= 0.34 && computer <= 0.76) {
    computer = 'kertas';
} else {
    computer = 'gunting'
}

// hasil/ win/lose yang akan di tampilkan
let result = '';
if (player == computer) {
    result = 'Seri'
} else if (player == 'batu') {
    if (computer == 'gunting') {
        result = 'kamu Menang';
    } else {
        result = 'kamu kalah';
    }
} else if (player == 'gunting') {
   result = (computer == 'batu') ? 'Kamu kalah' : 'Kamu menang';
} else if (player == 'kertas') {
   result = (computer == batu) ? 'Kamu Menang' : 'Kamu kalah';
} else {
   result = 'Yang anda masukkan salah';
}

alert(`Kamu pilih ${player} dan komputer pilih ${computer} \n dan ${result}`)

say = confirm('ingin Ulang?')
}

alert('Terima Kasih!')
