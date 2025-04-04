import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ClogMap', // 暴露的全局变量名
      fileName: 'index' // 输出的包文件名
    }
  },
  plugins: [dts({ insertTypesEntry: true, rollupTypes: false })]
})
