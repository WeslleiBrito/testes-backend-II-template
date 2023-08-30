import {UserBusiness} from '../../src/business/UserBusiness'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { IdGeneratorMock } from '../mocks/IdGeneratorMock'
import { TokenManagerMock } from '../mocks/TokenManagerMock'
import { HashManagerMock } from '../mocks/HashManagerMock'
import { SignupInputDTO, SignupOutputDTO } from '../../src/dtos/user/signup.dto'


const userBuisness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
)

describe("Teste do signup", () => {

    test("Testando o sucesso da inserçao de um novo usuario", async () => {

        const input: SignupInputDTO = {
            name: 'Wesllei',
            email: 'wesllei.wbs@gmail.com',
            password: 'senha000',
       
        }

        const output = await userBuisness.signup(input)

        expect(output).toEqual(
            {
                message: "Cadastro realizado com sucesso",
                token: "token-mock"
            }
        )
    })

    
})