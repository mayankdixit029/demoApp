const db = require("../utils/databaseUtil");

module.exports = class Student {
  constructor(name, classes, roll_number, dob) {
    this.name = name;
    this.classes = classes;
    this.roll_number = roll_number;
    this.dob = dob;
    // this.id = id;
  }
  save() {
    return db.execute(
      "INSERT INTO students (name, classes, roll_number, dob) VALUES (?, ?, ?, ?)",
      [this.name, this.classes, this.roll_number, this.dob]
    );
  }

  static fetchAll() {
    return db
      .execute("SELECT * FROM students")
      .then(([rows, fieldData]) => {
        console.log("test", rows, fieldData);
        return rows;
      })
      .catch((err) => {
        throw err;
      });
  }

  static findById(studentId) {
    return db
      .execute("SELECT * FROM students WHERE id = ?", [studentId])
      .then(([rows, fieldData]) => {
        return rows[0];
      })
      .catch((err) => {
        throw err;
      });
  }

  static update(studentId, name, classes, roll_number, dob) {
    return db
      .execute(
        "UPDATE students SET name = ?, classes = ?, roll_number = ?, dob = ? WHERE id = ?",
        [name, classes, roll_number, dob, studentId]
      )
      .then(([result]) => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
  }

  static deleteById(studentId) {
    return db
      .execute("DELETE FROM students WHERE id = ?", [studentId])
      .then(([result]) => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
    }
};
