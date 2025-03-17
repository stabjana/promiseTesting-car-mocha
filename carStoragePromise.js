'use strict';

import fs from "node:fs/promises";

const storageFilePath = './cars.json';

export default function search(key, value) {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fs.readFile(storageFilePath, 'utf8');
            const cars = JSON.parse(data);

            if (arguments.length < 2) {
                // resolve(cars);
                reject('parameter missing');
            }
            else {
                resolve(cars.filter(car => car[key] === value));
            }

        }
        catch (err) {
            reject([]);
        }
    })

}