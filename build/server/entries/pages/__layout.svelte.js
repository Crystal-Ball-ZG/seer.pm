import { c as create_ssr_component } from "../../chunks/index-959040e3.js";
var header_svelte_svelte_type_style_lang = "";
var footer_svelte_svelte_type_style_lang = "";
const prerender = true;
const load = async ({ url, fetch }) => {
  const res = await fetch("posts.json");
  return res.ok ? {
    props: {
      path: url.pathname,
      posts: await res.json()
    }
  } : { props: { path: url.pathname } };
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default, load, prerender };
