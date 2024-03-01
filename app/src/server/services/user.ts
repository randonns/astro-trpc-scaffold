import UserRepository from "@/server/repositories/user"

export default {
  async findAll(fake: boolean) {
    if (fake)
      return [
        { id: 1, name: "테스트1", age: 20, deptId: 1, deptName: "부서1", createdAt: new Date() },
        { id: 2, name: "테스트2", age: 21, deptId: 1, deptName: "부서1", createdAt: new Date() },
        { id: 3, name: "테스트3", age: 22, deptId: 1, deptName: "부서1", createdAt: new Date() },
        { id: 4, name: "테스트4", age: 23, deptId: 1, deptName: "부서1", createdAt: new Date() },
        { id: 5, name: "테스트5", age: 24, deptId: 1, deptName: "부서1", createdAt: new Date() },
      ]

    return UserRepository.findAll()
  },

  async create(name: string, age: number, deptId: number) {
    return await UserRepository.create(name, age, deptId)
  },
}
