Highcharts.chart('pie_chart_total', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: document.getElementsByClassName("bot-left")[0].offsetHeight
    },
    title: {
        text: 'Part de marché du tourisme en 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
        {
            name: 'Hérault',
            y: 49765810,
            sliced: true,
            selected: true
        },
        {
            name: 'Pyrénées-Orientales',
            y: 31798447
        },
        {
            name: 'Haute-Garonne',
            y: 28612739
        },
        {
            name: 'Gard',
            y: 21380521
        },
        {
            name: 'Aude',
            y: 16150703
        },
        {
            name: 'Hautes-Pyrénées',
            y: 10962970
        },
        {
            name: 'Aveyron',
            y: 7944721
        },
        {
            name: 'Lot',
            y: 7879581
        },
        {
            name: 'Tarn',
            y: 6337459
        },
        {
            name: 'Tarn-et-Garonne',
            y: 6029670
        },
        {
            name: 'Gers',
            y: 5696542
        },
        {
            name: 'Ariège',
            y: 4675476,
        }]
    }]
});


var seriesOptions = [],
    seriesCounter = 0,
    datasets = ["dpt_09", "dpt_11", "dpt_12","dpt_30", "dpt_31", "dpt_32", "dpt_34","dpt_46","dpt_48","dpt_65","dpt_66","dpt_81","dpt_32"],
    names = ["dpt_09", "dpt_11", "dpt_12","dpt_30", "dpt_31", "dpt_32", "dpt_34","dpt_46","dpt_48","dpt_65","dpt_66","dpt_81","dpt_32"];

