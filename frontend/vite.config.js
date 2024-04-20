import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"
import Inspect from 'vite-plugin-inspect'
import { cdn } from 'vite-plugin-cdn2'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      React(),
      cdn({
        modules: [
          { name: 'react', version: '18.2.0', relativeModule: './umd/react.production.min.js' },
          { name: 'react-dom', version: '18.2.0', relativeModule: './umd/react-dom.production.min.js', aliases: ['client'] }
        ],
        apply: command //'build' | 'serve';
      }),
      Inspect(),
      viteSingleFile()]
  }
})