$(function () {
    $('#container').highcharts({

        chart: {
            type: 'column'
        },

        title: {
            text: 'Styling exporting elements'
        },

        series: [{
            data: [1, 3, 2, 4]
        }]

    });
});