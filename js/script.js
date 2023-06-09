
function handleFormSubmit() {
    event.preventDefault(); // Prevent the default form submission
    // Get form inputs
    const x0 = parseFloat(document.getElementById("x0Input").value);
    const y0 = parseFloat(document.getElementById("y0Input").value);
    const h = parseFloat(document.getElementById("hInput").value);
    const xTarget = parseFloat(document.getElementById("xTargetInput").value);
    let yTarget;
    const startTimerValue = document.getElementById("startTimerValue");
    const endTimerValue = document.getElementById("endTimerValue");
    const X0Value = document.getElementById("X0Value");
    const Y0Value = document.getElementById("Y0Value");
    const XResultValue = document.getElementById("XResultValue");
    const selectedMethod = document.querySelector(
      'input[name="method"]:checked'
    ).value;

    // -------------------------
    X0Value.innerText = x0;
    Y0Value.innerText = y0;
    XResultValue.innerText = xTarget;
    
    event.target.reset();
    //-----------------------------

    const ctx = document.getElementById("myChart");
    
    
    const Taylor_method_value = Taylor_method(x0, y0, h, xTarget);
    const Euler_Method_value = Euler_Method(x0, y0, h, xTarget);
    const Heun_method_value = Heun_method(x0, y0, h, xTarget);
    const Runge_Kutta_Method_value = Runge_Kutta_Method(x0, y0, h, xTarget);

    let TaylorMethod_timeComplexity = Taylor_method_value.endTime - Taylor_method_value.startTime
    let EulerMethod_timeComplexity = Euler_Method_value.endTime - Euler_Method_value.startTime;
    let HeunMethod_timeComplexity = Heun_method_value.endTime - Heun_method_value.startTime;
    let RungeKuttaMethod_timeComplexity = Runge_Kutta_Method_value.endTime - Runge_Kutta_Method_value.startTime;
 

    // --------------------------------

    if ("Heun_method" === selectedMethod){
      startTimerValue.innerText = `${Heun_method_value.startTime.toFixed(2)} ms`;
      endTimerValue.innerText = `${Heun_method_value.endTime.toFixed(2)} ms`;
      yTarget = Heun_method_value.y;
    }
    
    else if ("Runge_Kutta_Method" === selectedMethod){
      startTimerValue.innerText = `${Runge_Kutta_Method_value.startTime.toFixed(2)} ms`;
      endTimerValue.innerText = `${Runge_Kutta_Method_value.endTime.toFixed(2)} ms`;
      yTarget = Runge_Kutta_Method_value.y;
    }

    else if ("Euler_Method" === selectedMethod){
      startTimerValue.innerText = `${Euler_Method_value.startTime.toFixed(2)} ms`;
      endTimerValue.innerText = `${Euler_Method_value.endTime.toFixed(2)} ms`;
      yTarget = Euler_Method_value.y;
    }

    else if ("Taylor_method" === selectedMethod){
      startTimerValue.innerText = `${Taylor_method_value.startTime.toFixed(2)} ms`;
      endTimerValue.innerText = `${Taylor_method_value.endTime.toFixed(2)} ms`;
      yTarget = Taylor_method_value.y;
    }

    YResultValue.innerText = yTarget.toFixed(2);
    // -----------------------------------------

    // console.log(TaylorMethod_timeComplexity, EulerMethod_timeComplexity, HeunMethod_timeComplexity, RungeKuttaMethod_timeComplexity, Runge_Kutta_Method_value.y)
    console.log(Heun_method_value.y, Runge_Kutta_Method_value.y, Euler_Method_value.y, Runge_Kutta_Method_value.y, selectedMethod)

    new Chart(ctx, {
    type: "bar",
    options: {
    scales: {
    scales: {
          x: {
              stacked: true
          },
          y: {
              stacked: true
          }
      }
  }
},
  data: {
    labels: [
      "Taylor Method",
      "Euler Method",
      "Heun Method",
      "Runge Kutta Method",
    ],
    datasets: [
      {
        label: "# Time Complexity Analysis",
        data: [TaylorMethod_timeComplexity, EulerMethod_timeComplexity, HeunMethod_timeComplexity, RungeKuttaMethod_timeComplexity],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

//   ----------------------
ctx_2 = document.getElementById('myChart2');
new Chart(ctx_2 , {
  type: 'scatter',
  data: {
    datasets: [{
        label: 'Scatter Dataset',
        data: [{x:x0,y:y0},{x:xTarget,y:yTarget}],
        showLine:true,
        tension: 0.2,
    }]
  },
options: {
    scales: {
      xAxes: [{
          type: 'linear',
      ticks: {
        stepSize: 1
      }
      }],yAxes: [{
          type: 'linear',
      ticks: {
        stepSize: 1
      }
      }]
    }
  }
});

    // Perform desired calculations based on the selected method and input values
    // Replace the following with your own logic

    console.log("x0:", x0);
    console.log("y0:", y0);
    console.log("h:", h);
    console.log("xTarget:", xTarget);
    console.log("selectedMethod:", selectedMethod);
  }
  const form = document.getElementById("myForm");
  form.addEventListener("submit", handleFormSubmit);

 

  // --------------------------------

  function f_y1(x, y) {
    return 3 * x + y * y;
  }

  function f_y2(y, y1) {
    return 2 * y * y1 + 3;
  }

  function f_y3(y, y1, y2) {
    return 2 * (y1 * y1) + 2 * y * y2;
  }

  function f_y4(y, y1, y2, y3) {
    return 6 * y1 * y2 + 2 * y * y3;
  }

  function fac(n) {
    let c = 1;
    for (let i = 1; i <= n; ++i) c *= i;
    return c;
  }

  function Taylor_method(x, y, h, x_target) {
    const startTime = performance.now();
    let y1, y2, y3, y4;
    while (x < x_target) {
      y1 = f_y1(x, y);
      y2 = f_y2(y, y1);
      y3 = f_y3(y, y1, y2);
      y4 = f_y4(y, y1, y2, y3);
      let cal =
        y +
        h * y1 +
        (h * h * y2) / fac(2) +
        (h * h * h * y3) / fac(3) +
        (h * h * h * h * y4) / fac(4);
      x += h;
      y = cal;
    }

    // console.log(`y(${x_target}) = ${y}`);
    const endTime = performance.now();
    return {x_target, y, startTime,endTime}
  }

  // --------      --------------------
  function f_Euler_Method(x, y) {
    return 3 * x + y * y;
  }

  function Euler_Method(x, y, h, x_target) {
    const startTime = performance.now();
    while (x < x_target) {
      let cal = y + h * f_Euler_Method(x, y);
      x += h;
      y = cal;
    }
    const endTime = performance.now();
    return {x_target, y, startTime,endTime}
  }
  // -------------------------------------
  function f_Heun_method(x, y) {
    return 3 * x + y * y;
  }

  function Heun_method(x, y, h, x_target) {
    const startTime = performance.now();
    while (x < x_target) {
      let y_pred = y + h * f_Heun_method(x, y);
      let cal = (h / 2) * (f_Heun_method(x, y) + f_Heun_method(x + h, y_pred));
      x += h;
      y = cal;
    }
    // console.log(`y(${x_target}) = ${y}`);
    const endTime = performance.now();
    return {x_target, y, startTime,endTime}
  }

  // ----------------------------------------
  function f_Runge_Kutta_Method(x, y) {
    return 3 * x + y * y;
  }

  function Runge_Kutta_Method(x, y, h, x_target) {
    const startTime = performance.now();
    let cal, k1, k2, k3, k4, del_y;

    while (x < x_target) {
      k1 = h * f_Runge_Kutta_Method(x, y);
      k2 = h * f_Runge_Kutta_Method(x + h / 2, y + k1 / 2);
      k3 = h * f_Runge_Kutta_Method(x + h / 2, y + k2 / 2);
      k4 = h * f_Runge_Kutta_Method(x + h, y + k3);
      del_y = (k1 + 2 * k2 + 2 * k3 + k4) / 6;
      cal = y + del_y;
      x += h;
      y = cal;
    }
    // console.log(`y(${x_target}) = ${y}`);
    const endTime = performance.now();
    return {x_target, y, startTime,endTime}
  }
