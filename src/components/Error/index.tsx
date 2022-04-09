import './index.scss'

export interface ErrorProps {
  errorText?: string
}

export default function Error(props: ErrorProps) {
  const { errorText = '查询异常' } = props

  return (
    <div className='error'>{errorText}</div>
  )
}