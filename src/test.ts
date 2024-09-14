import axios from 'axios';
import {TestModule} from "./modules/test-module.js";

async function main() {
    console.log(`--- typeof axios = ${typeof axios}`); //// TEST
    
    const test: string = 'z1';
    console.log(`--- test = ${test}`); //// TEST
    
    const testModule = new TestModule();
    console.log(`--- testModule:`, testModule); //// TEST

    let testData = null;
    await fetch('/data/test-data.json')
        .then(response => response.json())
        .then(data => {
            testData = data;
        });
    console.log(`--- testData:`, testData); //// TEST
}

main();
