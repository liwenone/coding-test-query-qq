import './index.scss'

export interface LoadingProps {
  loadingText?: string
}

export default function Loading(props: LoadingProps) {
  const { loadingText = '正在加载...' } = props

  return (
    <div className='loading'>{loadingText}</div>
  )
}