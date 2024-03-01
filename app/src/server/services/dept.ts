import DeptRepository from "@/server/repositories/dept"

export default {
  async findAll() {
    return DeptRepository.findAll()
  },
}
