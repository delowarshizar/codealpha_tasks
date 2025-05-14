function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value); 
    const year = parseInt(document.getElementById("year").value);
    const result = document.getElementById("result");
    const nextBirthday = document.getElementById("nextBirthday");

    if (!day || !month || !year) {
        result.innerText = " Please fill all fields!";
        nextBirthday.innerText = "";
        return;
    }

    if (month < 1 || month > 12) {
        result.innerText = " Invalid month! Must be between 1 and 12.";
        nextBirthday.innerText = "";
        return;
    }

    if (day < 1 || day > 31) {
        result.innerText = " Invalid day! Must be between 1 and 31.";
        nextBirthday.innerText = "";
        return;
    }

    const birthDate = new Date(year, month - 1, day); 
    const today = new Date();

    if (
        birthDate.getDate() !== day ||
        birthDate.getMonth() !== month - 1 ||
        birthDate.getFullYear() !== year
    ) {
        result.innerText = " Invalid date! Please check the day and month.";
        nextBirthday.innerText = "";
        return;
    }

    if (birthDate > today) {
        result.innerText = "⏳ Future birthdate? Please enter a valid past date.";
        nextBirthday.innerText = "";
        return;
    }

    let ageYears = today.getFullYear() - year;
    let ageMonths = today.getMonth() - (month - 1);
    let ageDays = today.getDate() - day;

    if (ageDays < 0) {
        ageMonths--;
        const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += prevMonthDays;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    result.innerText = `🎉 You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;

    let next = new Date(today.getFullYear(), month - 1, day);
    if (next < today) {
        next.setFullYear(today.getFullYear() + 1);
    }

    const diff = next - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    nextBirthday.innerText = `🎂 Your next birthday is in ${days} day(s).`;
}

document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
});
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    const icon = document.getElementById("theme-icon");
    if (document.body.classList.contains("dark")) {
        icon.textContent = "🌞";
    } else {
        icon.textContent = "🌙";
    }
}

