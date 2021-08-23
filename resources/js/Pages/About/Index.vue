<template>
  <div>
    <Head>
      <title>About - My app</title>
      <meta
        head-key="description"
        name="description"
        content="This is a page specific description"
      />
    </Head>
    <h1>About Us</h1>
  </div>
</template>


<script>
import { Head, Link } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Head,
    Link,
  },
};
</script>