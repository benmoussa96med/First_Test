 fixture('test one')
 .page('https://www.demoqa.com/webtables');
test ('Connecting and test', async t => {
        await t  
        .click('#addNewRecordButton')
        .typeText('#firstName','Mohamed ')
        .typeText('#lastName',' Benmoussa')
        .typeText('#userEmail',' Benmoussa96mohamed@gmail.com')
        .typeText('#age',"24")
        .typeText('#salary',"3000")
        .typeText('#department',' deve')
        .click('#submit')
        .wait(2000)
});
