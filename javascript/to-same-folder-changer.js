const fs = require('fs');
const path = require('path');

function renameFoldersAndFiles(rootFolder) {
    // ルートフォルダーの直下にあるフォルダーを取得
    fs.readdirSync(rootFolder).forEach(folderName => {
        const folderPath = path.join(rootFolder, folderName);
        
        // フォルダーかどうか確認
        if (fs.lstatSync(folderPath).isDirectory()) {
            // フォルダー名のフォーマットを変える（例: 01-1 -> 01-01）
            const parts = folderName.split('-');
            const newFolderName = `${String(parts[0]).padStart(2, '0')}-${String(parts[1]).padStart(2, '0')}`;
            const newFolderPath = path.join(rootFolder, newFolderName);

            // フォルダー名を変更
            fs.renameSync(folderPath, newFolderPath);

            // 新しいフォルダー内のファイル名を変更
            fs.readdirSync(newFolderPath).forEach(fileName => {
                if (fileName.startsWith("02_")) {
                    // "02_"を取り除いてファイル名を変更
                    const newFileName = fileName.slice(3);
                    const oldFilePath = path.join(newFolderPath, fileName);
                    const newFilePath = path.join(newFolderPath, newFileName);
                    
                    // ファイル名を変更
                    fs.renameSync(oldFilePath, newFilePath);
                }
            });
        }
    });
}

// ルートフォルダーのパスを指定
// const rootFolder = 'path/to/root-folder';
renameFoldersAndFiles(rootFolder);

const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');

function generateCSV(rootFolder, outputCSV) {
    const writer = csvWriter({ headers: ['Folder', 'File'] });
    writer.pipe(fs.createWriteStream(outputCSV));

    // ルートフォルダーの直下にあるフォルダーを取得
    fs.readdirSync(rootFolder).forEach(folderName => {
        const folderPath = path.join(rootFolder, folderName);

        if (fs.lstatSync(folderPath).isDirectory()) {
            fs.readdirSync(folderPath).forEach(fileName => {
                // フォルダー名とファイル名をCSVに書き込む
                writer.write({ Folder: folderName, File: fileName });
            });
        }
    });

    writer.end();
    console.log(`CSVファイルが ${outputCSV} に生成されました。`);
}

// ルートフォルダーと出力CSVファイルのパスを指定
const rootFolder = 'path/to/root-folder';
const outputCSV = 'output.csv';
generateCSV(rootFolder, outputCSV);
