import {LoginPage} from "./pages/login_page"

const loginPage = new LoginPage()

describe ('All login tests', ()=>{

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        })

    it('Login with valid credentials', ()=>{

        //cy.visit('https://opensource-demo.orangehrmlive.com/')
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    
    })
    
    it('Login with invalid username', ()=>{
    
        //cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        loginPage.enterUsername('Admin222')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    })

    it('Login with invalid password', ()=>{
    
        //cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin122')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    })
})
