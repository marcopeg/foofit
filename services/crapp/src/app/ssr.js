import { createSSRRender } from 'create-react-app-ssr/lib/create-ssr-render'
import Root from './Root'
import { createState } from './state'
export const staticRender = createSSRRender(Root, { createState })
