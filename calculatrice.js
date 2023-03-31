function addToOutput(value) {
    document.getElementById("output").value += value;
  }
  
  function clearOutput() {
    document.getElementById("output").value = "";
  }
  
  function deleteLast() {
    var output = document.getElementById("output").value;
    document.getElementById("output").value = output.slice(0, -1);
  }
  
  function calculate() {
    var output = document.getElementById("output").value;
    var result = eval(output);
    document.getElementById("output").value = result;
  }
  