// Shim: qualquer import do módulo SIMD/threads aponta para o build local não-threaded.
export * from './ort-wasm.mjs';
export { default } from './ort-wasm.mjs';
