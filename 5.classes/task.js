class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(num) {
        if (num < 0) {
            this._state = 0;
        } else if (num > 100) {
            this._state = 100;
        } else {
            this._state = num;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }

}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = this.books.find(book => book[type] === value);
        return (result != undefined) ? result : null;
    }

    giveBookByName(bookName) {
        let result = this.books.findIndex(book => book.name === bookName);
        if (result !== -1) {
            let resultBook = this.books[result];
            this.books.splice(result, 1);
            return resultBook;
        } else {
            return null;
        }
        }
}


// Задание из раздела Классы (доп/задание)


class Student {
  constructor(name) {
    this.name = name,
      this.marks = {}
  }    

  addMark(marksToAdd, subjectName) {
    if (marksToAdd > 5 || marksToAdd < 2) {
      return;
    };

    if (!this.marks.hasOwnProperty(subjectName)) {
      this.marks[subjectName] = [];
      };

      this.marks[subjectName].push(marksToAdd);
  }

  getAverageBySubject(subject){

    if (!this.marks.hasOwnProperty(subject) || this.marks[subject].length === 0) {
      return 0;
    }
    let sum = this.marks[subject].reduce((acc, item) => acc + item, 0);
    return sum / this.marks[subject].length;

  }

  getAverage() {
    let subjectArr= Object.keys(this.marks);

    let subjectSum = subjectArr.reduce((acc, index) => {
      return acc + this.getAverageBySubject(index);
    }, 0);

    return subjectSum / subjectArr.length;
  }
}
