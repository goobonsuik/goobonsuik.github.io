import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/goobonsuik/", // 저장소 이름으로 수정
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/, // JSX 파일 처리
  },
})
