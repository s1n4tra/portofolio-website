import dynamic from 'next/dynamic'

const NoSSR = props => <>{props.cjildren}</>

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false })