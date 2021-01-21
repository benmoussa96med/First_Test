import {Selector} from 'testcafe';

const deve=Selector("#developer-name");
const choix=Selector ("#macos");
const checkOne=Selector('input#remote-testing');
const checktwo=Selector('input#background-parallel-testing');
const select=Selector('select#preferred-interface');
const SelectOption=select.find('option');
const btncli=Selector("#submit-button");

const Title=Selector('h1').withText('Thank you, Med!');


fixture("First Fixture")
 .page("https://devexpress.github.io/testcafe/");

test.page("https://devexpress.github.io/testcafe/example/")
("First Test",async t =>{
        //Arrang


        //Act
        await t
        .debug()
        .setTestSpeed(0.7)
        .typeText(deve,"Med")
        .click(choix)
        .click(select)
        .click(SelectOption.withText('JavaScript API'))
        .click(checkOne)
        .click(checktwo)
        .click(btncli)

        //Assert
        await t
        .expect(Title.exists).ok()
});
