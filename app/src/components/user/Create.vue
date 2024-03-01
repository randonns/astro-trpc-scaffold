<template>
  <Sheet v-model:open="isOpen">
    <SheetTrigger as-child>
      <Button>새 사용자</Button>
    </SheetTrigger>
    <SheetContent class="min-w-[600px]">
      <SheetHeader>
        <SheetTitle>새 사용자</SheetTitle>
        <SheetDescription>새로운 사용자를 추가합니다.</SheetDescription>
      </SheetHeader>
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>이름</FormLabel>
            <FormControl>
              <Input placeholder="이름" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="age">
          <FormItem>
            <FormLabel>나이</FormLabel>
            <FormControl>
              <Input placeholder="나이" type="number" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="deptId">
          <FormItem>
            <FormLabel>부서</FormLabel>
            <FormControl>
              <Select v-bind="componentField">
                <SelectTrigger>
                  <SelectValue placeholder="부서를 선택해 주세요." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem v-for="dept in depts" :key="dept.id" :value="String(dept.id)">{{
                      dept.name
                    }}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit" class="mt-4">추가</Button>
      </form>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { z } from "zod"
import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import { useClient } from "@/composables/client"

const emit = defineEmits(["create"])

type Depts = Awaited<ReturnType<typeof client.dept.all.query>>

const client = useClient()
const depts = ref<Depts>([])
const isOpen = ref(false)

onMounted(async () => {
  depts.value = await client.dept.all.query()
})

const formSchema = toTypedSchema(
  z.object({
    name: z.string(),
    age: z.number().min(1).max(150),
    // Select의 데이터는 string 만 가능한 제약이 있다!
    deptId: z.string(),
  })
)

const form = useForm({ validationSchema: formSchema })

const onSubmit = form.handleSubmit(async (values) => {
  // deptId를 number로 변환해서 전송
  await client.user.create.mutate({ ...values, deptId: Number(values.deptId) })
  isOpen.value = false
  emit("create")
})
</script>
