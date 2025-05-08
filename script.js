function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      result.textContent = "Please enter valid height and weight.";
      result.style.color = "red";
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(2);
  
    let status = "";
    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi < 24.9) {
      status = "Normal weight";
    } else if (bmi < 29.9) {
      status = "Overweight";
    } else {
      status = "Obese";
    }
  
    result.textContent = `Your BMI is ${roundedBMI} (${status})`;
    result.style.color = "black";
  }
  