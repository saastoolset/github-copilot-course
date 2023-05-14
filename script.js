// on window load
window.onload = function () {
  function getIncomeValues() {
    // get input value for janIncome.
    var janIncome = document.getElementById("janIncome").value;
    // get input value for febIncome.
    var febIncome = document.getElementById("febIncome").value;
    // get input value for marIncome.
    var marIncome = document.getElementById("marIncome").value;
    // get input value for aprIncome.
    var aprIncome = document.getElementById("aprIncome").value;
    // get input value for mayIncome.
    var mayIncome = document.getElementById("mayIncome").value;
    // get input value for junIncome.
    var junIncome = document.getElementById("junIncome").value;
    // get input value for julIncome.
    var julIncome = document.getElementById("julIncome").value;
    // get input value for augIncome.
    var augIncome = document.getElementById("augIncome").value;
    // get input value for sepIncome.
    var sepIncome = document.getElementById("sepIncome").value;
    // get input value for octIncome.
    var octIncome = document.getElementById("octIncome").value;
    // get input value for novIncome.
    var novIncome = document.getElementById("novIncome").value;
    // get input value for decIncome.
    var decIncome = document.getElementById("decIncome").value;
    return [
      janIncome,
      febIncome,
      marIncome,
      aprIncome,
      mayIncome,
      junIncome,
      julIncome,
      augIncome,
      sepIncome,
      octIncome,
      novIncome,
      decIncome,
    ];
  }

  function getExpenseValues() {
    // get input value for janExpense.
    var janExpense = document.getElementById("janExpenses").value;
    // get input value for febExpense.
    var febExpense = document.getElementById("febExpenses").value;
    // get input value for marExpense.
    var marExpense = document.getElementById("marExpenses").value;
    // get input value for aprExpense.
    var aprExpense = document.getElementById("aprExpenses").value;
    // get input value for mayExpense.
    var mayExpense = document.getElementById("mayExpenses").value;
    // get input value for junExpense.
    var junExpense = document.getElementById("junExpenses").value;
    // get input value for julExpense.
    var julExpense = document.getElementById("julExpenses").value;
    // get input value for augExpense.
    var augExpense = document.getElementById("augExpenses").value;
    // get input value for sepExpense.
    var sepExpense = document.getElementById("sepExpenses").value;
    // get input value for octExpense.
    var octExpense = document.getElementById("octExpenses").value;
    // get input value for novExpense.
    var novExpense = document.getElementById("novExpenses").value;
    // get input value for decExpense.
    var decExpense = document.getElementById("decExpenses").value;
    return [
      janExpense,
      febExpense,
      marExpense,
      aprExpense,
      mayExpense,
      junExpense,
      julExpense,
      augExpense,
      sepExpense,
      octExpense,
      novExpense,
      decExpense,
    ];
  }

  // create Chart.js bar chart for ID myChart
  var ctx = document.getElementById("myChart").getContext("2d");
  // set Chart.js options
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 10,
          },
        },
      ],
    },
  };
  // 'rgba(255, 0, 0, 0.5)',
  // 'rgba(0, 0, 255, 0.5)',
  // 'rgba(255, 0, 0, 0.8)',
  // 'rgba(0, 0, 255, 0.8)',

  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Income",
          data: getIncomeValues(),
          backgroundColor: [
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
          ],
          borderColor: [
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 0, 0, 0.8)",
          ],
          borderWidth: 1,
        },
        {
          label: "Expense",
          data: getExpenseValues(),
          backgroundColor: [
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.5)",
          ],
          borderColor: [
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(0, 0, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: options,
  });

  // click handler for chart-tab.
  document.getElementById("chart-tab").addEventListener("click", function () {
    // get myChart data[0] from getIncomeValues
    myChart.data.datasets[0].data = getIncomeValues();
    // get myChart data[1] from getExpenseValues
    myChart.data.datasets[1].data = getExpenseValues();

    // update chart
    myChart.update();
  });
};
