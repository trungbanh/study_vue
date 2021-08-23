<template>
  <div>
    <Head>
      <title>Home - My app</title>
      <meta
        head-key="description"
        name="description"
        content="This is a page specific description"
      />
    </Head>
    <h1 class="text-2xl text-gray-700 text-center mb-4">Home component</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, expedita?
      Officiis autem, omnis hic similique facere tempora culpa animi quisquam
      commodi illum sapiente error fugiat? Nobis, architecto? Sapiente, laborum
      sint!
    </p>
    <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>
  </div>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Head,
  },
  props: {
    user: Object,
  },
};
</script>