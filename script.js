function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var gender = document.getElementById('gender').
    value;

    if (isNaN(weight) || isNaN(height)) {
      document.getElementById('result').innerHTML = "Please enter valid values.";
      return;
    }

    var bmi = weight / ((height/100) * (height/100));
    bmi = bmi.toFixed(2);

    var resultText = "Your BMI: " + bmi;

    document.getElementById('result').innerHTML = resultText;
  }