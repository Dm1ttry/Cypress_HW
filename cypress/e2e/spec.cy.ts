describe('test Drive2.ru', () => {
    const PaswordError = "useer123";
    const LoginError = "user123.@gmaill.ru";
    const LoinTru = "u43033104@gmail.com";
    const UserNameTru ='user123test';
    const FirstName = "Dmittry"
    const PaswordTru = "qwertuser12";
    const Message = "test text"
    

    it('Test shearch', () => {
        cy.OpenDriver2();
        cy.Search('Jaguar XF');
        cy.get('h1[class="x-title"]').should('contain.text', "Результаты поиска");
    })

    it('Test Support Message  and error valid email ', () => {
        cy.OpenDriver2();
        cy.SupportMessOpen()
        cy.SupportMessageInput(FirstName, LoginError, FirstName, Message)
        cy.get('strong').should('contain.text', "The email must be a valid email address.");
    })

    it("Error singin in Drive2.ru", () =>{
        cy.OpenDriver2();
        cy.LoginSite(LoginError, PaswordError);
        cy.get('span[class="field-validation-error"]').should('contain.text', "Указан неверный логин или пароль");
    })

    it("Singin test user in Drive2.ru", () =>{
        cy.OpenDriver2();
        cy.LoginSite(LoinTru, PaswordTru);
        cy.get('a[href="/users/user123test/"]]').click()
        cy.get('h1[class="x-title"]').should('contain.text', UserNameTru)
    })
  })