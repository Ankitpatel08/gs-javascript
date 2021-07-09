console.groupCollapsed('*** promise ***');
/**
 * Promise object represents the eventual completion of an async operation and its resulting value
 * States: Pending(initial), success(operation completed), reject(operation failed)
 */

class Person {
    constructor() {
        this.printNames();
    }

    getPersonsData() {
        // returning promise, after 5 seconds, It resolves and send data
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (true) {
                    let persons = [{
                        name: 'Ankit'
                    }, {
                        name: 'Akshay'
                    }];
    
                    resolve(persons);
                } else {
                    reject(new Error('data not found'));
                }
            }, 5000);
        });
    }

    async printNames() {
        // async/await syntax to avoid callback hell
        let persons = await this.getPersonsData();

        persons.forEach(element => {
            console.log(element.name);
        });

        // this.getPersonsData().then(persons => {
        //     persons.forEach(element => {
        //         console.log(element.name);
        //     });
        // }).catch(err => {
        //     console.log(err);
        // });
    }
}

new Person();

console.groupEnd();