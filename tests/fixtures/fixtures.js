import {test as base} from 'playwright-bdd'
import { LoginPage } from "../pages/loginPage";
import { ChangeNamePage } from "../pages/changeNamePage";



export const test = base.extend(({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },
    changeNamePage: async ({page}, use) => {
        const changeNamePage = new ChangeNamePage(page)
        await use(changeNamePage)
    }
})) 