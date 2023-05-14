// on window load
window.onload = function() {
    // create Chart.js bar chart for ID myChart
    var ctx = document.getElementById('myChart').getContext('2d');
    // set Chart.js options
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 10
                }
            }]
        }
    };
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Cyan', 'Magenta', 'Lime', 'Pink'],
            datasets: [{
                label: 'Color Intensity',
                data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.5)',
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(255, 255, 0, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(128, 0, 128, 0.5)',
                    'rgba(255, 165, 0, 0.5)',
                    'rgba(0, 255, 255, 0.5)',
                    'rgba(255, 0, 255, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(255, 192, 203, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 0.8)',
                    'rgba(0, 0, 255, 0.8)',
                    'rgba(255, 255, 0, 0.8)',
                    'rgba(0, 255, 0, 0.8)',
                    'rgba(128, 0, 128, 0.8)',
                    'rgba(255, 165, 0, 0.8)',
                    'rgba(0, 255, 255, 0.8)',
                    'rgba(255, 0, 255, 0.8)',
                    'rgba(0, 255, 0, 0.8)',
                    'rgba(255, 192, 203, 0.8)'
                ],
                borderWidth: 1
            }]
        },
        options: options
    });
    
}