/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart() {

    Highcharts.stockChart('container', {
        chart: {
            height: document.getElementsByClassName("top-left")[0].offsetHeight
        },
        title: {
            text: 'Nombre de nuitées par jour pour chaque departement'
        },
        rangeSelector: {
            selected: 4
        },

        yAxis: {
            labels: {
                formatter: function () {
                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        plotOptions: {
            series: {
                compare: 'percent',
                showInNavigator: true
            }
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2,
            split: true
        },

        series: seriesOptions
    });
}

function success(data) {

    var name = this.url.match(/(dpt_09|dpt_11|dpt_12|dpt_30|dpt_31|dpt_32|dpt_34|dpt_46|dpt_48|dpt_65|dpt_66|dpt_81|dpt_32)/)[0];
    var i = names.indexOf(name);
    seriesOptions[i] = {
        name: name,
        data: data
    };

    // As we're loading the data asynchronously, we don't know what order it
    // will arrive. So we keep a counter and create the chart when all the data is loaded.
    seriesCounter += 1;

    if (seriesCounter === names.length) {
        createChart();
    }
}

datasets.forEach(serie => {
    Highcharts.getJSON(
        'assets/data/' + serie + '.json',
        success
    );
});

Highcharts.chart('sankey', {
    chart: {
        height: document.getElementsByClassName("page2__right")[0].offsetHeight
    },
    title: {
        text: 'Highcharts Sankey Diagram'
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
        }
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
            ['Autres', 'Ariège (9)', 269860],
            ['Autres', 'Aude (11)', 1144845],
            ['Autres', 'Aveyron (12)', 396124],
            ['Autres', 'Gard (30)', 2138859],
            ['Autres', 'Haute-Garonne (31)', 7403741],
            ['Autres', 'Gers (32)', 719620],
            ['Autres', 'Hérault (34)', 4376348],
            ['Autres', 'Lot (46)', 378165],
            ['Autres', 'Lozère (48)', 135852],
            ['Autres', 'Hautes-Pyrénées (65)', 445319],
            ['Autres', 'Pyrénées-Orientales (66)', 2907786],
            ['Autres', 'Tarn (81)', 645479],
            ['Autres', 'Tarn-et-Garonne (82)', 1266697],
            ['DE', 'Ariège (9)', 160880],
            ['DE', 'Aude (11)', 1286481],
            ['DE', 'Aveyron (12)', 347250],
            ['DE', 'Gard (30)', 1693882],
            ['DE', 'Haute-Garonne (31)', 1788857],
            ['DE', 'Gers (32)', 258318],
            ['DE', 'Hérault (34)', 3618779],
            ['DE', 'Lot (46)', 274911],
            ['DE', 'Lozère (48)', 191806],
            ['DE', 'Hautes-Pyrénées (65)', 308810],
            ['DE', 'Pyrénées-Orientales (66)', 1581486],
            ['DE', 'Tarn (81)', 314063],
            ['DE', 'Tarn-et-Garonne (82)', 295953],
            ['BE+LU', 'Ariège (9)', 150641],
            ['BE+LU', 'Aude (11)', 682324],
            ['BE+LU', 'Aveyron (12)', 261652],
            ['BE+LU', 'Gard (30)', 1483686],
            ['BE+LU', 'Haute-Garonne (31)', 904397],
            ['BE+LU', 'Gers (32)', 238078],
            ['BE+LU', 'Hérault (34)', 2321784],
            ['BE+LU', 'Lot (46)', 468649],
            ['BE+LU', 'Lozère (48)', 102906],
            ['BE+LU', 'Hautes-Pyrénées (65)', 203332],
            ['BE+LU', 'Pyrénées-Orientales (66)', 1018745],
            ['BE+LU', 'Tarn (81)', 232893],
            ['BE+LU', 'Tarn-et-Garonne (82)', 270266],
            ['CH', 'Ariège (9)', 27403],
            ['CH', 'Aude (11)', 185275],
            ['CH', 'Aveyron (12)', 45284],
            ['CH', 'Gard (30)', 591878],
            ['CH', 'Haute-Garonne (31)', 228112],
            ['CH', 'Gers (32)', 31587],
            ['CH', 'Hérault (34)', 774790],
            ['CH', 'Lot (46)', 43229],
            ['CH', 'Lozère (48)', 27624],
            ['CH', 'Hautes-Pyrénées (65)', 73822],
            ['CH', 'Pyrénées-Orientales (66)', 247969],
            ['CH', 'Tarn (81)', 52843],
            ['CH', 'Tarn-et-Garonne (82)', 37802],
            ['DK+SE+NO', 'Ariège (9)', 60832],
            ['DK+SE+NO', 'Aude (11)', 406873],
            ['DK+SE+NO', 'Aveyron (12)', 244055],
            ['DK+SE+NO', 'Gard (30)', 603428],
            ['DK+SE+NO', 'Haute-Garonne (31)', 756032],
            ['DK+SE+NO', 'Gers (32)', 131431],
            ['DK+SE+NO', 'Hérault (34)', 1284505],
            ['DK+SE+NO', 'Lot (46)', 121570],
            ['DK+SE+NO', 'Lozère (48)', 62672],
            ['DK+SE+NO', 'Hautes-Pyrénées (65)', 73501],
            ['DK+SE+NO', 'Pyrénées-Orientales (66)', 626705],
            ['DK+SE+NO', 'Tarn (81)', 207166],
            ['DK+SE+NO', 'Tarn-et-Garonne (82)', 206483],
            ['ES+PT', 'Ariège (9)', 240661],
            ['ES+PT', 'Aude (11)', 1007522],
            ['ES+PT', 'Aveyron (12)', 199069],
            ['ES+PT', 'Gard (30)', 783003],
            ['ES+PT', 'Haute-Garonne (31)', 1498500],
            ['ES+PT', 'Gers (32)', 167166],
            ['ES+PT', 'Hérault (34)', 1678526],
            ['ES+PT', 'Lot (46)', 207470],
            ['ES+PT', 'Lozère (48)', 79722],
            ['ES+PT', 'Hautes-Pyrénées (65)', 911256],
            ['ES+PT', 'Pyrénées-Orientales (66)', 3012094],
            ['ES+PT', 'Tarn (81)', 246147],
            ['ES+PT', 'Tarn-et-Garonne (82)', 263669],
            ['GB', 'Ariège (9)', 259258],
            ['GB', 'Aude (11)', 2435889],
            ['GB', 'Aveyron (12)', 274035],
            ['GB', 'Gard (30)', 701503],
            ['GB', 'Haute-Garonne (31)', 1062427],
            ['GB', 'Gers (32)', 494758],
            ['GB', 'Hérault (34)', 2045869],
            ['GB', 'Lot (46)', 602442],
            ['GB', 'Lozère (48)', 49661],
            ['GB', 'Hautes-Pyrénées (65)', 740108],
            ['GB', 'Pyrénées-Orientales (66)', 1066328],
            ['GB', 'Tarn (81)', 388607],
            ['GB', 'Tarn-et-Garonne (82)', 402911],
            ['IT', 'Ariège (9)', 33013],
            ['IT', 'Aude (11)', 191380],
            ['IT', 'Aveyron (12)', 103189],
            ['IT', 'Gard (30)', 345527],
            ['IT', 'Haute-Garonne (31)', 548492],
            ['IT', 'Gers (32)', 70793],
            ['IT', 'Hérault (34)', 787914],
            ['IT', 'Lot (46)', 53061],
            ['IT', 'Lozère (48)', 30118],
            ['IT', 'Hautes-Pyrénées (65)', 762090],
            ['IT', 'Pyrénées-Orientales (66)', 220090],
            ['IT', 'Tarn (81)', 111202],
            ['IT', 'Tarn-et-Garonne (82)', 96028],
            ['NL', 'Ariège (9)', 241410],
            ['NL', 'Aude (11)', 474797],
            ['NL', 'Aveyron (12)', 462217],
            ['NL', 'Gard (30)', 1073617],
            ['NL', 'Haute-Garonne (31)', 653372],
            ['NL', 'Gers (32)', 406091],
            ['NL', 'Hérault (34)', 1876396],
            ['NL', 'Lot (46)', 492948],
            ['NL', 'Lozère (48)', 172943],
            ['NL', 'Hautes-Pyrénées (65)', 261919],
            ['NL', 'Pyrénées-Orientales (66)', 913267],
            ['NL', 'Tarn (81)', 220515],
            ['NL', 'Tarn-et-Garonne (82)', 331902],
            ['US', 'Ariège (9)', 22956],
            ['US', 'Aude (11)', 132644],
            ['US', 'Aveyron (12)', 31822],
            ['US', 'Gard (30)', 222734],
            ['US', 'Haute-Garonne (31)', 312803],
            ['US', 'Gers (32)', 41977],
            ['US', 'Hérault (34)', 261557],
            ['US', 'Lot (46)', 43387],
            ['US', 'Lozère (48)', 14305],
            ['US', 'Hautes-Pyrénées (65)', 80960],
            ['US', 'Pyrénées-Orientales (66)', 141524],
            ['US', 'Tarn (81)', 55709],
            ['US', 'Tarn-et-Garonne (82)', 33509]
        ],
        type: 'sankey',
        name: 'Sankey demo series'
    }]

});

