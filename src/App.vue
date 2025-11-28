<template>
  <div class="min-h-screen flex flex-col bg-slate-900 text-slate-50">
    <header class="border-b border-slate-700 px-4 py-3 flex items-center justify-between">
      <h1 class="text-lg font-bold">
        遊戯王 確率計算ツール（仮）
      </h1>
      <nav class="flex gap-4 text-sm">
        <RouterLink
          to="/"
          class="hover:text-emerald-400"
          active-class="text-emerald-400 font-semibold"
        >
          トップ
        </RouterLink>
        <RouterLink
          to="/calculator"
          class="hover:text-emerald-400"
          active-class="text-emerald-400 font-semibold"
        >
          確率計算
        </RouterLink>
        <RouterLink
          to="/deck"
          class="hover:text-emerald-400"
          active-class="text-emerald-400 font-semibold"
        >
          デッキ入力
        </RouterLink>
      </nav>
    </header>

    <main class="flex-1 px-4 py-6">
      <div class="max-w-3xl mx-auto">
        <RouterView />
      </div>
    </main>

    <footer class="border-t border-slate-700 px-4 py-2 text-xs text-center text-slate-400">
      © {{ new Date().getFullYear() }} 遊戯王 確率計算ツール（仮）
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
