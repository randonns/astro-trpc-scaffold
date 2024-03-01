<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>이름</TableHead>
        <TableHead class="w-[210px]">생성일시</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="dept in depts" :key="dept.id">
        <TableCell>{{ dept.id }}</TableCell>
        <TableCell>{{ dept.name }}</TableCell>
        <TableCell>
          <span class="time">{{ formatTime(dept.createdAt) }}</span>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { useClient } from "@/composables/client"
import { formatTime } from "@/utils/formatter"

type Depts = Awaited<ReturnType<typeof client.dept.all.query>>

const client = useClient()
const depts = ref<Depts>([])

onMounted(async () => {
  depts.value = await client.dept.all.query()
})
</script>

<style scoped>
/* lang 지정 없이 tailwind 사용 가능하다. */
.time {
  @apply font-thin italic;
}
</style>
