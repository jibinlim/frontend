const friends = [
    { name: '이재형', favorite: ['신라면', '오징어 짬뽕', ' 진라면'] },
    { name: '이선기', favorite: ['열라면', '무파마', '오징어  짬뽕','너구리'] },
    { name: '이태경', favorite: ['열라면', '무파마', '너구리', '김치라면'] },
    { name: '임지빈', favorite: ['진라면', '열라면', '무파마'] },
    { name: '함석준', favorite: ['신라면'] },
];

const ramens = [
    '신라면',
    '오징어 짬뽕',
    '진라면',
    '열라면',
    '무파마',
    '너구리',
    '안성탕면',
    '김치라면',
    '삼양라면',
    '참깨라면',
];

class Ramen {
    constructor() {
        this.water = 500;
        this.visitor = [];
        this.boilWater();
        this.makeRamen();
        this.getVisitors();
    }

    async smoke() {
        console.log('담배 피러 간다');
        await new Promise((resolve) => {
            setTimeout(() => {
            console.log('담배피고 왔다');
            resolve();
        }, 2000);
        });
    }

    watering(n) {
        this.water += n * 500;
        return this.water;
    }

    boilWater() {
        console.log('라면 물 올리고 담배피러 가기');
        setTimeout(() => {
            console.log('라면 물 끓음');
        }, 5000);
    }

    getVisitors() {
        const number = Math.floor(Math.random() * 6);
        console.log('방문자는', number, '명');
        while (this.visitor.length < number) {
            const friend = friends[Math.floor(Math.random() * 5)];
            if (this.visitor.indexOf(friend) === -1) {
                this.visitior.push(friend);
            }
        }
    }

    checkVisitors() {
        console.log(this.visitor);
        return this.visitor;
    }

    pickRamen() {
        const favoritNoodles = friends.reduce((acc, friend) => {
            friend.favorite.forEach((noodle) => {acc[noodle] = acc[noodle] ? acc[noodle] + 1 : 1;
            });
            return acc;
        }
    },{});

    async makeRamen() {
        const trash = await this.smoke();
        console.log(trash);
        const friends = await this.checkVisitors();
        const ramen = await this.pickRamen();
        console.log('오늘 먹을 라면은 ',ramen);
        const water = this.watering(friends.length);
        console.log('물은 ',water, "ml");
    }
}


new Ramen();
