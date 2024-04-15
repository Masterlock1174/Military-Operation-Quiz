// Military Operation Quiz by Andy

// Add an Event Listener to the Submit Button
document.getElementById("Submit").addEventListener("click", correct);

// Store code in a function
function correct() {
  //Input
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;
  let q4 = document.getElementById("q4").value;
  let q5 = document.getElementById("q5").value;
  let q6 = document.getElementById("q6").value;
  let q7 = document.getElementById("q7").value;
  let q8 = document.getElementById("q8").value;
  let q9 = document.getElementById("q9").value;
  let q10 = document.getElementById("q10").value;
  let q11 = document.getElementById("q11").value;
  let q12 = document.getElementById("q12").value;
  let q13 = document.getElementById("q13").value;
  let q14 = document.getElementById("q14").value;
  let q15 = document.getElementById("q15").value;

  //Process
  let correctnum = 0;
  let tcai = "The correct answer is: ";
  if (q1.toLowerCase() == "d") {
    correctnum += 1;
    document.getElementById("q1").style.borderColor = "green";
    document.getElementById("correctanswer1").style.color = "green";
    document.getElementById("correctanswer1").innerHTML = `${tcai}d.`;
  } else {
    document.getElementById("q1").style.borderColor = "red";
    document.getElementById("correctanswer1").style.color = "red";
    document.getElementById("correctanswer1").innerHTML = `${tcai}d.`;
  }
  if (q2.toLowerCase() == "b") {
    correctnum += 1;
    document.getElementById("q2").style.borderColor = "green";
    document.getElementById("correctanswer2").style.color = "green";
    document.getElementById("correctanswer2").innerHTML = `${tcai}b.`;
  } else {
    document.getElementById("q2").style.borderColor = "red";
    document.getElementById("correctanswer2").style.color = "red";
    document.getElementById("correctanswer2").innerHTML = `${tcai}b.`;
  }
  if (q3.toLowerCase() == "d") {
    correctnum += 1;
    document.getElementById("q3").style.borderColor = "green";
    document.getElementById("correctanswer3").style.color = "green";
    document.getElementById("correctanswer3").innerHTML = `${tcai}d.`;
  } else {
    document.getElementById("q3").style.borderColor = "red";
    document.getElementById("correctanswer3").style.color = "red";
    document.getElementById("correctanswer3").innerHTML = `${tcai}d.`;
  }
  if (q4.toLowerCase() == "d") {
    correctnum += 1;
    document.getElementById("q4").style.borderColor = "green";
    document.getElementById("correctanswer4").style.color = "green";
    document.getElementById("correctanswer4").innerHTML = `${tcai}d.`;
  } else {
    document.getElementById("q4").style.borderColor = "red";
    document.getElementById("correctanswer4").style.color = "red";
    document.getElementById("correctanswer4").innerHTML = `${tcai}d.`;
  }
  if (q5.toLowerCase() == "a") {
    correctnum += 1;
    document.getElementById("q5").style.borderColor = "green";
    document.getElementById("correctanswer5").style.color = "green";
    document.getElementById("correctanswer5").innerHTML = `${tcai}a.`;
  } else {
    document.getElementById("q5").style.borderColor = "red";
    document.getElementById("correctanswer5").style.color = "red";
    document.getElementById("correctanswer5").innerHTML = `${tcai}a.`;
  }
  if (q6.toLowerCase() == "a") {
    correctnum += 1;
    document.getElementById("q6").style.borderColor = "green";
    document.getElementById("correctanswer6").style.color = "green";
    document.getElementById("correctanswer6").innerHTML = `${tcai}a.`;
  } else {
    document.getElementById("q6").style.borderColor = "red";
    document.getElementById("correctanswer6").style.color = "red";
    document.getElementById("correctanswer6").innerHTML = `${tcai}a.`;
  }
  if (q7.toLowerCase() == "b") {
    correctnum += 1;
    document.getElementById("q7").style.borderColor = "green";
    document.getElementById("correctanswer7").style.color = "green";
    document.getElementById("correctanswer7").innerHTML = `${tcai}b.`;
  } else {
    document.getElementById("q7").style.borderColor = "red";
    document.getElementById("correctanswer7").style.color = "red";
    document.getElementById("correctanswer7").innerHTML = `${tcai}b.`;
  }
  if (q8.toLowerCase() == "c") {
    correctnum += 1;
    document.getElementById("q8").style.borderColor = "green";
    document.getElementById("correctanswer8").style.color = "green";
    document.getElementById("correctanswer8").innerHTML = `${tcai}c.`;
  } else {
    document.getElementById("q8").style.borderColor = "red";
    document.getElementById("correctanswer8").style.color = "red";
    document.getElementById("correctanswer8").innerHTML = `${tcai}c.`;
  }
  if (q9.toLowerCase() == "a") {
    correctnum += 1;
    document.getElementById("q9").style.borderColor = "green";
    document.getElementById("correctanswer9").style.color = "green";
    document.getElementById("correctanswer9").innerHTML = `${tcai}a.`;
  } else {
    document.getElementById("q9").style.borderColor = "red";
    document.getElementById("correctanswer9").style.color = "red";
    document.getElementById("correctanswer9").innerHTML = `${tcai}a.`;
  }
  if (q10.toLowerCase() == "f" || q10 == "h") {
    correctnum += 1;
    document.getElementById("q10").style.borderColor = "green";
    document.getElementById("correctanswer10").style.color = "green";
    document.getElementById("correctanswer10").innerHTML = `${tcai}f or h.`;
  } else {
    document.getElementById("q10").style.borderColor = "red";
    document.getElementById("correctanswer10").style.color = "red";
    document.getElementById("correctanswer10").innerHTML = `${tcai}f or h.`;
  }
  if (q11.toLowerCase() == "b") {
    correctnum += 1;
    document.getElementById("q11").style.borderColor = "green";
    document.getElementById("correctanswer11").style.color = "green";
    document.getElementById("correctanswer11").innerHTML = `${tcai}b.`;
  } else {
    document.getElementById("q11").style.borderColor = "red";
    document.getElementById("correctanswer11").style.color = "red";
    document.getElementById("correctanswer11").innerHTML = `${tcai}b.`;
  }
  if (q12.toLowerCase() == "c") {
    correctnum += 1;
    document.getElementById("q12").style.borderColor = "green";
    document.getElementById("correctanswer12").style.color = "green";
    document.getElementById("correctanswer12").innerHTML = `${tcai}c.`;
  } else {
    document.getElementById("q12").style.borderColor = "red";
    document.getElementById("correctanswer12").style.color = "red";
    document.getElementById("correctanswer12").innerHTML = `${tcai}c.`;
  }
  if (q13.toLowerCase() == "d") {
    correctnum += 1;
    document.getElementById("q13").style.borderColor = "green";
    document.getElementById("correctanswer13").style.color = "green";
    document.getElementById("correctanswer13").innerHTML = `${tcai}d.`;
  } else {
    document.getElementById("q13").style.borderColor = "red";
    document.getElementById("correctanswer13").style.color = "red";
    document.getElementById("correctanswer13").innerHTML = `${tcai}d.`;
  }
  if (q14.toLowerCase() == "d") {
    correctnum += 1;
    document.getElementById("q14").style.borderColor = "green";
    document.getElementById("correctanswer14").style.color = "green";
    document.getElementById("correctanswer14").innerHTML = `${tcai}d.`;
  } else {
    document.getElementById("q14").style.borderColor = "red";
    document.getElementById("correctanswer14").style.color = "red";
    document.getElementById("correctanswer14").innerHTML = `${tcai}d.`;
  }
  if (q15.toLowerCase() == "b") {
    correctnum += 1;
    document.getElementById("q15").style.borderColor = "green";
    document.getElementById("correctanswer15").style.color = "green";
    document.getElementById("correctanswer15").innerHTML = `${tcai}b.`;
  } else {
    document.getElementById("q15").style.borderColor = "red";
    document.getElementById("correctanswer15").style.color = "red";
    document.getElementById("correctanswer15").innerHTML = `${tcai}b.`;
  }

  let response;
  if (correctnum == 15) {
    response =
      "Great job! You got a perfect grade. It is very clear that you are exceptionally knowledgable on the topic of military operations.";
  } else if (correctnum >= 13) {
    response =
      "Good job! You appear to be very knowledgable on the topic of military operations.";
  } else if (correctnum >= 8) {
    response =
      "Thanks for completing this quiz! Maybe you've learned something about military operation names.";
  } else if (correctnum >= 1) {
    response =
      "Thanks for trying this quiz! If you read through the answers and tried again, I bet that you would do better!";
  } else {
    response = "Are you sure you are using the correct answering format?";
  }

  let gradepercent = Math.round((correctnum / 15) * 100);
  let grademsg = `Grade: ${correctnum}/15 - ${gradepercent}%`;

  //Output
  document.getElementById("Grade").innerHTML = grademsg;
  console.log(correctnum);
  document.getElementById("Response").innerHTML = response;
  console.log(correctnum);
}
