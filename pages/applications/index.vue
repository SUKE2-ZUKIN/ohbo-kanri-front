<template>
  <v-table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header.text">
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="application in applications" :key="application.company">
        <td>{{ application.company }}</td>
        <td>{{ application.position }}</td>
        <td>{{ application.description }}</td>
        <td>
          <a :href="application.url" target="_blank" rel="noopener noreferrer">
            {{ application.source }}
          </a>
        </td>
        <td>
          <v-btn color="primary" text="編集" :to="{ path: `/applications/${application.id}` }"></v-btn>
          <v-btn color="error" text="">削除</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-btn color="cyan" text="新規追加" :to="{ path: `/applications/new` }"></v-btn>
</template>

<script setup>
definePageMeta({ layout: 'default' })

const headers = [
  { text: '会社名', value: 'company' },
  { text: '職種', value: 'position' },
  { text: '事業内容', value: 'description' },
  { text: '応募媒体', value: 'source' },
  { text: '', value: '' },
];

// ダミーデータ
const applications = [
  {
    id: 1,
    company: '株式会社A',
    position: 'エンジニア',
    description: 'ソフトウェア開発',
    source: 'Wantedly',
    url: 'https://www.wantedly.com/projects',
  },
  {
    id: 2,
    company: '株式会社B',
    position: 'デザイナー',
    description: 'UI/UXデザイン',
    source: 'リンクトイン',
    url: 'https://jp.linkedin.com/',
  },
  // 他の応募データ
];

</script>