class ScoreController {
    constructor() {
        this.score = 0;
        this.count = 0;
    }

    incrementScore() {
        this.score += 1;
        this.count += 1;
        return {
            score: this.score,
            count: this.count,
            message: "You are correct!"
        };
    }

    incrementCount() {
        this.count += 1;
        return {
            score: this.score,
            count: this.count,
            message: "Sorry - not correct"
        };
    }

    getScore() {
        return this.score;
    }

    getCount() {
        return this.count;
    }

    getTotalScore() {
        return `Total score: ${this.score}/${this.count}`;
    }

    getPercentage() {
        if (this.count === 0) return 0;
        return ((this.score / this.count) * 100).toFixed(1);
    }

    reset() {
        this.score = 0;
        this.count = 0;
    }

    calculateGrade() {
        const percentage = this.getPercentage();
        if (percentage >= 90) return 'A';
        if (percentage >= 80) return 'B';
        if (percentage >= 70) return 'C';
        if (percentage >= 60) return 'D';
        return 'F';
    }
}

export default ScoreController;