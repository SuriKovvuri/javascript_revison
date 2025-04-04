import fs from 'fs/promises'

async function filefuction() {
    try{
        await fs.writeFile('suri.txt', 'Suri\nBabu\nKovvuri') 
        console.log("success writefile")
        let data = await fs.readFile('suri.txt','utf-8')
        console.log(data)


        await fs.appendFile('suri.txt', '\nAdusumilli\nHarika')
        console.log("AppendFile")
        data = await fs.readFile('suri.txt', 'utf-8')
        console.log(data)

        await fs.rename('suri.txt', 'suribabu.txt',)
        console.log("Renamed the file name")
        data = await fs.readFile('suribabu.txt', 'utf-8')
        console.log(data)

        await fs.unlink('suribabu.txt')
        console.log("Deleted the file")
        try {
            data = await fs.readFile('test.txt', 'utf-8');
        } catch (err) {
            console.log("File Content After Delete: File no longer exists");
        }
    } catch(err) {
        console.log(err)
    }
}
filefuction()
            // await fs.readFile('suri.txt', 'utf-8', (err, data) => {
            //     if(err){
            //         console.log(err)
            //     } else {
            //         console.log("Data displaying")
            //         console.log(data)
            //     }
            // })

    

// fs.writeFile('suri.txt', "Hi\nThis is suri\nLearning Automation\nDemo", (err)=> {
//     if(err){
//         console.log("Not Successful")
//         console.log(err)
//     }else {
//         console.log("Successful")
//     }
// })


// fs.readFile('suri.txt','utf-8',(err,data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// fs.appendFile('suri.txt', '\nwow', (err) => {
//     if(err){
//         console.log("suri")
//     } else {
//         console.log("data printed")
//     }
// })

// fs.rename('suri.txt', 'suribabu.txt', (err) => {
//     if(err){
//         console.log(err)
//     }
// })


// fs.unlink('suribabu.txt', (err) => {
//     if(err) {
//         console.log(err)
//     }
// })






















// // // fs.writeFile('data.txt', 'Hi This is Suri\nFrom Vijayawada\nSoftware Engineer', (err) => {
// // //     if (err) {
// // //         console.log(err)
// // //     } else {
// // //         console.log("File write successful")
// // //     }
// // // })


// // // fs.readFile('data.txt', 'utf-8', (err, data) => {
// // //     if (err) {
// // //         console.log(err)
// // //     } else {
// // //         console.log("Fetching the file")
// // //         console.log(data)
// // //     }
// // // })


// // // fs.appendFile('data.txt', '\nThank you', (err) => {
// // //     if (err) throw err
// // //         console.log(err)
// // // })


// // // if (fs.existsSync('data.txt')) {
// // //     console.log("file is there")
// // // } else {
// // //     console.log("File Not there")
// // // }

// // // fs.rename('data.txt', 'test.txt', (err) => {
// // //     if (err) throw err;
// // //     console.log("Renamed")
// // // })



// // // fs.unlink('test.txt', (err) => {
// // //     if (err) throw err
// // //     console.log("deleted")
// // // })



// // // // 'Hi This is suri\nFrom Vijayawada\nSoftware Engineer\nThankyou'

// // // fs.mkdir('data.txt', {recursive: true} , (err,data) => {
// // //     if (err) throw err;
// // //         console.log("New File Created")
// // // })






















// // const fs = require('fs');

// // // Step 1: Write File
// // fs.writeFile('data.txt', 'Hi This is Suri\nFrom Vijayawada\nAndhra Pradesh', (err) => {
// //     if (err) throw err;
// //     console.log("New Text File Successfully Created.");

// //     // Step 2: Read File
// //     fs.readFile('data.txt', 'utf-8', (err, data) => {
// //         if (err) throw err;
// //         console.log("Data Fetched Successfully:");
// //         console.log(data);

// //         // Step 3: Update File
// //         fs.appendFile('data.txt', '\nThank you', (err) => {
// //             if (err) throw err;
// //             console.log("File Updated");

// //             // Step 4: Check if File Exists
// //             if (fs.existsSync('data.txt')) {
// //                 console.log("File Exists");

// //                 // Step 5: Rename File
// //                 fs.rename('data.txt', 'test.txt', (err) => {
// //                     if (err) throw err;
// //                     console.log("File Renamed to test.txt");

// //                     // Step 6: Delete File
// //                     fs.unlink('test.txt', (err) => {
// //                         if (err) throw err;
// //                         console.log("File Deleted");
// //                     });
// //                 });
// //             } else {
// //                 console.log("File does not exist");
// //             }
// //         });
// //     });
// // });


// const fs = require('fs').promises; // Using promise-based API for better readability

// async function manageFiles() {
//     try {
//         // Step 1: Write to File
//         await fs.writeFile('data.txt', 'Hi This is Suri\nFrom Vijayawada\nAndhra Pradesh');
//         console.log("Step 1: File Created");
//         let data = await fs.readFile('data.txt', 'utf-8');
//         console.log("File Content After Write:\n", data);

//         // Step 2: Append to File
//         await fs.appendFile('data.txt', '\nThank you');
//         console.log("Step 2: File Updated (Appended)");
//         data = await fs.readFile('data.txt', 'utf-8');
//         console.log("File Content After Append:\n", data);

//         // Step 3: Rename File
//         await fs.rename('data.txt', 'test.txt');
//         console.log("Step 3: File Renamed to test.txt");
//         data = await fs.readFile('test.txt', 'utf-8');
//         console.log("File Content After Rename:\n", data);

//         // Step 4: Check if File Exists
//         const fileExists = await fs.access('test.txt').then(() => true).catch(() => false);
//         console.log("Step 4: File Existence Check:", fileExists ? "Exists" : "Does Not Exist");
//         if (fileExists) {
//             data = await fs.readFile('test.txt', 'utf-8');
//             console.log("File Content After Existence Check:\n", data);
//         }

//         // Step 5: Delete File
//         await fs.unlink('test.txt');
//         console.log("Step 5: File Deleted");
//         try {
//             data = await fs.readFile('test.txt', 'utf-8');
//         } catch (err) {
//             console.log("File Content After Delete: File no longer exists");
//         }
//     } catch (err) {
//         console.error("Error:", err.message);
//     }
// }

// manageFiles();
