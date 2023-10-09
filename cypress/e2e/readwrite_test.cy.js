/// <reference types="cypress"/>

before(function(){
cy.fixture('example.json').as('test_data')
})


it('Read files using fixture',function(){

    cy.fixture('example.json').then((data)=>{
       cy.log (data.name)
       cy.log (data.email)

    })

    cy.log(this.test_data.name)
})

it('Read file using readFile()', function(){

   cy.readFile('./cypress/fixtures/example.json').then((data)=>{
   cy.log(data.name)

    })
 
})

it('Write file using writeFile()', function(){

    cy.writeFile('sample.txt', 'Hello I am Jirka')
    
    
})