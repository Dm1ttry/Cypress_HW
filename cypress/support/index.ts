declare namespace Cypress{
    interface Chainable{
        OpenDriver2(): Chainable<JQuery<HTMLElement>>,
        Search(Text: string): Chainable<JQuery<HTMLElement>>,
        LoginSite(Email: string , Pasword: string): Chainable<JQuery<HTMLElement>>,
        SortRelevantOrDate(RelevantOrDate: string): Chainable<JQuery<HTMLElement>>,
        SupportMessOpen(): Chainable<JQuery<HTMLElement>>,
        SupportMessageInput(name:string , email: string, nickname: string, message: string): Chainable<JQuery<HTMLElement>>
    }
}