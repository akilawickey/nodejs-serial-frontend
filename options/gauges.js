var gaugeOptions = {

    chart: {
        type: 'solidgauge',
        animation: {
            duration: 70
        }
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 10,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

var bulletOptions = {
    chart: {
        inverted: true,
        marginLeft: 30,
        type: 'bullet',
        animation: {
            duration: 70
        }
    },
    title: {
        text: null
    },
    legend: {
        enabled: false
    },
    yAxis: {
        gridLineWidth: 0
    },
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderWidth: 0,
            color: '#000',
            targetOptions: {
                width: '200%'
            }
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
};

var rpmOptions =  {
    yAxis: {
        min: 0,
        max: 5,
        title: {
            text: 'RPM'
        }
    },

    series: [{
        name: 'RPM',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
        },
        tooltip: {
            valueSuffix: ' revolutions/min'
        }
    }]

};

var pctOptions =  {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'V%'
        }
    },

    series: [{
        name: 'voltPct',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:12px;color:silver"> V% </span></div>'
        },
        tooltip: {
            valueSuffix: ' % used'
        }
    }]

};

var mAmpsOptions =  {
    yAxis: {
        min: 0,
        max: 400,
        title: {
            text: 'Motor Amps'
        }
    },

    series: [{
        name: 'A',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:12px;color:silver">A</span></div>'
        },
        tooltip: {
            valueSuffix: 'A'
        }
    }]

};

var bAmpsOptions =  {
    yAxis: {
        min: -200,
        center: 0,
        max: 200,
        title: {
            text: 'Battery Amps'
        }
    },

    series: [{
        name: 'A',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:12px;color:silver">A</span></div>'
        },
        tooltip: {
            valueSuffix: 'A'
        }
    }]

};

var throttleOptions =  {
    yAxis: {
        min: 0,
        max: 1024,
        title: {
            text: 'Throttle cnt'
        }
    },

    series: [{
        name: 'A',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:12px;color:silver">b</span></div>'
        },
        tooltip: {
            valueSuffix: 'b'
        }
    }]

};

var IqOptions =  {
    yAxis: {
        min: 0,
        max: 4096,
        title: {
            text: 'Iq'
        }
    },

    series: [{
        name: 'A',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:12px;color:silver">A</span></div>'
        },
        tooltip: {
            valueSuffix: 'Iq'
        }
    }]

};

var IdOptions =  {
    yAxis: {
        min: 0,
        max: 4096,
        title: {
            text: 'Id'
        }
    },

    series: [{
        name: 'A',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:12px;color:silver">A</span></div>'
        },
        tooltip: {
            valueSuffix: 'Id'
        }
    }]

};

var IqRefOptions =  {
    yAxis: {
        min: 0,
        max: 4096,
        title: {
            text: 'IqRef'
        }
    },

    series: [{
        name: 'A',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:12px;color:silver">A</span></div>'
        },
        tooltip: {
            valueSuffix: 'IqRef'
        }
    }]

};

var IdRefOptions =  {
    yAxis: {
        min: 0,
        max: 4096,
        title: {
            text: 'IdRef'
        }
    },

    series: [{
        name: 'A',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:12px;color:silver">A</span></div>'
        },
        tooltip: {
            valueSuffix: 'IdRef'
        }
    }]

};

