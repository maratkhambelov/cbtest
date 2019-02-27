export class Http {

    constructor(url) {
        this.url = url;
    }

    getAll() {
        return fetch(this.url)
    }
    // get() {
    //     return fetch(this.url)
    //         .then(res => {
    //             if(res.status === 200) {
    //                 console.log('12')
    //                 return res.json();
    //
    //             }
    //             else {
    //                 console.log('wait')
    //             }
    //             throw new Error(res.statusText);
    //         })
    //         .then(item => {
    //             console.log(item);
    //
    //         })
    //         .catch(err => console.log(err));
    //
    // }
}