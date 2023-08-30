import {UserBusiness} from '../../src/business/UserBusiness'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { IdGeneratorMock } from '../mocks/IdGeneratorMock'
import { TokenManagerMock } from '../mocks/TokenManagerMock'
import { HashManagerMock } from '../mocks/HashManagerMock'
import { LoginInputDTO, LoginOutputDTO } from '../../src/dtos/user/login.dto'

const userBuisness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
)

describe("Teste de login", () => {

    test("Caso de sucesso", async () => {
        const input: LoginInputDTO = {
            email: 'fulano@email.com',
            password: 'fulano123'
        }

        const output: LoginOutputDTO = await userBuisness.login(input)

        expect(output).toEqual({
            message: "Login realizado com sucesso",
            token: "token-mock-fulano"
        })
    })
    


})