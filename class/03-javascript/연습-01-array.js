let students = ["짱구", "철수", "맹구", "훈이", "유리"];
// undefined
students;
// (5) ['짱구', '철수', '맹구', '훈이', '유리']
students[0];
// '짱구'
students[1];
// '철수'
students[2];
// '맹구'
students.includes("훈이");
// true
students.includes("수지");
// false
students.length;
// 5
students.push("수지");
// 6
students;
// (6) ['짱구', '철수', '맹구', '훈이', '유리', '수지']
students.pop();
// '수지'
students;
// (5) ['짱구', '철수', '맹구', '훈이', '유리']
