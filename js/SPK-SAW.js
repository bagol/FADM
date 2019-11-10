'use strict'
class SAW {
    // proses perolehan nilai setelah nilai dibagi dibagi
    vektor(data, bobot) {
        let rangking = new Array()
        data.forEach(item => {
            rangking.push(
                [(item[1] * bobot[0]) + (item[2] * bobot[1]) + (item[3] * bobot[2]) + (item[4] * bobot[3]) + (item[5] * bobot[4]), item[0]])
        })
        return ranking
    }
    // peroses perhitungan data mentah dibagi dengan bobot maksimal
    count(data, maxKriteria) {
        let hasil = new Array()
        let kategori = maxKriteria
        data.forEach(item => {
            hasil.push(
                [item[0],
                    item[1] / kategori[0],
                    item[2] / kategori[1],
                    item[3] / kategori[2],
                    item[4] / kategori[3],
                    item[5] / kategori[4],
                ])
        })
        return hasil
    }

    // proses perangkingan
    ranking(data) {
        return data.sort((a, b) => b[0] - a[0])
    }
    // mencari nilai maksimum pada tiap kategori
    maxKriteria(data) {
        let result = []
        let transpose = data[0].map((col, i) => data.map(row => row[i]))
        //console.log(transpose)

        for (let i = 0; i < transpose.length - 1; i++) {
            result[i] = Math.max.apply(null, transpose[i + 1])

        }
        return result
    }
    //memisahkan data keriteria
    bobot(data) {
        let bobot = new Array()
        data.forEach((item, i) => {
            bobot.push(data[i][2])
        })
        return bobot
    }

    //menampilkan hasil html
    tampil(Theader, data) {
        let html
        html += '<table>' +
            '<thead>' +
            '<tr>'
        for (let i = 0; i < Theader.length; i++) {
            html += '<th>' + Theader[i] + '</th>'
        }
        html += '</thead>' +
            '</tr>' +
            '<tbody>'

        for (let i = 0; i < data.length; i++) {
            html += '<tr>' +
                '<td>' + data[i] + '<td>' +
                '</tr>'
        }
        html += '</tbody>' +
            '</table>'
    }
}