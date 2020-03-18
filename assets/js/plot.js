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

// Highcharts.getJSON(
//     'assets/data/dpt_31.json',
//     success
// );
// Highcharts.getJSON(
//     'assets/data/dpt_46.json',
//     success
// );
// Highcharts.getJSON(
//     'assets/data/dpt_81.json',
//     success
// );
