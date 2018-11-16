import { createSSRRender } from 'src/lib/create-react-app-ssr/src/create-ssr-render'
import Root from './app/Root'
import { createState } from './app/state'
export const staticRender = createSSRRender(Root, { createState })
