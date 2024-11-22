import fs from 'fs';
const filePath = './data/user.json';

export const saveWord = (word) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.includes(word)) {
        data.push(word);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
};
