import { createSSRRender } from 'create-react-app-ssr/lib/create-ssr-render'
import Root from './app/Root'
import { createState } from './app/state'
export const staticRender = createSSRRender(Root, { createState })
