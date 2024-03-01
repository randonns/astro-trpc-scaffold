import UserService from "./user"
import UserRepository from "../repositories/user"

jest.mock("../repositories/user")

test("fake = true 일때는 UserRepository.findAll 이 호출되지 않고 결과가 5건이어야 한다.", async () => {
  const result = await UserService.findAll(true)
  expect(UserRepository.findAll).not.toHaveBeenCalled()
  expect(result.length).toBe(5)
})

test("fake = false 일때는 UserRepository.findAll 이 호출되어야 한다.", async () => {
  await UserService.findAll(false)
  expect(UserRepository.findAll).toHaveBeenCalled()
})
