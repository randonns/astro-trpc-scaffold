<template>
  <Create @create="onCreate" />
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>이름</TableHead>
        <TableHead>나이</TableHead>
        <TableHead>부서</TableHead>
        <TableHead class="w-[210px]">생성일시</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.id">
        <TableCell>{{ user.id }}</TableCell>
        <TableCell>{{ user.name }}</TableCell>
        <TableCell>{{ user.age }}</TableCell>
        <TableCell>{{ user.deptName }} ({{ user.deptId }})</TableCell>
        <TableCell>{{ formatTime(user.createdAt) }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { useClient } from "@/composables/client"
import Create from "./Create.vue"
import { formatTime } from "@/utils/formatter"

type Users = Awaited<ReturnType<typeof client.user.all.query>>

const client = useClient()
const users = ref<Users>([])

async function loadUsers() {
  users.value = await client.user.all.query({ fake: false })
}

onMounted(async () => {
  await loadUsers()
})

async function onCreate() {
  await loadUsers()
}
</script>
