import './index.scss'

export interface EmptyProps {
  emptyText?: string
}

export default function Empty(props: EmptyProps) {
  const { emptyText = '暂无数据' } = props

  return (
    <div className="empty">{emptyText}</div>
  )
}