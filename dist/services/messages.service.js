"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageClass = void 0;
const fs_1 = __importDefault(require("fs"));
class messageClass {
    constructor(id, nombre, apellido, edad, alias, avatar, text) {
        this.author = { id, nombre, apellido, edad, alias, avatar };
        this.text = text;
    }
}
exports.messageClass = messageClass;
module.exports = (io) => {
    //Io
    let messagesFromServer = fs_1.default.readFileSync('./public/messages.json', 'utf8');
    messagesFromServer = JSON.parse(messagesFromServer);
    io.on('connection', (socket) => {
        socket.emit('Mensajes Anteriores', messagesFromServer);
        socket.on('message', (payload) => {
            io.emit('message', payload);
            const msg = {
                author: {
                    id: payload.author.id,
                    nombre: payload.author.nombre,
                    apellido: payload.author.apellido,
                    edad: payload.author.edad,
                    alias: payload.author.alias,
                    avatar: payload.author.avatar
                },
                text: payload.text
            };
            let messagesJSON = [...messagesFromServer, msg];
            fs_1.default.writeFile('./public/messages.json', JSON.stringify(messagesJSON), 'utf8', function (err) { console.log(err); });
        });
    });
};
