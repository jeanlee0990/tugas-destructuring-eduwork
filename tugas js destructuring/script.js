const students = [
    { name: "Budi Santoso", age: 20, major: "Teknik Informatika" },
    { name: "Siti Aminah", age: 21, major: "Matematika" },
    { name: "Andi Saputra", age: 19 }, 
    { name: "Dewi Kartika", age: 22, major: "Ekonomi" },
    { name: "Rizky Maulana", age: 20 }, 
    { name: "Putri Ayu", age: 23, major: "Hukum" }
];

function displayStudentInfo({ name: studentName, age, major = "Belum Ditentukan" }) {
    return `Nama: ${studentName}, Umur: ${age}, Jurusan: ${major}`;
}

const studentInfoDiv = document.getElementById("student-info");

const [firstStudent, secondStudent, thirdStudent, fourthStudent] = students;

studentInfoDiv.innerHTML = `
    <p>${displayStudentInfo(firstStudent)}</p>
    <p>${displayStudentInfo(secondStudent)}</p>
    <p>${displayStudentInfo(thirdStudent)}</p>
    <p>${displayStudentInfo(fourthStudent)}</p>
`;

const { name: fifthStudentName, age: fifthStudentAge, major: fifthStudentMajor = "Belum Ditentukan" } = students[4];
const { name: sixthStudentName, age: sixthStudentAge, major: sixthStudentMajor = "Belum Ditentukan" } = students[5];

studentInfoDiv.innerHTML += `
    <p>Nama: ${fifthStudentName}, Umur: ${fifthStudentAge}, Jurusan: ${fifthStudentMajor}</p>
    <p>Nama: ${sixthStudentName}, Umur: ${sixthStudentAge}, Jurusan: ${sixthStudentMajor}</p>
`;
