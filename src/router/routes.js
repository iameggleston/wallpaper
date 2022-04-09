import Top from '@/components/templates/Top.vue'

export default [{
  path: '/',
  component: Top
}, {
  path: '*',
  redirect: '/'
}]
