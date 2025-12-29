function checkAnswers() {
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q1.value === "10") {
        score += 10;
    }

    if (q2 && q2.value === "Python") {
        score += 10;
    }

    let level = "";
    if (score === 20) {
        level = "Gold Level";
    } else if (score === 10) {
        level = "Silver Level";
    } else {
        level = "Try Again";
    }

    document.getElementById("result").innerText =
        "Your Score: " + score + " | " + level;
}
  
