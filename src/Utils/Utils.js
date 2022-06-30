import lstStudent from "../data/students"

class Utils {
    static getTotalSubjectMarks = (marks) => {
        let sum = 0;
        //Reduce
        Object.values(marks).map((item) => {
            sum += item
        })
        return sum
    }


    static getPercentage = (TotalMarksPerSubject) => {
        return TotalMarksPerSubject * 100 / 500
    }

    static getIsPassedOrNot = (marks) => {
        if (marks.hindi < 35 || marks.math < 35 || marks.english < 35 || marks.node < 35 || marks.graphql < 35) {
            return false
        } else {
            return true
        }
    }

    static getFailedStudent = () => {
        let isPassed = 0;
        let isFailed = 0;
        let marks = lstStudent.map((item) => {
            return item.marks
        })

        marks.map((item) => {
            if (item.hindi < 35 || item.math < 35 || item.english < 35 || item.node < 35 || item.graphql < 35) {
                isFailed += 1
            } else {
                isPassed += 1
            }
        })
        return { isFailed, isPassed }
    }

    static getPassedStudent = () => {
        let isPassed = 0;
        let isFailed = 0;
        let marks = lstStudent.map((item) => {
            return item.marks
        })
        marks.map((item) => {
            if (item.hindi < 35 || item.math < 35 || item.english < 35 || item.node < 35 || item.graphql < 35) {
                isFailed += 1
            } else {
                isPassed += 1
            }
        })
        return isPassed
    }

    static getTotalStudetList() {
        return lstStudent.length
    }

    static getMinMarks() {
        let min = Infinity;
        let result = lstStudent.map((item) => {
            return this.getTotalSubjectMarks(item.marks)
        })

        for (let item of result) {
            if (item < min) {
                min = item
            }
        }
        return min
    }

    static getMaxMarks() {
        let max = 0;
        let result = lstStudent.map((item) => {
            return this.getTotalSubjectMarks(item.marks)
        })

        for (let item of result) {
            if (item > max) {
                max = item
            }

        }
        return max
    }

    static getAvgPercentage() {
        let result = [];
        let sum = 0;
        lstStudent.map((item) => {
            sum += this.getPercentage(this.getTotalSubjectMarks(item.marks))
            return sum
        })
        result.map((item) => {

        })

        return parseFloat(sum / result.length).toFixed(2);
    }

}

export default Utils