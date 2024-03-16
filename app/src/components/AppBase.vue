<template>
  <Toaster />
  <Suspense>
    <slot />
  </Suspense>
</template>

<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue"
import { useToast } from "@/components/ui/toast/use-toast"
import { ref, onErrorCaptured, onUnmounted } from "vue"
import { TRPCClientError } from "@trpc/client"

const { toast, dismiss } = useToast()
const toastId = ref<string>()

onErrorCaptured((error) => {
  console.warn("Error Captured:", error)

  const title = error instanceof TRPCClientError ? error.data.code : "Error"
  const description = error.message

  const { id } = toast({
    title,
    description,
    variant: "destructive",
  })
  toastId.value = id

  return false
})

onUnmounted(() => {
  if (toastId.value) dismiss(toastId.value)
})
</script>
